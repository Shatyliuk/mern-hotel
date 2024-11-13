import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { manageHotelSchema } from "@/schema/manageHotelSchema";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { hotelTypes } from "./constants";
import { Badge } from "@/components/ui/badge";
import { FormControl, FormField, FormItem } from "@/components/ui/form";

const ManageHotelType = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof manageHotelSchema>>;
}) => {
  const { getFieldState } = form;
  const errors = getFieldState("type");

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Type</h2>

      <ToggleGroup type="multiple" className="flex flex-wrap">
        {hotelTypes.map((type) => {
          return (
            <FormField
              control={form.control}
              name="type"
              key={type}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <ToggleGroupItem
                      {...field}
                      size="lg"
                      onClick={(ev) => {
                        if (
                          field.value.includes(
                            ev.currentTarget.ariaValueText ?? ""
                          )
                        ) {
                          field.onChange(
                            field.value.filter(
                              (val) => val !== ev.currentTarget.ariaValueText
                            )
                          );
                          return;
                        }
                        field.onChange([
                          ...field.value,
                          ev.currentTarget.ariaValueText,
                        ]);
                      }}
                      value={type}
                      aria-valuetext={type}
                    >
                      <Badge>{type}</Badge>
                    </ToggleGroupItem>
                  </FormControl>
                </FormItem>
              )}
            />
          );
        })}
        {errors.error?.message && (
          <p className="text-destructive">{errors.error?.message}</p>
        )}
      </ToggleGroup>
    </div>
  );
};

export default ManageHotelType;