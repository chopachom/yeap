module.exports = (grunt) ->
	grunt.initConfig
		pkg: grunt.file.readJSON 'package.json'

		coffee:
			compile:
				expand: true
				cwd   : 'public/coffee'
				src   : ['**/*.coffee']
				dest  : 'js/'
				ext   : '.js'

		uglify:
			options:
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			build:
				src : 'public/js/main.js'
				dest: 'public/build/escype.js'

		connect:
			server:
				options:
					hostname: '0.0.0.0'
					port: 9001
					base: './public'

		scriptlinker:
			defaultOptions:
				options:
					startTag: "<!--SCRIPTS-->"
					endTag  : "<!--SCRIPTS END-->"
					fileTmpl: "\n<script src=\"%s\"></script>"
					appRoot : './public'
				files  :
					'public/index.html': [
						'./public/js/components/angular/angular.js',
						'./public/js/components/angular-cookies/angular-cookies.js',
						'./public/js/escype/**/*.js',
					]

		typescript:
			base:
				src: ['public/typescript/**/*.ts']
				dest: 'public/js/'
				options:
					module: 'amd'
					target: 'es5'
					base_path: 'public/typescript/'
					sourcemap: true
#					fullSourceMapPath: true
#					declaration: true

		watch:
			scripts:
				files: ['public/js/**/*.js']
				tasks: ['scriptlinker']
			coffee:
				files: ['public/coffee/**/*.coffee']
				tasks: ['coffee']
			typescript:
				files: ['public/typescript/**/*.ts']
				tasks: ['typescript']


	grunt.loadNpmTasks 'grunt-contrib-uglify'
	grunt.loadNpmTasks 'grunt-contrib-coffee'
	grunt.loadNpmTasks 'grunt-contrib-connect'
	grunt.loadNpmTasks 'grunt-scriptlinker'
	grunt.loadNpmTasks 'grunt-typescript'
	grunt.loadNpmTasks 'grunt-contrib-watch'


	grunt.registerInitTask 'default', ['coffee', 'uglify', 'scriptlinker']
	grunt.registerInitTask 'server', ['typescript', 'scriptlinker', 'connect:server', 'watch']