require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , nodemailer = require('nodemailer')
    , transporter = nodemailer.createTransport('smtps://'+process.env.SMTP_LOGIN+':'+process.env.SMTP_PASSW+'@smtp.mailgun.org')
    , PORT = 7777;

const app = express();

app.use( express.static( `${__dirname}/../build` ) ); // hosting

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
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
            return done(null, user[0]); // put on req.user for BACKEND use
        })
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: '/#/home',
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
    res.redirect(308, '/');
})

//endpionts
app.post('/message/submit', (req, res) => {
    const db = app.get('db');
    const { parentsFirstName, parentsLastName, parentsEmail, parentsPhone, studentsName, message } = req.body;
    const mailOptions = {
        from: '"'+parentsFirstName+'" <'+process.env.TEST_SENDER+'>', // sender address
        to: process.env.TEST_RECIPIENT, // list of recievers
        subject: 'Test Mail', // Subject line
        text: req.body.message, // plaintext body
        html: '<b>'+req.body.message+'</b>' // html body
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return console.log(err);
        }
        console.log('Message sent: ' + info.response);
    });

    db.create_message([req.user.user_id, parentsFirstName, parentsLastName, parentsEmail, parentsPhone, studentsName, message]).then((response) => console.log(response));
})

app.get('/calendar/month/:month', (req, res) => {
    const db = app.get('db');
    db.get_distinct_days([req.params.month]).then((response) => res.send(response));
})

app.get('/calendar/day/:day/:month', (req, res) => {
    const db = app.get('db');
    db.get_distinct_times([req.params.day, req.params.month]).then((response) => res.send(response));
})

app.post('/calendar/submit', (req, res) => {
    const db = app.get('db');
    console.log(req.body)
    const { month, day, time } = req.body; 
    db.create_booking([ req.user.user_id, month, day, time ]).then(response => {
        db.delete_time([req.body.time_id])
    })
    .catch(err => console.log(err))
})

app.listen(PORT, () => { console.log(`Server listening on port: ${PORT}.`); });