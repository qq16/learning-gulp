const gulp = require("gulp");
const { series } = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const sourcemaps = require("gulp-sourcemaps");

function clean(cb) {
  cb();
}

function build(cb) {
  cb();
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
}

function genSourceMap(cb) {
  cb();
  return gulp
    .src("dist/*.js")
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("dist"));
}

exports.build = build;
exports.genSourceMap = genSourceMap;
exports.default = series(clean, build, genSourceMap);
