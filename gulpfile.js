var gulp = require("gulp");
var less = require("gulp-less");

gulp.task("less", function() {
  gulp.src("assets/less/style.less")
  .pipe(less())
  .pipe(gulp.dest("assets/css"));
});
