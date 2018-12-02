
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            src: {
                files: ['src/*.js'],
                tasks: ['default'],
              },
        },
          
        uglify: {
            options: {
                banner: '/*! Dòng này chèn vào đầu file <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
    
            build: {
                files: {
                    'build/hello.min.js' : ['tmp/all_back.js']
                }
            }, 
        },
        concat: {
          build: {
            files: {
                'tmp/all.js' : ['src/hello.js', 'src/ab.js']
            }  
          }  
        },

        babel: {
            options: {
                presets: ['@babel/preset-env']
              },
              build: {
                files: {
                  'tmp/all_back.js': 'tmp/all.js'
                }
              }
          
        },

        jshint: {
            options: {
                '-W015': true,
                "esversion": 6
              },        
            build: {
              src: ['tmp/all.js']
            },
          },

       clean: {
        build: {
            src: ['tmp/*']
          }, 
       }   

    });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('runwatch', [
    'watch'   
   ]);
   
  grunt.registerTask('default', [
                                 'concat:build', 
                                 'jshint:build', 
                                 'babel:build', 
                                 'uglify:build',
                                 'clean'   
                                ]);
 
}