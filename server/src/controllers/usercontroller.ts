import { Response } from "express";
import User from "../models/User.js";
import { AuthRequest } from "../middleware/authmiddleware.js";

export const getCurrentUser = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const user = await User.findById(req.userId).select("-password");

    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
      return;
    }

    res.status(200).json(user);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};