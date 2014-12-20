#!/bin/bash

plugins=("gulp-ruby-sass"  "gulp-autoprefixer"  "gulp-minify-css"  "gulp-uglify"  "gulp-bower"  "gulp-jshint"  "gulp-imagemin"  "gulp-rename" "gulp-concat" "gulp-util" "gulp-notify" "gulp-cache" "gulp-livereload" "gulp-coffee" "gulp-connect" "gulp-karma" "del")

for index  in ${!plugins[*]}
do
  echo -e "install ${plugins[$index]} y/n (y)"
  read result
  if [ result != "n" ] 
  then
    npm install --save ${plugins[$index]}
  fi
done

