export default ({ env }) => import(`./webpack.config.${env}.mjs`).then(mod => mod.default);
