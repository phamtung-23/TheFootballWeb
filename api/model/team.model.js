import mongoose from 'mongoose';

const TeamSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  logo:{
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
  member:{
    type: [String],
  },
  description:{
    type: String,
    required: true
  },
  uniform:{
    type: [String],
  },
  photo:{
    type:[String]
  },
  like:{
    type: Number,
    min:0
  },
  dislike:{
    type: Number,
    min:0
  },
  isRecruit:{
    type: Boolean,
    default:false
  }

})

export default mongoose.model('Team', TeamSchema)