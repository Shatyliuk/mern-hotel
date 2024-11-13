import { Input } from "@/components/ui/input";
import { manageHotelSchema } from "@/schema/manageHotelSchema";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

const ManageHotelImages = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof manageHotelSchema>>;
}) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Images</h2>
      <Input
        {...form.register("imageUrls")}
        type="file"
        accept="image/*"
        placeholder="Images"
        multiple={true}
        className={form.getFieldState("name").error ? "border-red-300" : ""}
      />
    </>
  );
};

export default ManageHotelImages;
