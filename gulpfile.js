var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-clean-css'),
    rename = require('gulp-rename');

gulp.task('sass', function() {
	return gulp.src('app/scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
	.pipe(cssmin())
	.pipe(rename({
		suffix: '.min'
	}))
	.pipe(gulp.dest('app/css'));
});

gulp.task('watch', function(){
	gulp.watch(['app/scss/**/*.scss','app/scss/*.scss'], ['sass']);
});

gulp.task('default', ['sass', 'watch']);
