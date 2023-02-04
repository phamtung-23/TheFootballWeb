import Pitch from "../model/pitch.model.js";
// CREATE
export const createPitch = async(req, res, next) => {
  const newPitch = new Pitch(req.body)
  try {
    const savePitch =await newPitch.save()
    res.status(200).json(savePitch)
  } catch (error) {
    next(error)
  }
}
//UPDATE
export const updatePitch = async(req, res, next) => {
  try {
    const updatePitch = await Pitch.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.status(200).json(updatePitch)
  } catch (error) {
    next(error)
  }
}
//DELETE
export const deletePitch = async(req, res, next) => {
  try {
    await Pitch.findByIdAndDelete(req.params.id)
    res.status(200).json("Sân bóng đã được xóa!")
  } catch (error) {
    next(error)
  }
}
// GET 
export const getPitchByID = async(req, res, next) => {
  try {
    const pitch = await Pitch.findById(req.params.id)
    res.status(200).json(pitch)
  } catch (error) {
    next(error)
  }
}
// GET ALL
export const getAllPitch = async(req, res, next) => {

  try {
    const pitchAll = await Pitch.find()
    res.status(200).json(pitchAll)
  } catch (error) {
    next(error)
  }
}