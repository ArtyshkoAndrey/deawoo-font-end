let mix = require('laravel-mix');

mix.js('resource/js/app.js', 'public/js')
  .sass('resource/scss/index.scss', 'public/css').options({
    processCssUrls: false
  })
  .webpackConfig({
    devServer: {
      proxy: {
        "!**/*.(js|css)": { target: "http://localhost:8080" },
      }
    }
  })