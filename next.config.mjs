import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./src/i8n/request.js');
const nextConfig = {
  images: {
    domains: ['drive.google.com', "drive.usercontent.google.com"], // Add drive.google.com to the list of allowed domains
  }
};

export default withNextIntl(nextConfig);