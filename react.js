module.exports = {
  plugins: ['react', 'react-hooks'],
  extends: ['./index', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-no-comment-textnodes': 'off',
    'react/jsx-no-duplicate-props': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
};
