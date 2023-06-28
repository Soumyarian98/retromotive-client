/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: "pk_test_YWRhcHRpbmctaG91bmQtOTYuY2xlcmsuYWNjb3VudHMuZGV2JA",
    CLERK_SECRET_KEY: "sk_test_CbkVqKalne0j2pchdkQHPGtvhm4yvkVvFdtllrfnDw"
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.glsl/,
      type: "asset/source",
    })
    return config
  },
}

module.exports = nextConfig
