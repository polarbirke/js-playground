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
        input: './src/main.js',
        plugins: [
            babel({
                presets: [
                    [
                        '@babel/preset-env', {
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
        return bundle.write({
            format: 'iife',
            file: './dist/main.js',
            sourceMap: true
        });
    })
});