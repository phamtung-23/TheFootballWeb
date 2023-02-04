import User from '../model/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { createError } from '../util/error.js';

//handle register
export const register = async(req, res, next) =>{
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username:req.body.username,
      password:hashPass,
      email:req.body.email,

    })
    await newUser.save()
    res.status(200).send("Tạo tài khoản Thành công!")
  } catch (error) {
    next(error);
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