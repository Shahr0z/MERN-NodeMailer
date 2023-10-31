const { sendEmail } = require('../models/emailModel');

const send = async (req, res) => {
    const { to } = req.body;

    try {
        const result = await sendEmail(to);
        res.json({ message: result });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send email', details: error });
    }
};

module.exports = { send };
