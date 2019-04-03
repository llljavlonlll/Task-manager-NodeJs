const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "jbutabaev@gmail.com",
        subject: "Thanks for joining in!",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    });
};

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "jbutabaev@gmail.com",
        subject: "We hope you come back",
        text: `We are sorry to see you go, ${name}. Why did you quit?`
    });
};

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
};
