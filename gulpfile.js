var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var cleanCSs = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pump = require('pump');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', function () {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});

gulp.task('inject', function () {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');

    var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js'], { read: false });
    var injectOptions = { ignorePath: '/public' };
    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    };
    return gulp.src('./src/views/*.ejs')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});

gulp.task('minify-css', function () {
    return gulp.src('./public/css/*.css')
        .pipe(cleanCSs())
        .pipe(gulp.dest('./public/lib/_app'));
});

gulp.task('compress', function (cb) {
    pump([
        gulp.src('./public/js/*.js'),
        uglify(),
        gulp.dest('./public/lib/_app')
    ],
    cb
    );
});

gulp.task('serve', ['style'], function () {
    var options = {
        script: 'app.js',
        delayTime: 1,
        env: { 'PORT': process.env.PORT },
        watch: jsFiles
    };
    return nodemon(options)
        .on('restart', function (ev) {
            console.log('Restarting.... ' + ev);
        });
});
