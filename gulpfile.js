const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const rollup = require('gulp-rollup');
const replace = require('rollup-plugin-replace');
const eslint = require('gulp-eslint');

const entry = './src/server/**/*.js';

//开发环境
function buildDev() {
    return watch(entry, {
        ignoreInitial: false
    }, function () {
        gulp.src(entry)
            .pipe(babel({
                babelrc: false,
                "plugins": [
                    ["@babel/plugin-proposal-decorators",{
                        "legacy": true
                    }],
                    ["transform-es2015-modules-commonjs"]
                ]
            }))
            .pipe(gulp.dest('dist'));
    });
}
//上线环境
function buildProd() { 
    return gulp.src(entry)
        .pipe(babel({
            babelrc: false,
            ignore: ['./src/server/config/*.js'],
            plugins: [
                ["@babel/plugin-proposal-decorators",{
                    "legacy": true
                }],
                ["transform-es2015-modules-commonjs"]
            ]
        }))
        .pipe(gulp.dest('dist'));
}
//清洗环境
function buildConfig() {
    return gulp.src(entry)
        .pipe(rollup({
            input: './src/server/config/index.js',
            output: {
                format: 'cjs'
            },
            plugins: [
                replace({
                    'process.env.NODE_ENV': JSON.stringify('production')
                })
            ]
        }))
        .pipe(gulp.dest('dist'));
}
//代码检查环境
function buildLint() {
    return gulp.src(entry)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

let build = gulp.series(buildDev);

if (process.env.NODE_ENV == 'production') {
    build = gulp.series(buildProd, buildConfig);
}

if (process.env.NODE_ENV == 'lint') {
    build = gulp.series(buildLint);
}

gulp.task('default', build);