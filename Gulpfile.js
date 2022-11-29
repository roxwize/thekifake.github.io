import gulp from "gulp";
import { deleteAsync } from "del";
import gulpMarked from "gulp-markdown";
import header from "gulp-header";
import inject from "gulp-inject";
import webp from "gulp-webp";

const { src, dest, watch, series } = gulp;

const nonop = ["./img/nonop/*.jpg", "./img/nonop/*.png"];

export function optimiseImages() {
  src(nonop)
    .pipe(
      webp({
        preset: "picture",
      })
    )
    .pipe(dest("./img"));
  return deleteAsync(nonop);
}

export function md() {
  const sources = src("./md-themes/*.css", { read: false });
  return src("./src/**/*.md")
    .pipe(gulpMarked())
    .pipe(header("<!-- inject:css -->\n<!-- endinject -->\n"))
    .pipe(inject(sources))
    .pipe(dest("./"));
}

watch("./src/**/*.md", md);
watch(nonop, optimiseImages);

export default () => series(optimiseImages, md);
