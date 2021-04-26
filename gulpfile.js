// const express = require("express");
// const app = express();

// Import important packages
const gulp = require('gulp');
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const browserSync = require('browser-sync').create();
const browserify = require('browserify');
const sourcemaps = require('gulp-sourcemaps');

// SASS -> CSS
const sass = require('gulp-sass');
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

// HTML
const htmlmin = require('gulp-htmlmin');

// JavaScript / TypeScript
const terser = require('gulp-terser-js');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('uglifyify');
const JSHINT = require('jshint');

// Define important variables
const src = './dev';
const dest = './publish';

// Reload the browser
const reload = (done) => {
    browserSync.reload();
    done();
};

// Serve the dev-server in the browser
const serve = (done) => {
    browserSync.init({
        server: {
            baseDir: `${dest}`
        }
    });
    done();
};

const style_css = () => {
    // Find SASS
    return gulp.src(`${src}/SASS/style.sass`)
        // Init Plumber
        .pipe(plumber())
        // Start sourcemap
        .pipe(sourcemaps.init())
        // Compile SASS to CSS
        .pipe(sass.sync({ outputStyle: "compressed" })).on('error', sass.logError)
        // Add suffix
        .pipe(rename({ basename: 'style', suffix: ".min" }))
        // Add Autoprefixer & cssNano
        .pipe(postcss([autoprefixer(), cssnano()]))
        // Write sourcemap
        .pipe(sourcemaps.write(''))
        // Write everything to destination folder
        .pipe(gulp.dest(`${dest}/CSS`))
        // Reload page
        .pipe(browserSync.stream());
};


const html = () => {
    // Find HTML
    return gulp.src(`${src}/*.html`)
        // Init Plumber
        .pipe(plumber())
        // Compile HTML to minified HTML
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            html5: true,
            removeEmptyAttributes: true,
            removeTagWhitespace: true,
            sortAttributes: true,
            sortClassName: false
        }))
        // Write everything to destination folder
        .pipe(gulp.dest(`${dest}`));
};


// Compile .js to minified .js
const script = () => {
    return browserify(`${src}/JS/script.js`, { debug: true })
        .transform('babelify', {
            presets: ['babel-preset-env'],
            plugins: ['babel-plugin-transform-runtime']
        }).plugin('tinyify')
        .bundle()
        .pipe(source(`script.js`))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(`${dest}/JS`))
        .pipe(browserSync.stream())
};

// Copy assets
const img = () => {
    return gulp.src(`${src}/IMG/**`)
        .pipe(gulp.dest(`${dest}/IMG`));
};


const font = () => {
    return gulp.src(`${src}/FONTS/**`)
        .pipe(gulp.dest(`${dest}/FONTS`));
};


// Watch changes and refresh page
const watch = () => gulp.watch(
    [`${src}/*.html`, `${src}/JS/**/*.js`, `${src}/SASS/**/*.sass`, `${src}/IMG/**/*.*`],
    gulp.series(img, script, style_css, html,  reload));

// Development tasks
const dev = gulp.series(img, font, script, style_css, html, serve, watch);

// Build tasks
const build = gulp.series(img, font, script, style_css, html);

// Default function (used when type "gulp")
exports.default = dev;
exports.dev = dev;
exports.build = build;