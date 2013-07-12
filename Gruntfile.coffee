module.exports = (grunt) ->
	grunt.initConfig
		pkg: grunt.file.readJSON 'package.json'

		coffee:
			compile:
				expand: true
				cwd   : 'coffee'
				src   : ['**/*.coffee']
				dest  : 'js/'
				ext   : '.js'

		uglify:
			options:
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			build:
				src : 'js/main.js'
				dest: 'build/angular-chatik.js'

		connect:
			server:
				options:
					hostname: '0.0.0.0'
					port: 9001
					base: './'

		scriptlinker:
			defaultOptions:
				options:
					startTag: "<!--SCRIPTS-->"
					endTag  : "<!--SCRIPTS END-->"
					fileTmpl: "\n<script src=\"%s\"></script>"
					appRoot : './'
				files  :
					'index.html': [
						'js/components/angular/angular.js',
						'js/escype/**/*.js',
					]

		typescript:
			base:
				src: ['typescript/**/*.ts']
				dest: 'js/'
				options:
					module: 'amd'
					target: 'es5'
					base_path: 'typescript/'
					sourcemap: true
#					fullSourceMapPath: true
#					declaration: true

		watch:
			scripts:
				files: ['js/**/*.js']
				tasks: ['scriptlinker']
			coffee:
				files: ['coffee/**/*.coffee']
				tasks: ['coffee']
			typescript:
				files: ['typescript/**/*.ts']
				tasks: ['typescript']


	grunt.loadNpmTasks 'grunt-contrib-uglify'
	grunt.loadNpmTasks 'grunt-contrib-coffee'
	grunt.loadNpmTasks 'grunt-contrib-connect'
	grunt.loadNpmTasks 'grunt-scriptlinker'
	grunt.loadNpmTasks 'grunt-typescript'
	grunt.loadNpmTasks 'grunt-contrib-watch'


	grunt.registerInitTask 'default', ['coffee', 'uglify', 'scriptlinker']