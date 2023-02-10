import User from '../model/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { createError } from '../util/error.js';
import nodemailer from 'nodemailer'

//handle register
export const register = async(req, res, next) =>{
  try {
    const reg = /^\w+@[^ ]+\.[a-z]{2,3}$/
    const user = await User.findOne({username:req.body.username})
    if(user){
      res.status(401).json({message:"User đã tồn tại!!!"})
    }else if(!reg.test(req.body.email)){
      res.status(404).json({message:"Email không họp lệ!"})
    }
    else if(req.body.password.length<6){
      res.status(405).json({message:"Password phải có trên 6 kí tự!"})
    }else{
      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(req.body.password, salt);
      const newUser = new User({
        username:req.body.username,
        password:hashPass,
        email:req.body.email,
  
      })
      await newUser.save()
      res.status(200).json({success:"Tạo tài khoản thành công!"})
    }
  } catch (error) {
    next(error);
    // res.status(500).json({err:"Tạo tài khoản thất bại!"})

  }
}
// handle login
export const login = async(req, res, next) =>{
  try {
    const user = await User.findOne({username:req.body.username})
    if(!user) return next(createError(404, "Không tìm thấy user!"));

    const isPasswordCorrect = await bcrypt.compare( req.body.password,user.password)
    if(!isPasswordCorrect) return next(createError(400,"Username hoặc Password đã sai!"))
  
    const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT)
    
    const { password, isAdmin, ...otherDetails} = user._doc;
    res.cookie("access_token", token, {
      httpOnly: true,
    }).status(200).json({...otherDetails})
  } catch (error) {
    next(error);
  }
}

export const forget = async (req, res, next) => {
  const reg = /^\w+@[^ ]+\.[a-z]{2,3}$/

  try{
    if(!reg.test(req.body.email)){
      res.status(405).json({message:"Email không họp lệ!"})
    }else{
      const user = await User.findOne({email:req.body.email})
      if(!user){
        res.status(404).json({message:"Email không tồn tại!"})
      }else{
        let randomOTP = Math.floor(Math.random() * (999999 - 100000) + 100000);
        // let testAccount = await nodemailer.createTestAccount();
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          service:'gmail',
          auth: {
            user: 'pttung23082001@gmail.com', // generated ethereal user
            pass: 'btomgqdwtjnskvxd', // generated ethereal password
            // btomgqdwtjnskvxd
          },
        });
        await transporter.sendMail({
          from: "pttung23082001@gmail.com", // sender address
          to: req.body.email, // list of receivers
          subject: "OTP-Restore Password", // Subject line
          // text: "Mã xác minh của bạn là: 123456", // plain text body
          html: `<p>${randomOTP} là mã xác minh của bạn.</p>`, // html body
        },async(err) => {
          if(err){
            res.status(505).json({message:"Đã xãy ra lỗi gửi mail!"})
          }else{
            const newOTP = {
              otp:randomOTP
            }
            const updateUser = await User.findByIdAndUpdate(user._id,{$set:newOTP},{new:true})
            res.status(200).json({updateUser,message:'Gửi mã code đến email thành công!!!'})
          }
        })
        // res.status(200).json({message:"Email họp lệ!"})
      }
    }
  }
  catch (err){

  }
}

export const verifyOtp = async (req, res, next) => {
  try {
    const id = req.params.id
    const user = await User.findOne({_id:id})
    if(!user){
      res.status(404).json({message:"User không tồn tại!"})
    }else{
      if(user.otp == req.body.otp){
        res.status(200).json({message:"Xác nhận OTP thành công!"})
      }else{
        res.status(405).json({message:"OTP không chính xác!"})
      }
    }
    
  } catch (error) {
    next(error);
  }
}