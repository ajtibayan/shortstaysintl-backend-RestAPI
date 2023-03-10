require("dotenv").config();

const express = require("express");
const nodeMailer = require("nodemailer");

const router = express.Router();

// POST Handle sitewide contact form email submissions
router.post("/", (req, res) => {
  const eventSelected = [
    "No Event Selected",
    "FREE Workshops",
    "One-on-One Mentoring",
    "Blueprint Course",
  ];
  const contactForm = {
    tncEvents: "Training And Coaching Event Form",
    cpForm: "Contact Page Form",
    hpForm: "Home Page Rental Analysis Form",
  };

  // Instantiate html email body
  let html;

  switch (req.body.contactFormType) {
    case "tncEvents":
      html = `
        <h3>${contactForm[req.body.contactFormType]}</h3>
        <p>Name: <strong>${req.body.name}</strong></p>  
        <p>I would like info about: <strong>${
          eventSelected[req.body.eventOption]
        }</strong></p>
`;
      break;
    case "cpForm":
      html = `
        <h3>${contactForm[req.body.contactFormType]}</h3>
        <p>Name: <strong>${req.body.name}</strong></p>
        <p>Phone: <strong>${req.body.phone}</strong></p>
        <p>Email: <strong>${req.body.email}</strong></p>
        <p>Property Type: <strong>${req.body.propType}</strong></p>
        <p>Address: <strong>${req.body.address}</strong></p>
`;
      break;
    case "hpForm":
      html = `
        <h3>${contactForm[req.body.contactFormType]}</h3>
        <p>Name: <strong>${req.body.fname} ${req.body.lname}</strong></p>
        <p>Phone: <strong>${req.body.phone}</strong></p>
        <p>Email: <strong>${req.body.email}</strong></p>
        <p>Address: <strong>${req.body.address}</strong></p>
`;
      break;
    default:
      res.status(400).json({ mssg: "Not a valid form submission" });
  }

  async function main() {
    const transporter = nodeMailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PWRD,
      },
    });

    const info = await transporter.sendMail({
      from: `${req.body.name} <${req.body.email}>`,
      to: "aj@9cmarketing.com",
      subject: `${contactForm[req.body.contactFormType]}`,
      html: html,
    });

    res.status(200).json({ sent: true });
  }

  main().catch((e) => {
    console.log(e);
    res.status(400).json({ sent: false });
  });
});

module.exports = router;
