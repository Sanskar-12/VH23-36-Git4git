import { User } from "../models/User.js";

export const Register = async (req,res,next) => {
  try {
    const { username, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    user = await User.create({
      username,
      email,
      password,
    });

    const token = await user.generateToken();

    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.status(200).cookie("token", token, options).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


export const Login = async (req,res,next) => {
    try {
      const {  email, password } = req.body;
  
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "User doesnt exists",
        });
      }

      const isMatch=await user.MatchPassword(password);

      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: "Incorrect password",
        });
      }
  
      const token = await user.generateToken();
  
      const options = {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
  
      res.status(200).cookie("token", token, options).json({
        success: true,
        user,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };

  export const logout = async (req, res, next) => {
    try {
      res
        .status(200)
        .cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
        .json({
          success: true,
          message: "Logged Out",
        });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
  
