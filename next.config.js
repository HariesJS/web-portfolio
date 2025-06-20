const createNextIntlPlugin = require("next-intl/plugin")

const withNextIntl = createNextIntlPlugin()

const isProd = process.env.NODE_ENV === "production"

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: isProd ? "/web-portfolio" : "",
    assetPrefix: isProd ? "/web-portfolio/" : "",
}

module.exports = withNextIntl(nextConfig)
