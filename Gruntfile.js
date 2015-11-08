module.exports = function(grunt){
  var cssFiles = [
  'assets/bower_components/bootstrap/dist/css/bootstrap.css'
  ];
  var jsFiles = [
  'assets/bower_components/angular/angular.js',
  'assets/bower_components/angular-ui-router/release/angular-ui-router.js',
  'assets/bower_components/jquery/dist/jquery.js',
  'assets/bower_components/bootstrap/dist/js/bootstrap.js'
  ];
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'assets/css/src/app.css':'assets/css/src/app.scss'
        }
      }
    },
    watch : {
      css: {
        files: ['assets/css/src/*.scss'],
        tasks: ['sass','concat:css'],
      },
      js: {
        files: ['assets/js/src/**/*.js'],
        tasks: ['concat:js']
      }  
    },
    concat: {
      css: {
        src: cssFiles,
        dest:  'assets/css/app.css'
      },
      js: {
        src: jsFiles,
        dest: 'assets/js/app.js'
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['sass','concat','watch']);
};