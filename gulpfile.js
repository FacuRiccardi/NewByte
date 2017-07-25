var gulp = require("gulp"),
	sass = require("gulp-sass"),
	browserSync = require("browser-sync").create(),
	autoprefixer = require("autoprefixer"),
	postCss = require("gulp-postcss");

gulp.task("serve",["sass"] ,function(){
	return	browserSync.init({
		server:{
			baseDir: "./"
		},
		online: false
	});
});

gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
                .pipe(sass())
                .pipe(gulp.dest('./css'))
                .pipe(browserSync.reload({stream: true}));
});

/*gulp.task("sass", function(){
	return gulp.src("./sass/*.scss")
	.pipe(sass())
	.pipe(postCss(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        })))
	.pipe(gulp.dest("./css"));
});*/

gulp.task('watch', ['serve'], function () {
    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
	gulp.watch("./css/*.css").on('change', browserSync.reload);
	gulp.watch("./js/*.js").on('change', browserSync.reload);
});