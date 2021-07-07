const gulp = require('gulp')
const sass = require('gulp-sass')

const transpileSassToCss = (cb) => {
    return gulp.src(`src/sass/style.sass`)
        .pipe(sass())
        .pipe(gulp.dest(`src/css`))
}

const watchSassFile = () => {
    return gulp.watch(['src/sass/style.sass'], transpileSassToCss)
}
    const beingWatched = (cb) => {
        console.log(`I am being watched`);
        cb();
    }

exports.default = gulp.series(beingWatched, watchSassFile)