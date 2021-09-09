/*
 * Copyright (c) 2021.
 * This code is the property of the Fulliton developer.
 * Write all questions and suggestions on the Vkontakte social network https://vk.com/fulliton
 */

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