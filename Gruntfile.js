module.exports = function(grunt) {

	grunt.initConfig({
		// Load bower file
		bower: grunt.file.readJSON('bower.json'),
		// Remove obsolete files
		clean: {
			old: ['*.min.js'],
			work: ['mediatizr.min.js']
		},
		// Lint
		jshint: {
			options: {
				'browser'	: true,
				'predef'	: ['define', 'module', 'ActiveXObject', 'Document', 'console', 'log'],
				'boss'		: true,
				'curly'		: true,
				'eqnull'	: true,
				'newcap'	: true,
				'undef'		: true,
				'loopfunc'	: true,
				'evil'		: true,
				'proto'		: true
			}
		},
		// Minify
		uglify: {
			library: {
				files: {
					'mediatizr.min.js': ['src/mediatizr.js']
				}
			}
		},
		// Concatenate
		concat: {
			library: {
				src: ['lib/Sheethub*.js', 'lib/W*.js', 'mediatizr.min.js'],
				dest: 'mediatizr-<%= bower.version %>.min.js'
			}
		},
	});

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// Define tasks
	grunt.registerTask('default', ['clean:old', 'jshint', 'uglify', 'concat', 'clean:work']);

};