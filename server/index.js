const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , PORT = 7777;

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then((db) => {
    app.set('db', db);
});

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function (accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db')
        , userData = profile._json;
    db.find_user([userData.identities[0].user_id])
        .then((user) => {
            if (user[0]) {
                // console.log(user[0]);
                return done(null, user[0].user_id);
            } else {
                db.create_user([
                    userData.given_name,
                    userData.family_name,
                    userData.email,
                    userData.picture,
                    userData.identities[0].user_id
                ]).then((user) => {
                    return done(null, user[0].user_id);
                })
            }
        });
}))
passport.serializeUser(function (id, done) {
    done(null, id);
    console.log(id);
})
passport.deserializeUser(function (id, done) {
    app.get('db').find_session_user([id])
        .then((user) => {
            return done(null, user[0]);
        })
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/home',
    failureRedirect: '/auth'
}))
app.get('/auth/me', (req, res) => {
    if (req.user) {
        return res.status(200).send(req.user);
    } else {
        return res.status(401).send('Please log in.');
    }
})
app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(308, 'http://localhost:3000');
})

app.listen(PORT, () => { console.log(`Server listening on port: ${PORT}.`); });