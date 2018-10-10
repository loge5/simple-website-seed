var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');

var paths = {
  styles: {
    src: './src/sass/*.scss',
    dest: 'dist/css/'
  },
  scripts: {
    src: './src/js/*.js',
    dist: './dist/js/'
  },
  fonts: {
    src: './node_modules/font-awesome/fonts/*',
    dist: 'dist/fonts'
  },
  other: {
    src: ['./src/index.html', './src/favicon.ico'],
    dist: 'dist'
  }
}
function stylesSass () {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/sass/'));
}
function stylesConcat () {
  return gulp.src(
    [
      './node_modules/font-awesome/css/font-awesome.min.css',
      './node_modules/bootstrap/dist/css/bootstrap.min.css',
      './build/sass/*.css'
    ]
  )
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./build/css/'));
}
function stylesMinify () {
  return gulp.src('./build/css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest(paths.styles.dest));
}
var styles = gulp.series(stylesSass, stylesConcat, stylesMinify);
function scripts () {
  return gulp.src(
    [
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/popper.js/dist/umd/popper.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
        paths.scripts.src
    ]
  )
  .pipe(concat('all.js'))
  .pipe(gulp.dest(paths.scripts.dist));
}
async function fonts () {
  gulp.src(paths.other.src).pipe(gulp.dest(paths.other.dist));
}
async function other () {
  gulp.src(paths.fonts.src).pipe(gulp.dest(paths.fonts.dist));
}
var build = gulp.parallel(styles, scripts, fonts, other);
function watch () {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.other.src, other);
}

exports.watch = gulp.series(build, watch);
exports.default = build;
