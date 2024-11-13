import z from "zod";
import { useMutation } from "react-query";
import { manageHotelSchema } from "@/schema/manageHotelSchema";

const addHotel = async (formData: z.infer<typeof manageHotelSchema>) => {
  const dataToSend = handleFormData(formData);

  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL ?? ""}/api/my-hotels`,
    {
      body: dataToSend,
      method: "POST",
      credentials: "include",
    }
  );

  const data = await response.json();

  return data;
};

export const useAddHotel = ({
  onError,
  onSuccess,
}: {
  onError?: (error: { message: string }) => void;
  onSuccess?: (data: { message: string }) => void;
}) => {
  return useMutation({
    mutationFn: (data: z.infer<typeof manageHotelSchema>) => addHotel(data),
    onError,
    onSuccess,
  });
};

const handleFormData = (data: z.infer<typeof manageHotelSchema>) => {
  const {
    city,
    name,
    country,
    description,
    adultCount,
    childCount,
    type,
    facilities,
    pricePerNight,
    starRating,
    imageUrls,
  } = data;
  const formData = new FormData();

  formData.append("name", name);
  formData.append("city", city);
  formData.append("country", country);
  formData.append("description", description);
  formData.append("adultCount", adultCount.toString());
  formData.append("childCount", childCount.toString());

  formData.append("pricePerNight", pricePerNight.toString());
  formData.append("starRating", starRating.toString());

  facilities.forEach((facility, index) => {
    formData.append(`facilities[${index}]`, facility);
  });
  type.forEach((type, index) => {
    formData.append(`type[${index}]`, type);
  });

  Array.from(imageUrls).forEach((item) => {
    formData.append("imageFiles", item as string);
  });

  return formData;
};
