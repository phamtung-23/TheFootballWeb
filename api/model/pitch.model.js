import mongoose from 'mongoose';
const { Schema } = mongoose;

const pitchSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  address:{
    type: String,
    required: true
  },
  phone:{
    type: String,
    required: true
  },
  photo:{
    type: [String],
    required: true
  },
  description:{
    type: String,
    required: true
  },
  like:{
    type: Number,
    min:0
  },
  dislike:{
    type: Number,
    min:0
  },
  itemPitch:[{number:Number, unavailableTime: {type:[Date]}}],
  price:{
    type: Number,
    required:true
  },
  feature:{
    type: Boolean,
    required:true
  }

})

export default mongoose.model('Pitch', pitchSchema)