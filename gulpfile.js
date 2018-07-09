var gulp = require('gulp'); 
var concat = require ('gulp-concat');
var uglify = require ('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var sass = require ('gulp-sass');

gulp.task('js-concat', function() {
    return gulp.src(
            [
                './node_modules/jquery/dist/jquery.min.js',
                './node_modules/popper.js/dist/umd/popper.min.js',
                './node_modules/bootstrap/dist/js/bootstrap.min.js',
                './src/js/*.js'
            ]
        )
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('html-copy', function() {
    gulp.src(['./src/index.html', './src/favicon.ico']).pipe(gulp.dest('dist'));
});

gulp.task('font-copy', function() {
    gulp.src(['./node_modules/bootstrap/fonts/*']).pipe(gulp.dest('dist/fonts/'));
    gulp.src(['./node_modules/font-awesome/fonts/*']).pipe(gulp.dest('dist/fonts/'));
});

gulp.task('css-sass', function () {
    return gulp.src('./src/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./build/sass/'));
});

gulp.task('css-concat', ['css-sass'],function() {
    return gulp.src(
            [
                './node_modules/font-awesome/css/font-awesome.css',
                './node_modules/bootstrap/dist/css/bootstrap.min.css',
                './node_modules/bootstrap/dist/css/bootstrap.theme.min.css',
                './build/sass/*.css'
            ]
        )
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('css-minify', ['css-concat'],function() {
    return gulp.src('./build/css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist/css/'));
});

gulp.task('watch', ['default'], function() {
    gulp.watch('./src/js/*.js', ['js']);
    gulp.watch('./src/sass/*.scss', ['css']);
    gulp.watch('./src/*.html', ['html-copy']);
});

gulp.task('css', ['css-minify']);
gulp.task('js', ['js-concat']);
gulp.task('html', ['html-copy']);
gulp.task('fonts', ['font-copy']);
gulp.task('default', ['css', 'js', 'html', 'fonts']);