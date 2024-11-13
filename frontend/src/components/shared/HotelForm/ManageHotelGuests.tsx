import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { manageHotelSchema } from "@/schema/manageHotelSchema";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

const ManageHotelGuests = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof manageHotelSchema>>;
}) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Guests</h2>
      <div className="flex flex-row gap-4">
        <FormField
          control={form.control}
          name="adultCount"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Adults</FormLabel>
              <FormControl>
                <Input
                  placeholder="Adults"
                  {...field}
                  type="number"
                  onChange={(ev) =>
                    field.onChange(Number(ev.currentTarget.value))
                  }
                  className={
                    form.getFieldState("adultCount").error
                      ? "border-red-300"
                      : ""
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="childCount"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Childs</FormLabel>
              <FormControl>
                <Input
                  placeholder="Childs"
                  {...field}
                  type="number"
                  onChange={(ev) =>
                    field.onChange(Number(ev.currentTarget.value))
                  }
                  className={
                    form.getFieldState("childCount").error
                      ? "border-red-300"
                      : ""
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
};

export default ManageHotelGuests;
