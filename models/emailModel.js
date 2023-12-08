const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const sendEmail = async (to) => {
    try {

        console.log('log to email', to);
        // Generate a random 4-digit OTP
        const otp = Math.floor(1000 + Math.random() * 9000);

        // Create an expiration time for the OTP (2 minutes from now)
        const otpExpiry = new Date();
        otpExpiry.setMinutes(otpExpiry.getMinutes() + 2);

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            // port: 587,
            auth: {
                user: process.env.EMAIL, // Replace with your Gmail address
                pass: process.env.PASSWORD, // Replace with your Gmail password
            },
        });

        const mailOptions = {
            from: process.env.EMAIL, // Replace with your Gmail address
            to,
            subject: 'Verification Code',
            text: `Your verification code is ${otp}. It will expire after 5 minutes.`,
            html: `<p>Your verification code is: <strong>${otp}</strong></p><p>It will expire after 5 minutes.</p>`,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return { otp, otpExpiry };
    } catch (error) {
        throw error;
    }
};

module.exports = { sendEmail };
