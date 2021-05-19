/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: { url: '/', static: true },
        src: { url: '/dist' },
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-dotenv',
        ['@snowpack/plugin-sass', {}],
        [
            '@snowpack/plugin-babel',
            {
                input: ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
                transformOptions: {
                    presets: ['@babel/preset-react'],
                },
            },
        ],
        [
            '@snowpack/plugin-run-script',
            {
                cmd: 'npm run prettier-write && npm run prettier-watch',
            },
        ],
    ],
    routes: [],
    optimize: {},
    packageOptions: {},
    devOptions: {
        hostname: 'localhost',
        port: 8888,
    },
    buildOptions: {
        sourcemap: true,
        watch: true,
    },
    alias: {
        '@': './src',
    },
}
