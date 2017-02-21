var webpack = require('webpack');
var config = require('./webpack.config.js');
var gulp = require('gulp');
var gutil = require('gulp-util');
gulp.task('default', function (done) {
    webpack(config).watch(undefined, onBuild(done));
});

function onBuild(done) {
    return function (err, stats) {
        if (err) {
            gutil.log('Error', err);
            if (done) {
                done();
            }
        } else {
            Object.keys(stats.compilation.assets).forEach(function (key) {
                gutil.log('Webpack: output ', gutil.colors.green(key));
            });
            gutil.log('Webpack: ', gutil.colors.blue('finished ', stats.compilation.name));
            if (done) {
                done();
            }
        }
    }
}