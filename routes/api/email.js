const router = require("express").Router();

sendConfirmEmail = () => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.elasticemail.com",
        port: 2525,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER, // generated ethereal user
            pass: process.env.EMAIL_PASS // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // send mail with defined transport object
    let info = transporter.sendMail({
        from: '"High 5 Productions!" <gutleberb@gmail.com>', // sender address
        to: this.props.formData.email, // list of receivers
        subject: "Parts Request Recieved ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>" // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = router;