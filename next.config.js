const path = require("path");

module.exports = {
    reactStrictMode: true,
    images  : {
        domains: ['i.ibb.co'],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "./src/assets/scss")],
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // eslint-disable-next-line no-param-reassign
        config.ignoreWarnings = [
            {
                message:
                    /(magic-sdk|@walletconnect\/web3-provider|@web3auth\/web3auth)/,
            },
        ];
        return config;
    },

    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ]
    },
};
