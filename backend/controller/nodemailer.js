
const express=require("express")
const nodemailer = require('nodemailer');
const NewsleeterRoute=express.Router()

let transporter = nodemailer.createTransport({
    service: 'gmail',
    port:465,
    secure:true, 
    auth: {
        user: 'deepakkumarktr1998@gmail.com', 
        pass: 'tsdv qyur zats bxzf' 
    }
});

const sendMailToUser = async (email) => {
    try {
        // Mail options
        let mailOptions = {
            from: 'deepakkumarktr1998@gmail.com', 
            to: email,
            subject: 'NewsLetter',
            html: ` <div style="background-color: #f0f0f0; padding: 20px; border-radius: 10px; text-align: center;">
            <h2 style="margin-bottom: 10px;">Your NewsLetter</h2>
            <p><strong>Hello, Greeting of the day !</strong></p>
            <p>We are excited to confirm your NewsLetter mail :</p>
            <p>Please make sure to mark your calendar for this important event. Your participation is greatly appreciated.</p>
            <p>If you have any questions or need further assistance, feel free to contact us.</p>
            <p>Best regards</p>
        </div>`
        };

        // Send email
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

// Route to send email 
NewsleeterRoute.post('/send-mail', async (req, res) => {
    try {
        const { email } = req.body;

        await sendMailToUser(email);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = {NewsleeterRoute};