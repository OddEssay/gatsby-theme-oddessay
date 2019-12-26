module.exports = ({ config, mode }) => {
    config.module.rules.push({
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};