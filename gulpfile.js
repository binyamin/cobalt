const gulp = require("gulp");

const sass = require('gulp-sass');

const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const concat = require("gulp-concat");

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
    .pipe(gulp.dest("dist"));
  cb();
}


function js(cb) {
  gulp
    .src("js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat('cobalt.js'))
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(uglify())
    .pipe(rename("cobalt.min.js" ))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest("dist"));
  cb();
}

function watch() {
  gulp.watch("sass/**/*.scss", css);
  // gulp.watch("js/**/*.js", js);
}

// exports.pack = gulp.parallel(css, js);
exports.pack = css;
exports.watch = watch;