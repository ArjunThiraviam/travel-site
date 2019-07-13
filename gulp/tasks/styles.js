var gulp = require('gulp'), 
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvar = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('stylestask', function() {
    return gulp.src('./app/assets/styles/style.css')
        .pipe(postcss([cssImport, mixins, nested, cssvar, autoprefixer]))
        .on('error', function(errorInfo){
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles/'));

});

