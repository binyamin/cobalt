const gulp = require("gulp");

const sass = require('gulp-sass');

const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");

const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");

function css(cb) {
  gulp
    .src("sass/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', console.error))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(rename('cobalt.min.css'))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("css"));
  cb();
}

function watch() {
  gulp.watch("sass/**/*.scss", css);
}

exports.pack = css;
exports.watch = watch;