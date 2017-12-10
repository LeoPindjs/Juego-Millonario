import gulp from 'gulp'
import babel from 'gulp-babel'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import imagemin from 'gulp-imagemin'
import htmlmin from 'gulp-htmlmin'
import cssnano from 'gulp-cssnano'
import autoprefixer from 'gulp-autoprefixer'

gulp.task('Audios', () =>
    gulp.src('./Componentes/audios/*.*')
        .pipe(gulp.dest('./public/c/audios/'))
)

gulp.task('Imagenes', () =>
    gulp.src('./Componentes/img/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/c/img/'))
)

gulp.task('c-css', () =>
    gulp.src('./Componentes/css/*.css')
        .pipe(cssnano())
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./public/c/css/'))
)

gulp.task('ci-css', () =>
    gulp.src('./Componentes/Inicio/*.css')
        .pipe(cssnano())
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./public/c/Inicio'))
)

gulp.task('cp-css', () =>
    gulp.src('./Componentes/Principal/*.css')
        .pipe(cssnano())
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./public/c/Principal'))
)

gulp.task('ci-html', () =>
    gulp.src('./vistas/inicio.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./public/c/Inicio'))
)

gulp.task('cp-html', () =>
    gulp.src('./vistas/principal.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./public/c/Principal'))
)

/*gulp.task('Chart-js', () =>
    gulp.src('./Librerias/Chart.js')
        .pipe(concat('Chart.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/Librerias/'))
)

gulp.task('UUID-js', () =>
    gulp.src('./Librerias/UUID.js')
        .pipe(concat('UUID.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/Librerias/'))
)

gulp.task('Librerias', () =>
    gulp.src([
        './Librerias/Chart.js',
        './Librerias/UUID.js',
        ])
        .pipe(concat(''))
        .pipe(uglify())
        .pipe(gulp.dest('./public/Librerias/'))
)

gulp.task('Componente-helpers-js', () =>
    gulp.src('./Componentes/helpers/*.js')
        .pipe(concat('helpers.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('./public/Componentes/helpers/'))
)

gulp.task('Preguntas-js', () =>
    gulp.src('./Preguntas/*.js')
        .pipe(concat('Preguntas.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('./public/Preguntas/'))
)

gulp.task('Aleatorio-js', () =>
    gulp.src('./Aleatorio/*.js')
        .pipe(concat('Aleatorio.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('./public/Aleatorio/'))
)

gulp.task('Rutas-js', () =>
    gulp.src('./Rutas/*.js')
        .pipe(concat('Rutas.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('./public/Rutas/'))
)*/

gulp.task('ci-js', () =>
    gulp.src([
        './Rutas/Rutas.js',
        './Pintar/Pintar.js',
        './Componentes/Inicio/inicio.js',
    ])
    .pipe(concat('ci.js'))
    .pipe(gulp.dest('./public/c/Inicio'))
)

gulp.task('cp-js', () =>
    gulp.src([
        './Librerias/Chart.js',
        './Librerias/UUID.js',
        './Preguntas/Preguntas.js',
        './Aleatorio/Aleatorio.js',
        './Rutas/Rutas.js',
        './Componentes/helpers/helpers.js',
        './Componentes/Principal/Graficas.js',
        './Componentes/Principal/Pintar.js',
        './Componentes/Principal/Comodines.js',
        './Componentes/Principal/Juego.js',
        './Componentes/Principal/Main.js',
    ])
    .pipe(concat('cp.js'))
    .pipe(gulp.dest('./public/c/Principal'))
)

gulp.task('default', [
    'ci-html',
    'cp-html',
    'c-css',
    'ci-css',
    'cp-css',
    'Imagenes',
    'Audios',
    //'Chart-js',
    //'UUID-js',
    //'Componente-helpers-js',
    //'Preguntas-js',
    //'Aleatorio-js',
    //'Rutas-js',
    'ci-js',
    'cp-js',
])

//gulp.task('default',()=>{
  //  gulp.watch('./Componentes/**/*.html',['ci-html','cp-html'])
    //gulp.watch('./Componentes/**/*.css',['c-css','ci-css','cp-css'])
    //gulp.watch('./Componentes/img/*.*',['Imagenes'])
    //gulp.watch('./Componentes/**/*.js',['ci-js','cp-js'])
//})




