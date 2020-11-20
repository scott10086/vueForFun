// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // // 忽略花括号在同一行（内容也就在同一行了）的语句块中的最后一个分号
    // "omitLastInOneLineBlock": false,
    // //(默认) 如果下一句以 [、(、/、+ 或 - 开头，忽略句末分号 (或缺少分号)。
    // "beforeStatementContinuationChars": "any",
    // // 如果下一句以 [、(、/、+ 或 - 开头，要求句末有分号。
    // "beforeStatementContinuationChars": "never",
    // // 如果下一句以 [、(、/、+ 或 - 开头，禁止末尾有分号。
    // "beforeStatementContinuationChars": "never"
  }
}
