module.exports = {
    options: {
        jshintrc: true,
        reporter: require('jshint-stylish')
    },
    src: {
        src: ['src/scripts/**/*.js']
    },
    test: {
        src: ['test/**/*.spec.js']
    }
};
