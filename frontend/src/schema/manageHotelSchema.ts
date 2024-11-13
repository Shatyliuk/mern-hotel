import { z } from "zod";

export const manageHotelSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .trim()
    .min(1, { message: "Required" }),
  city: z
    .string({ message: "City is required" })
    .trim()
    .min(1, { message: "Required" }),
  country: z
    .string({ message: "Country is required" })
    .trim()
    .min(1, { message: "Required" }),
  description: z
    .string({ message: "Description is required" })
    .trim()
    .min(1, { message: "Required" }),
  type: z.array(z.string()).min(1, "Required"),
  adultCount: z.number(),
  childCount: z.number(),
  facilities: z.array(z.string()).min(1, "Required"),
  pricePerNight: z.number(),
  imageUrls: z.any(),
  starRating: z.string(),
});
