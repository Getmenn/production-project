import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../types/config';
import { buildCssLoader } from '../loaders/buildCssLoader';

export default ({ config } : {config: webpack.Configuration}) => { // сторибук работает и без этого
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', 'tsx');

    if (config.module?.rules) {
        config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });
    }

    config.module?.rules?.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    });
    config.module?.rules?.push(buildCssLoader(true));
    return config;
};
