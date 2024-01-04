// import the required modules
require("dotenv").config();
const express = require("express");
// cross origin 
const cors = require('cors');
// require nodemailer
// const nodemailer = require('nodemailer');


// create an express app
const app = express();

// setting up CORS middleware to fix cross origin issue 
app.use(cors({
    origin: function (origin, callback) {
        callback(null, origin);
    },
    methods: ["GET","POST"]
}));

// using express for bodyParser work
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// create a transporter object with your gmail credentials
// you may need to enable less secure apps or use OAuth2 for gmail

  
//create transporter

// const transporter = nodemailer.createTransport({
//    service: 'gmail',
//    auth: {
//      user: process.env.MY_EMAIL,
//      pass: process.env.PASS
//    }
// });



// create a route to handle the post request from the frontend

/*  
 
app.post('/api/contact', (req, res) => {
  // get the form data from the request body
  const { name, email, message } = req.body;
    // create a mail options object with the form data
    const mailOptions = {
        from: email, // sender address
        to: process.env.MY_EMAIL, // receiver address
        subject: `Contact from ${name}`, // subject line
        text: message // plain text body
    };
    // send the email with the transporter object
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      // handle the error from nodemailer
      console.error(err);
      res.status(500).send('Server error');
    } else {
      // handle the success from nodemailer
      console.log(info);
      res.status(200).send('Email sent');
    }
  });
});

*/

 
app.post('/api/contact', (req, res) => {
    // get the form data from the request body
    const { name, email, message } = req.body;
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    res.status(200).send("Logged successfully")
}
)


// listen on port 5000 or any other port you want
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});




  
   
  
  