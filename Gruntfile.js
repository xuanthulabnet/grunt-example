module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! Xuanthulab <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },

            build: {
                files: {
                    'build/hello.min.js' : ['src/hello.js']
                }
            },
    
            debug: {
                files: {
                    'debug/hello_debug.min.js' : ['src/hello.js']
                }
            }
        }
    });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);                //grunt


  grunt.registerTask('debug', ['uglify:debug']);            //grunt debug
  grunt.registerTask('release', ['uglify:build']);          //grunt release

}
