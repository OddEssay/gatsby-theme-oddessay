const path = require('path')

module.exports = ({ config, mode }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('babel-loader'),
                options: {
                    presets: [['react-app', { flow: false, typescript: true }]],
                }
            },
            {
                loader: require.resolve('react-docgen-typescript-loader'),
            }
        ],
    });
    config.module.rules.push({
        test: /\.css$/,
        use: [
            {
                loader: "postcss-loader",
                options: {
                    ident: "postcss",
                    plugins: [
                        require("tailwindcss"),
                        require("autoprefixer")
                    ]
                }
            }
        ],
        include: path.resolve(__dirname, "../")
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
