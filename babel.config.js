module.exports = {
  presets: [
    [
      "@vue/app",
      {
        debug: true,
        polyfills: [
          "es6.promise",
          "es6.array.find-index",
          "es7.array.includes",
          "es6.string.includes"
        ]
      }
    ]
  ],
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true
      },
      "vant"
    ]
  ]
};
