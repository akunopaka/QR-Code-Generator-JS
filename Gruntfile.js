module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			release: {
				src: ["dist/*.js"]
			}
		},
		uglify: {
			options: {
				banner: 
`/**
 * EasyQRCodeJS+
 * 
 * Cross-browser QRCode generator for pure javascript. Support Canvas, SVG and Table drawing methods. Support Dot style, Logo, Background image, Colorful, Title etc. settings. Support Angular, Vue.js, React, Next.js, Svelte framework. Support binary(hex) data mode.(Running with DOM on client side)
 * 
 * Version <%=pkg.version %>+  modified by akunopaka (<%= grunt.template.today("yyyy-mm-dd") %>)
 * 
 * @author [ inthinkcolor@gmail.com ]
 * modified by akunopaka
 * 
 * @see https://github.com/ushelp/EasyQRCodeJS 
 * @see https://github.com/akunopaka/QR-Code-Generator-JS/
 * 
 * Copyright 2017 Ray, EasyProject
 * Released under the MIT license
 * 
 */`
			},
			build: {
				src: 'src/*.js',
				dest: 'dist/easy.qrcode.min.js'
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('release', ['clean', 'uglify']);
	grunt.registerTask('default', ['release']);
};