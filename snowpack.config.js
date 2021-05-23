const proxy = require('http2-proxy')

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
                cmd: 'eslint src --ext .js,.jsx,.ts,.tsx',
                watch: 'esw -w --fix src --ext .js,.jsx,.ts,.tsx',
            },
        ],
    ],
    routes: [
        {
            src: '/api/.*',
            dest: (req, res) => {
                req.url = req.url.replace(/^\/api/, '')
                return proxy.web(req, res, {
                    hostname: 'localhost',
                    port: 8081,
                })
            },
        },
    ],
    optimize: {},
    packageOptions: {},
    devOptions: {
        hostname: 'localhost',
        port: 8888,
        hmrErrorOverlay: true,
    },
    buildOptions: {
        // sourcemap: true,
        // watch: true,
    },
    alias: {
        '@': './src',
    },
}
