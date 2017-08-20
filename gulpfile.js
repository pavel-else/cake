var gulp 		= require('gulp');
var minifyCss 	= require('gulp-minify-css');
var sass 		= require('gulp-sass');
var notify 		= require('gulp-notify');

gulp.task('mincss', function(){
  return gulp.src('sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss())
    .pipe(gulp.dest('css'))
 });


gulp.task('watcher', function () {
	gulp.watch('sass/main.scss', ['mincss']); 
});

gulp.task('default', ['watcher', 'mincss']);





