import React from 'react';
import { Header } from '@/components/Header';
import { PhotoGrid } from '@/components/PhotoGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PhotoGrid />
      </main>
    </div>
  );
};

export default Index;