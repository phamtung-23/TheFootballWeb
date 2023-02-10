import User from "../model/user.model.js";
import bcrypt from 'bcryptjs'

//UPDATE
export const updateUser = async(req, res, next) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.status(200).json(updateUser)
  } catch (error) {
    next(error)
  }
}
//UPDATE PASSWORD
export const updateUserPassword = async(req, res, next) => {
  try {
    const pass = req.body.password
    if (!pass||pass.length<6){
      res.status(405).json({message:"Password phải có trên 6 kí tự!"})
    }else{
      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(pass, salt);
      const updateUserPass = await User.findByIdAndUpdate(req.params.id,{$set:{password:hashPass}},{new:true})
      res.status(200).json({updateUserPass,message:"Thay đổi mật khẩu thành công!!"})
    }
  } catch (error) {
    next(error)
  }
}
//DELETE
export const deleteUser = async(req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json("user đã được xóa!")
  } catch (error) {
    next(error)
  }
}
// GET 
export const getUserByID = async(req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}
// GET ALL
export const getAllUser = async(req, res, next) => {

  try {
    const userAll = await User.find()
    res.status(200).json(userAll)
  } catch (error) {
    next(error)
  }
}