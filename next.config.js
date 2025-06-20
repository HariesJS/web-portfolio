const createNextIntlPlugin = require("next-intl/plugin")

const isProd = process.env.NODE_ENV === "production"
const isExport = process.env.NEXT_EXPORT === "true"

let nextConfig = {
    basePath: isProd ? "/web-portfolio" : "",
    assetPrefix: isProd ? "/web-portfolio/" : "",
    eslint: {
        ignoreDuringBuilds: true,
    },
    output: "export",
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
        forceSwcTransforms: true,
    },
}

if (!isExport) {
    const withNextIntl = createNextIntlPlugin()
    nextConfig = withNextIntl(nextConfig)
}

module.exports = nextConfig
