import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { manageHotelSchema } from "@/schema/manageHotelSchema";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

const ManageHotelDescription = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof manageHotelSchema>>;
}) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Description</h2>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input
                placeholder="Name"
                {...field}
                className={
                  form.getFieldState("name").error ? "border-red-300" : ""
                }
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex flex-row gap-4">
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input
                  placeholder="City"
                  {...field}
                  className={
                    form.getFieldState("city").error ? "border-red-300" : ""
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input
                  placeholder="Country"
                  {...field}
                  className={
                    form.getFieldState("country").error ? "border-red-300" : ""
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Last Name"
                {...field}
                className={
                  form.getFieldState("description").error
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
        name="pricePerNight"
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormLabel>Price Per Night</FormLabel>
            <FormControl>
              <Input
                placeholder="Price Per Night"
                {...field}
                type="number"
                onChange={(ev) =>
                  field.onChange(Number(ev.currentTarget.value))
                }
                className={
                  form.getFieldState("pricePerNight").error
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
        name="starRating"
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormLabel>Rating</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a star rating" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default ManageHotelDescription;
