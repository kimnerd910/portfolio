module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    'vue/multi-word-component-names': 'off',
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
     // Prettier 관련 규칙 비활성화
     'prettier/prettier': 'off',
     // 미사용 변수 경고 비활성화
     'no-unused-vars': 'off',
  },
};
