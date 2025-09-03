import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Support form
app.post('/support', async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'Support Message',
    text: `Email: ${req.body.email}\nMessage: ${req.body.message}`
  });

  res.send('ok');
});

// Signup form
app.post('/signup', async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: req.body.email,
    subject: 'Thanks for signing up!',
    text: 'Welcome to KingdomRobes! Stay tuned for updates.'
  });

  res.send('ok');
});

app.listen(3000, () => console.log('Server running on port 3000'));
