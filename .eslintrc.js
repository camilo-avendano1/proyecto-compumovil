module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "linebreak-style": "off", // Desactiva la regla para evitar conflictos
  },
};
