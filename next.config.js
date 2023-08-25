/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      "media-exp1.licdn.com",
      "st4.depositphotos.com",
      "hyvv-dev-test.s3.amazonaws.com",
      "encrypted-tbn0.gstatic.com",
      "lh3.googleusercontent.com",
      "s.gravatar.com",
    ],
  },
  env: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    NEXT_PUBLIC_AWS_S3_BUCKET_NAME: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME,
    API_PATH: process.env.API_PATH,
    APP_URL: process.env.APP_URL,
  },
  output: "standalone",
};
