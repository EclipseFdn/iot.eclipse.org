module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    outputStyle: 'compressed',
                    includePaths: ['assets/stylesheets', require('node-bourbon').includePaths]
                },
                files: {
                    'assets/css/bootstrap.css': 'assets/stylesheets/bootstrap.scss'
                }
            }
        },

        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },

            sass: {
                files: 'assets/stylesheets/**/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            },

            html: {
                files: ['*.html', '**/*.html'],
                options: {
                    livereload: true
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('build', ['sass']);
    grunt.registerTask('default', ['build', 'watch']);

};
