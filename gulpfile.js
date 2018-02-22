const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

gulp.task('pack-css', () => {
  return gulp.src(['assets/css/*.css'])
  .pipe(concat('build.min.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('assets/dist/css'))
})

gulp.task('pack-js', () => {
  return gulp.src(['assets/js/*.js'])
  .pipe(gulp.dest('assets/dist/js'))
})

gulp.task('build', ['pack-css', 'pack-js']);
