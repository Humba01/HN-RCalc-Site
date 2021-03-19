/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
var gulp = require('gulp'),
    devServer = require('gulp-devserver')

gulp.task('server', function() {

  gulp.src('./public')
  .pipe(devServer({
      port: 3001,
      livereload: {
        clientConsole: true
      },
      proxy: {
        enable: true,
      }
    })
  );

});

gulp.task('testServer', function() {

  gulp.src('./tests')
  .pipe(devServer({
      port: 5001,
      livereload: {
        clientConsole: true
      },
      proxy: {
        enable: true,
      }
    })
  );

});
