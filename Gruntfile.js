module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! Dòng này chèn vào đầu file <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
    
            build: {
                files: {
                    'build/hello.min.js' : ['src/hello.js']
                }
            }
        }
    });

  grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.registerTask('default', ['uglify']);

}