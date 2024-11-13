import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { v2 as cloudinary } from "cloudinary";
import Hotel from "../models/hotel";
import { HotelType } from "../shared/types";

export const handleHotelsRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json(errors);
    return;
  }

  try {
    const imageFiles = req.files as Express.Multer.File[];
    const newHotel: HotelType = req.body;

    const uploadPromises = imageFiles?.map(async (image) => {
      const b64 = Buffer.from(image.buffer).toString("base64");
      let dataUri = `data:${image.mimetype};base64,${b64}`;

      const res = await cloudinary.uploader.upload(dataUri);

      return res.url;
    });

    const imageUrls = await Promise.all(uploadPromises);

    newHotel.imageUrls = imageUrls;
    newHotel.lastUpdated = new Date();
    newHotel.userId = req.userId;

    const hotel = await new Hotel(newHotel).save();

    res.status(201).json(hotel);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
