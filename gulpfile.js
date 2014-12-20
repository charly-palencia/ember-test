var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    bower = require('gulp-bower'),
    jshint = require('gulp-jshint'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    coffee = require('gulp-coffee'),
    connect = require('gulp-connect'),
    karma = require('gulp-karma'),
    del = require('del');
    haml = require('gulp-haml');
    handlebars = require('gulp-ember-handlebars');

//bower
gulp.task('bower', function() {
  return bower('./bower_components')
    .pipe(gulp.dest('dist/lib/'))
});

//ember-handlebars
gulp.task('templates', function(){
  gulp.src(['src/app/templates/*.hbs'])
    .pipe(handlebars({
      outputType: 'amd'
     }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('dist/assets/js'));
});

// minify css
gulp.task('styles', function() {
  return gulp.src('src/app/styles/main.scss')
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

//minify js
gulp.task('scripts', function() {
  return gulp.src('build/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

//compress img
gulp.task('images', function() {
  return gulp.src('src/app/images/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/assets/img'))
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('haml', function () {
    gulp.src('./src/index.haml')
    .pipe(haml())
    .pipe(gulp.dest('./'));
});

//convert coffee files
gulp.task('coffee', function() {
  gulp.src('src/app/scripts/**/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('build'))
});

//convert coffee spec files
gulp.task('coffee-spec', function() {
  gulp.src('src/spec/**/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('build/spec'))
});

//cache all assets
gulp.task('clean', function(cb) {
    del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], cb)
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('html-components', function(){
  gulp.src('src/app/scripts/components/**/*.html')
  .pipe(gulp.dest('dist/views'));
});

//autmatic reload changes
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('src/app/styles/**/*.scss', ['styles']);
  // Watch .js files
  gulp.watch('build/**/*.js', ['scripts']);
  // Watch image files
  gulp.watch('src/app/images/**/*', ['images']);
  //watch html files
  gulp.watch(['*.html'], ['html']);
  //watch coffee
  gulp.watch(['src/app/scripts/**/*.coffee'], ['coffee']);
  // Watch bower components
  gulp.watch('bower_components/**/*', ['bower']);
  //watch html components
  gulp.watch(['src/app/scripts/**/*.html'], ['html-components']);
  //watch test
  gulp.watch(['build/test/**/*.js'], ['test']);

  //watch coffee spec
  gulp.watch(['src/spec/**/*.coffee'], ['coffee-spec']);

  //watch coffee spec
  gulp.watch(['src/index.haml'], ['haml', 'html']);

  //wath handlebars views
  gulp.watch(['src/app/templates/*.hbs'], ['templates']);

  livereload.listen();
  gulp.watch(['dist/**']).on('change', livereload.changed);
});

gulp.task('server', function() {
  connect.server({
    port: 3000,
    livereload:true
  });
});


//TEST
gulp.task('test', function() {
  return gulp.src('./foobar')
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      console.log(err);
      this.emit('end'); //instead of erroring the stream, end it
    });
});


gulp.task('default', ['clean', 'haml', 'coffee', 'scripts', 'styles', 'html', 'html-components', 'templates', 'bower'], function() {
  gulp.start('server', 'watch');
});
