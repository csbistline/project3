require("dotenv").config();
const router = express.Router();
const nodemailer = require("nodemailer");

let transport = {
    host: "smtp.elasticemail.com",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take messages");
    }
});

router.post("/sendEmail", (req, res, next) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let vin = req.body.vin;
    let year = req.body.year;
    let make = req.body.make;
    let model = req.body.model;
    let message = req.body.message;

    let mail = {
        from: name,
        to: email,
        subject: "New Message from Contact Form",
        text: "Hellow World!",
        html: <h1>Hello World!</h1>
    };

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                msg: "fail"
            });
        } else {
            res.json({
                msg: "success"
            });
        }
    });
});

module.exports = router;