"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "../ui/card";
import { toast } from "sonner";
import { loginUserSchema } from "@/schema/loginSchema";
import { useLogin } from "@/hooks/useLogin";
import { Link, useNavigate } from "react-router-dom";

import { useQueryClient } from "react-query";

// Get QueryClient from the context

export function LoginForm() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof loginUserSchema>>({
    resolver: zodResolver(loginUserSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: login, isLoading } = useLogin({
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: async (data) => {
      if (!data.message) {
        await queryClient.invalidateQueries("validateToken");
        toast.success("Login Successful");

        navigate("/");
        return;
      }

      toast.error(data.message);
    },
  });

  function onSubmit(values: z.infer<typeof loginUserSchema>) {
    login(values);
  }

  return (
    <Card className="p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    className={
                      form.getFieldState("email").error ? "border-red-300" : ""
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Password"
                    {...field}
                    type="password"
                    className={
                      form.getFieldState("password").error
                        ? "border-red-300"
                        : ""
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col">
            <span className="text-sm">
              Not Register?{" "}
              <Button variant="link">
                <Link to="/register">Register</Link>
              </Button>
            </span>
            <Button
              type="submit"
              disabled={isLoading}
              className={isLoading ? "animate-pulse" : ""}
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}
