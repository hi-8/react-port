const rewireCssModules = require("react-app-rewire-css-modules-simple");

module.exports = function override(config, env) {

    config = rewireCssModules(config, env);

    // with loaderOptions
    config = rewireCssModules.withLoaderOptions({
        localIdentName: '[local]___[hash:base64:5]',
    })(config, env);

    return config;
};