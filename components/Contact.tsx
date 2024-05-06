'use client';

import { sendEmail } from '@/utils/send-email';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="input input-bordered flex items-center gap-2"
        >
          Ім'я
          <input
            type="text"
            className="grow"
            placeholder="Повне ім'я"
            {...register('name', { required: true })}
          />
        </label>
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="input input-bordered flex items-center gap-2"
        >
          Email адреса
          <input
            type="email"
            placeholder="example@domain.com"
            className="grow"
            {...register('email', { required: true })}
          />
        </label>
      </div>
      <div className="mb-5">
        <label htmlFor="message" className="mb-3 block text-base font-medium ">
          Повідомлення
        </label>
        <textarea
          rows={4}
          placeholder="Введіть ваше повідомлення тут..."
          className="textarea textarea-bordered w-full resize-none"
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className="btn btn-primary">Відправити</button>
      </div>
    </form>
  );
};

export default Contact;
