const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'slaven.bunijevac@gmail.com',
    subject: 'Welcome email',
    text: `Welcome to our app, ${name}!`
  });
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'slaven.bunijevac@gmail.com',
    subject: 'Cancelation notification',
    text: `Sorry to see you leave us ${name}. Let us know if there is anything we can do to improve.`
  });
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
};