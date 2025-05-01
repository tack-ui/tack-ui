/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*.{js,cjs,ts,tsx}': ['oxlint --fix', 'prettier --ignore-unknown --write'],
};
