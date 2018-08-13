module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'node_modules/font-awesome/fonts',
          src: ['**'],
          dest: 'assets/fonts',
          filter: 'isFile'
        }]
      }
    },
    sass: {
      dist: {
        options: {
          outputStyle: 'compressed',
          includePaths: ['assets/stylesheets', require('node-bourbon').includePaths]
        },
        files: {
          'assets/css/bootstrap.css': 'assets/stylesheets/bootstrap.scss',
          'assets/css/font-awesome.css': 'node_modules/font-awesome/scss/font-awesome.scss'
        }
      }
    },
    watch: {
      grunt: {
        files: ['Gruntfile.js']
      },
      sass: {
        files: 'assets/stylesheets/**/*.scss',
        tasks: ['build'],
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
    },
    concat: {
      options: {
        separator: '\n',
      },
      dist: {
        src: ['assets/css/font-awesome.css', 'assets/css/bootstrap.css'],
        dest: 'assets/css/bootstrap.css',
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('build', ['copy', 'sass', 'concat']);
  grunt.registerTask('default', ['build', 'watch']);
};