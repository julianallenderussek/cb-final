const User = require("../models/User");
const ErrorResponse = require('../utils/errorResponse');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;
  console.log(username, email, password)

  try {
    const user = await User.create({
      username, email, password
    });
    
    sendToken(user, 201, res)
  } catch (error) {
    next(error);
  }

}

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  console.log(email, password)

  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password"), 400)
  }

  try {
    const user = await User.findOne({ email }).select("+password");
    console.log(user)

  if (!user) {
    return next(new ErrorResponse("Invalid Credentials"), 401)
  }

  const isMatch = await user.matchPasswords(password);

  if (!isMatch) {
    return next(new ErrorResponse("Password do not match"), 401)
  }

  sendToken(user, 201, res)
  
  }  
  catch (error) {
    next(error);
  }
}

exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    
    if(!user) {
      return next(new ErrorResponse('Email could not be sent, user does not exists', 404))
    } 

    const resetToken = user.getResetPasswordToken();

    await user.save();

    const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;

    const message = `<h1> You have requested a password reset<7h1>
                      <p> Please go to this link to reset your password</>
                      <a href=${resetUrl} clicktracking=off> ${resetUrl}</a>
    `;

    try {
      await sendEmail({
        to: user.email,
        subject: "Password Reset Request",
        text: message
      });

    res.status(200).json({success: true, data:"Email Sent"})

    } catch (error) {
      console.log(error);
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

        await user.save();
        return next(new ErrorResponse("Email could not be send, await save", 500))
    };

  } catch (error) {
      next(error);
  }
} 

exports.resetPassword = async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.params.resetToken)
    .digest('hex');

  console.log('comparing token', resetPasswordToken)

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return next(new ErrorResponse("Invalid Reset Token", 400))
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    
    await user.save();

    res.status(201).json({
      success: true,
      data: "Password Reset Success"
    })

  } catch (err) {

  }
}

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({success:true, user ,token})
}