import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt",token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, // prevent client side js from accessing the cookie
    sameSite: "strict", // prevent csrf attacks
    secure: process.env.NODE_ENV !== "development", // only send the cookie over https in production
  });
};

