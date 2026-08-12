# Email Configuration

Required server-side variables (never expose to React):

CONTACT_ADMIN_EMAIL=admin@timeschool.edu
SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASSWORD=
MAIL_FROM_ADDRESS=
MAIL_FROM_NAME=TIME School System

If SMTP is unset, inquiries are still stored in `server/data/` and logged.
The API returns `emailDelivered: false` — it does not pretend mail was sent.
