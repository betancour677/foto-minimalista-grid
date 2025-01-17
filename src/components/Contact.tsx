import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  const scrollRef = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-8">
      <div ref={scrollRef} className="max-w-xl mx-auto opacity-0">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contacto</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input type="text" placeholder="Tu Nombre" required />
          </div>
          <div>
            <Input type="email" placeholder="Tu Email" required />
          </div>
          <div>
            <Textarea placeholder="Tu Mensaje" className="min-h-[150px]" required />
          </div>
          <Button type="submit" className="w-full">
            Enviar Mensaje
          </Button>
        </form>
      </div>
    </section>
  );
};