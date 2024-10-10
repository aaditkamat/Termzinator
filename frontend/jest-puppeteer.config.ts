module.exports = {
  launch: {
    headless: false,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-extensions-except=./path/to/your/extension",
      "--load-extension=./path/to/your/extension",
    ],
  },
};
