/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-html/astro",
    "stylelint-config-clean-order",
    "stylelint-plugin-logical-css/configs/recommended",
    "stylelint-plugin-defensive-css/configs/strict",
  ],
  plugins: [
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-use-nesting",
  ],
  rules: {
    "plugin/declaration-block-no-ignored-properties": true,
    "csstools/use-nesting": "always",
  },
};
