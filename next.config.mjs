import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: null,
  images: {
    domains: ['daisyui.com'],
  },
};

export default withNextIntl(nextConfig);
