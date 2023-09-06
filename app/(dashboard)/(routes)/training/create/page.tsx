"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { formSchema } from "../constants";

export default function TrainingPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };
        return (
      <div>
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl font-bold text-center md:text-4xl">
            Create a new training program
          </h2>
          <p className="text-sm font-light text-center text-muted-foreground md:text-lg">subtitle</p>

          <div className="m-8">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="">
                    <FormField name="prompt" render={({ field }) => (
                        <FormItem className="col-span-12">
                            <FormControl className="p-0 m-0">
                                <Input  placeholder="Name" className="border-0 focus-visible:ring focus-visible:ring-transparent"
                                disabled={isLoading} 
                                {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}/>
                                <div className="flex content-center justify-end w-full gap-1">
                <Link href="/training">
                    <Button variant="destructive">
                        Cancel
                    </Button>
                </Link>
                <Button variant="default" disabled={isLoading}>Save</Button>
            </div>

                </form>    
            </Form>
          </div>
        </div>
      </div>
    )
  }
  