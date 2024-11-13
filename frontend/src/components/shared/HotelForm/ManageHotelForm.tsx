import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Card } from "../../ui/card";
import { toast } from "sonner";
import ManageHotelDescription from "./ManageHotelDescription";
import { manageHotelSchema } from "@/schema/manageHotelSchema";
import ManageHotelType from "./ManageHotelType";
import ManageHotelFacilities from "./ManageHotelFacilities";
import ManageHotelGuests from "./ManageHotelGuests";
import { Separator } from "@/components/ui/separator";
import ManageHotelImages from "./ManageHotelImages";
import { useAddHotel } from "@/hooks/useAddHotel";

export interface HotelType {
  id: string;
  userId: string;
  name: string;
  city: string;
  country: string;
  description: string;
  type: number;
  adultCount: number;
  childCount: number;
  facilities: string[];
  pricePerNight: number;
  imageUrls: string[];
  lastUpdated: Date;
  starRating: number;
}

export function ManageHotelForm() {
  const form = useForm<z.infer<typeof manageHotelSchema>>({
    resolver: zodResolver(manageHotelSchema),
    defaultValues: {
      name: "",
      city: "",
      country: "",
      description: "",
      type: [],
      adultCount: 0,
      childCount: 0,
      facilities: [],
      pricePerNight: 0,
      imageUrls: [],
      starRating: "",
    },
  });
  const { mutate: addHotel, isLoading } = useAddHotel({
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: (data) => {
      toast.success(data.message);
    },
  });

  function onSubmit(values: z.infer<typeof manageHotelSchema>) {
    console.log(values);
    addHotel(values);
  }

  return (
    <Card className="p-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
          encType="multipart/form-data"
        >
          <ManageHotelDescription form={form} />

          <Separator />

          <ManageHotelType form={form} />

          <Separator />

          <ManageHotelFacilities form={form} />

          <Separator />

          <ManageHotelGuests form={form} />

          <Separator />

          <ManageHotelImages form={form} />

          <Button type="submit" disabled={isLoading}>
            Add hotel
          </Button>
        </form>
      </Form>
    </Card>
  );
}
