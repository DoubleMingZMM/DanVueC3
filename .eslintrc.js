module.exports = {
  root: true,
  env: {
    node: true
  },
  // vue 项目无法使用定制的 eslint-config-daniel/vue 的写法，故需要自定义
  extends: [
    'eslint-config-daniel',
    'plugin:vue/recommended'
  ],
  // 自定义规则
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/require-valid-default-prop': 'off',
    'vue/require-default-prop': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: "module"
  },
  plugins: [
    'vue'
  ]
}
