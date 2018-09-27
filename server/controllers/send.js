const nodemailer = require('nodemailer')

exports.sendMail = async (req, res) => {
  try {
    const { name, email, message } = req.body

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
      }
    })
    
    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: name,
      text: message,
      replyTo: email
    }
    
    const response = await transporter.sendMail(mailOptions)

    console.log(response)
    

    res.send({'what': 'it is'})

  } catch (error) {
    console.log('Send Mail Error: ', error)
    
  }
}