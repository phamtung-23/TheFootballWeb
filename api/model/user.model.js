import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  address:{
    type: String,
  },
  phone:{
    type: String,
  },
  icon:{
    type: String,
  },
  isAdmin:{
    type: Boolean,
    default:false
  },
  otp:{
    type: Number,
  }
},
  {timestamps: true}
)

export default mongoose.model('User', userSchema)