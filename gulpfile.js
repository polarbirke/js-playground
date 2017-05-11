var gulp = require('gulp');
var file = require('gulp-file');
var rollup = require('rollup');
var babel = require('rollup-plugin-babel');

gulp.task('build', function () {
    return rollup.rollup({
        entry: "./src/main.js",
        plugins: [
            babel({
                presets: [
                    [
                        "es2015", {
                        "modules": false
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
            format: "umd",
            moduleName: "tracking",
            dest: "./dist/ck.core.tracking.js",
            sourceMap: true
        });
    })
});