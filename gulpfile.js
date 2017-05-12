const gulp = require('gulp');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const eslint = require('gulp-eslint');

gulp.task('lint', () => {
    return gulp.src(['src/**/*.js'])
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
            format: 'iife',
            moduleName: 'tracking',
            dest: './dist/ck.core.tracking.js',
            sourceMap: true
        });
    })
});