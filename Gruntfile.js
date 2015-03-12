module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            dev: {
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['*.js'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        uglify: {
            all: {
                files: {
                    'dist/easygooglemaps.min.js': 'src/easygooglemaps.js'
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: grunt.option('port') || 8080,
                    hostname: 'localhost',
                    base: ''
                }
            }
        }
    });
    // Load the plugin
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    // Default task(s).
    grunt.registerTask('default', ['copy:dev', 'uglify:all']);
};