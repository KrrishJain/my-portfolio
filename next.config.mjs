/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GOOGLE_FORM_URL: process.env.GOOGLE_FORM_URL,
    },
};

export default nextConfig;
