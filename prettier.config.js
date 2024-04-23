// prettier.config.js
module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  pluginSearchDirs: false,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrder: ['^@', '^[a-zA-Z0-9-]+', '^[./]'],
};
