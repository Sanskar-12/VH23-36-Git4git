import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const schema=new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    }
})

schema.pre("save",async function(next){
    if(this.isModified("password"))
    {
      this.password=await bcrypt.hash(this.password,10)
    }
  
    next()
  })

  schema.methods.MatchPassword=async function(password){
    return await bcrypt.compare(password,this.password)
  }
  

schema.methods.generateToken=function(){
    return  jwt.sign({_id:this._id},process.env.JWT_SECRET)
}

export const User=mongoose.model("User",schema)