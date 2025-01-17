import React from 'react';
import { Header } from '@/components/Header';
import { PhotoGrid } from '@/components/PhotoGrid';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PhotoGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;