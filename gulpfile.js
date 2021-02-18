const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('sass', () => {
  return gulp.src('./src/theme/scss/themes/*.scss')
            // .pipe(sass.sync().on('error', sass.logError))
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(gulp.dest('./static/themes'))
})

gulp.task('sass:watch', () => {
  gulp.watch('./src/theme/scss/themes/**/*.scss', ['sass'])
})