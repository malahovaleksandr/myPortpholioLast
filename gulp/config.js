module.exports = {
    paths: {
        jade: {
            srcIndex:'resourse/index.jade',
            distIndex: 'public',
            src: 'resourse/jade/*.jade',
            srcWatch: ['resourse/jade/*.jade ','resourse/jade/add/*.jade '],
            dist: 'public/page'
        },
        scss: {
            src: 'resourse/scss/main.scss',
            dist: 'public/css/'
        },
        php:{
            src: 'resourse/php/*.php',
            dist: 'public/php'
        },
        js: {
            src: 'resourse/js/*.js',
            dist: 'public/js/'
        },
        image: {
            src: 'resourse/img/*.*',
            dist: 'public/image/'
        },
        svg: {
            src: 'resourse/img/*/*.svg',
            dist: 'public/'
        },
        font:{
            src: 'resourse/fonts/*/*.* | resourse/fonts/*.*',
            dist: 'public/fonts/'
        },
        watch: {
            src: 'resourse/scss/*.scss'
        }
    },
    root: './public',

    clean: [
        './public/css/*.css',
        './public/js/*.js',
        './public/image/*',
        './public/page/*.html'
    ],

    spriteSvgConfig: {
        mode: {
            symbol: {
                dest: './image/',
                sprite: 'sprite.svg'
            }
        }
    },

    autoprefixerConfig: ['> 1%','last 8 versions','firefox >= 4','safari 7','safari 8','IE 8','IE 9','IE 10','IE 11']
};
