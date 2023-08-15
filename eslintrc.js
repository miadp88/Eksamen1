module.exports = {
    env: {
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
    ],
    rules: {
        "vue/require-default-prop": "off",
    }
  },

  {
    "extends": [
      "some-other-config-you-use",
      "prettier"
    ]
  }