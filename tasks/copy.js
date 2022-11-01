const gulp = require("gulp");

// module.exports = function copy(done) {
//   gulp.src([
//     "source/fonts/*.{woff2,woff}",
//     "source/*.ico",
//   ], {
//     base: "source"
//   })
//   .pipe(gulp.dest("build"));
//   done();
// }

const htaccess = (done) => {
  gulp.src(".htaccess").pipe(gulp.dest("build"));
  done();
};

const ext = (done) => {
  gulp
    .src(["source/external/**/*", "source/libs/**/*"], {
      base: "source",
    })
    .pipe(gulp.dest("build"));
  done();
};

const copy = gulp.series(gulp.parallel(htaccess, ext));

module.exports = copy;
