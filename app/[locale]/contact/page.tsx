import Contact from '@/components/Contact';
import React from 'react';

const ContactPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-accent/5 px-4 py-10">
      <article className="container mx-auto flex flex-col gap-5">
        <h1 className="pb-4 text-center text-4xl font-bold">
          Звʼяжіться з нами
        </h1>
        <p className="mb-10 text-center text-lg">
          Ви розробляєте інструменти штучного інтелекту та зацікавлені у
          співпраці або просуванні їх на нашому сайті-агрегаторі? Ми відкриті
          для співпраці з інноваційними компаніями та розробниками!
        </p>
        <h2 className="text-2xl font-bold">Контактна інформація</h2>
        <Contact />
        <div className="text-center">
          <h3 className="mt-10 text-2xl font-bold">Дякуємо за звернення!</h3>
          <p>
            Ми цінуємо ваш інтерес до нашого сайту-агрегатора ШІ. Чекаємо на
            ваші повідомлення!
          </p>
        </div>
      </article>
    </main>
  );
};

export default ContactPage;
