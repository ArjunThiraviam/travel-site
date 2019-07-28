var gulp = require('gulp'), 
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir : "app"
        }
    });
    watch('./app/index.html', function(){
        browserSync.reload();
    });
    watch('./app/assets/scripts/**/*.js', gulp.series('runWebpack','reloadpage'));
   
    watch('./app/assets/**/*.css', gulp.series('stylestask','cssInject'));
});

gulp.task('cssInject', function() {
    return gulp.src('./app/temp/styles/style.css')
    .pipe(browserSync.stream());
});

gulp.task('reloadpage', function(){
    browserSync.reload();
})