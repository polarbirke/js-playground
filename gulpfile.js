const gulp = require('gulp');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const eslint = require('gulp-eslint');

gulp.task('lint', () => {
    return gulp.src(['**/*.js','!node_modules/**', '!src/test/**', '!dist/**', '!gulpfile.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('build', () => {
    return rollup.rollup({
        entry: './src/main.js',
        plugins: [
            babel({
                presets: [
                    [
                        'es2015', {
                        'modules': false
                    }
                    ]
                ],
                babelrc: false,
                exclude: ['node_modules/**', 'src/test/{,**/}*']
            })
        ]
    })
    .then(function (bundle) {
        bundle.write({
            format: 'umd',
            moduleName: 'tracking',
            dest: './dist/ck.core.tracking.js',
            sourceMap: true
        });
    })
});