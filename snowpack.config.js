/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: { url: '/', static: true },
        src: { url: '/dist' },
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-dotenv',
        [
            '@snowpack/plugin-sass',
            {},
        ],
        [
            "@snowpack/plugin-babel",
            {
                "input": ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
                transformOptions: {
                    "presets": ["@babel/preset-react"]
                }
            }
        ]
    ],
    routes: [
        
    ],
    optimize: {
        
    },
    packageOptions: {
        
    },
    devOptions: {
        hostname: 'localhost',
        port: 8888,
    },
    buildOptions: {
       
    },
    alias: {
        '@': './src'
    },
};
