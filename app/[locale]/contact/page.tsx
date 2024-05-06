import Contact from '@/components/Contact';
import React from 'react';

const ContactPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-accent/5">
      <div className="container mx-auto p-4">
        <h1 className="pb-4 text-4xl font-bold">Звʼяжіться з нами</h1>
        <Contact />
      </div>
    </main>
  );
};

export default ContactPage;
