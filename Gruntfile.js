module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ''
      },
      js: {
        src: ['src/js/*.js'],
        dest: 'dest/js/<%= pkg.name %>.js'
      },
      css: {
        src: ['src/css/*.css'],
        dest: 'dest/css/<%= pkg.name %>.css'
      }
    },
    uglify: {
      options: {
        banner: '/**\n* <%= pkg.name %> \n* @author  Raheel Khan <dronzer92@gmail.com>\n* @licence The MIT License (MIT)\n* <%= grunt.template.today() %>\n*/\n'
      },
      build: {
        src: 'dest/js/<%= pkg.name %>.js',
        dest: 'dest/js/<%= pkg.name %>.min.js'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dest/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dest/css',
          ext: '.min.css'
        }]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};
