const gulp = require("gulp");
const { series } = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

// `clean` 函数并未被导出（export），因此被认为是私有任务（private task）。
// clean 和 build 都可以被用在 `series()` 组合中。
function clean(cb) {
  // body omitted
  cb();
}

// `build` 函数被导出（export）了，因此它是一个公开任务（public task），
// 并且可以被 `gulp` 命令直接调用。
function build(cb) {
  cb();
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
}

exports.build = build;
exports.default = series(clean, build);
