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
     //     outputStyle: 'compressed',
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
    concat_css: {
       options: {
      },
      all: {
        src: ['assets/css/font-awesome.css', 'assets/css/bootstrap.css'],
        dest: 'assets/css/bootstrap.css',
      },
    },
    cssmin: {
      options: {
      },
      target: {
        files: {
          'assets/css/bootstrap.css': ['assets/css/bootstrap.css']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('build', ['copy', 'sass', 'concat_css', 'cssmin']);
  grunt.registerTask('default', ['build', 'watch']);
};