import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const { toast } = useToast();

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    reset();
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-playfair font-semibold mb-6">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-gray-600">
              I'm always interested in new projects and collaborations. Feel free to reach out to discuss your ideas or schedule a shoot.
            </p>
            <div className="space-y-2">
              <p className="text-gray-800">
                <strong>Email:</strong>{" "}
                <a href="mailto:contact@johndoe.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                  contact@johndoe.com
                </a>
              </p>
              <p className="text-gray-800">
                <strong>Location:</strong>{" "}
                <span className="text-gray-600">New York City, NY</span>
              </p>
              <p className="text-gray-800">
                <strong>Instagram:</strong>{" "}
                <a href="https://instagram.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                  @johndoe
                </a>
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                placeholder="Your name"
                {...register("name", { required: "Name is required" })}
                className="w-full"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Your email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className="w-full"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <Input
                placeholder="Subject"
                {...register("subject", { required: "Subject is required" })}
                className="w-full"
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
            </div>

            <div>
              <Textarea
                placeholder="Your message"
                {...register("message", { required: "Message is required" })}
                className="w-full min-h-[150px]"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};