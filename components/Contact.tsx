'use client';

import { sendEmail } from '@/utils/send-email';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const t = useTranslations('Contact');

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
          {t('form.name')}
          <input
            type="text"
            className="grow"
            placeholder={t('form.namePlaceholder')}
            {...register('name', { required: true })}
          />
        </label>
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="input input-bordered flex items-center gap-2"
        >
          {t('form.email')}
          <input
            type="email"
            placeholder={t('form.emailPlaceholder')}
            className="grow"
            {...register('email', { required: true })}
          />
        </label>
      </div>
      <div className="mb-5">
        <label htmlFor="message" className="mb-3 block text-base font-medium ">
          {t('form.message')}
        </label>
        <textarea
          rows={4}
          placeholder={t('form.messagePlaceholder')}
          className="textarea textarea-bordered w-full resize-none"
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className="btn btn-primary">{t('form.submit')}</button>
      </div>
    </form>
  );
};

export default Contact;
