const Contact = require('../models/Contact');

exports.submitContactForm = async (req, res) => {
  try {
    const { fullName, email, phoneCode, phone, message, termsAccepted } = req.body;

    if (!fullName || !email || !phoneCode || !phone || !message || !termsAccepted) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newContact = new Contact({
      fullName,
      email,
      phoneCode,
      phone,
      message,
      termsAccepted
    });

    await newContact.save();
    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
