const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.post('/api/form', (res, req) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
         <h3>Contact Details</h3>
         <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>phone: ${req.body.phone}</li>
         </ul>
         <h3><li>Message:</li></h3>
         <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'vito79@ethereal.email',
                pass: 'pcNVu1UMzbWTKJP6Hz'
            }
        })

        let mailOptions = {
            from: 'test@gmail.com',
            to: 'vito79@ethereal.email',
            replyTo: 'test@gmail.com',
            sebjec: 'New Message',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err) {
                return console.log(err);
            }

            console.log('Message sent %s', info.message);
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
        })
    })
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})