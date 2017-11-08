INSERT INTO messages (
    user_id,
    parents_first_name,
    parents_last_name,
    parents_email,
    parents_phone,
    students_name,
    message
)
VALUES (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7
)
RETURNING *;