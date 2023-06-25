const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './i18n.ts'
);

module.exports = withNextIntl({
    // Other Next.js configuration ...
    experimental: { appDir: true },
    webpack(config) {
        config.resolve.fallback = {
            ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
            // by next.js will be dropped. Doesn't make much sense, but how it is
            fs: false, // the solution
        };

        return config;
    },

});

// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = withNextIntl(nextConfig)

