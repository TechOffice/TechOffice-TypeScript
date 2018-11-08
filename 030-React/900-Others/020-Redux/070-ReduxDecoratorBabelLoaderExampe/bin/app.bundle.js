/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: SyntaxError: c:\\\\Users\\\\panwaicheng\\\\git_workspace\\\\TechOffice-TypeScript\\\\030-React\\\\900-Others\\\\020-Redux\\\\070-ReduxDecoratorBabelLoaderExampe\\\\src\\\\App.tsx: Support for the experimental syntax 'decorators-legacy' isn't currently enabled (9:1):\\n\\n\\u001b[0m \\u001b[90m  7 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  8 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  9 | \\u001b[39m\\u001b[33m@\\u001b[39m(connect( \\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m    \\u001b[90m// map state to props\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m    \\u001b[36mfunction\\u001b[39m(state\\u001b[33m:\\u001b[39m any){\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m        \\u001b[36mreturn\\u001b[39m {\\u001b[0m\\n    at _class.raise (c:\\\\Users\\\\panwaicheng\\\\git_workspace\\\\TechOffice-TypeScript\\\\030-React\\\\900-Others\\\\020-Redux\\\\070-ReduxDecoratorBabelLoaderExampe\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4021:15)\\n    at _class.expectOnePlugin (c:\\\\Users\\\\panwaicheng\\\\git_workspace\\\\TechOffice-TypeScript\\\\030-React\\\\900-Others\\\\020-Redux\\\\070-ReduxDecoratorBabelLoaderExampe\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5349:18)\\n    at _class.parseDecorator (c:\\\\Users\\\\panwaicheng\\\\git_workspace\\\\TechOffice-TypeScript\\\\030-React\\\\900-Others\\\\020-Redux\\\\070-ReduxDecoratorBabelLoaderExampe\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7420:10)\\n    at _class.parseDecorators (c:\\\\Users\\\\panwaicheng\\\\git_workspace\\\\TechOffice-TypeScript\\\\030-React\\\\900-Others\\\\020-Redux\\\\070-ReduxDecoratorBabelLoaderExampe\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7402:28)\\n    at _class.parseStatement (c:\\\\Users\\\\panwaicheng\\\\git_workspace\\\\TechOffice-TypeScript\\\\030-React\\\\900-Others\\\\020-Redux\\\\070-ReduxDecoratorBabelLoaderExampe\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7250:12)\\n    at _class.parseBlockOrModuleBlockBody (c:\\\\Users\\\\panwaicheng\\\\git_workspace\\\\TechOffice-TypeScript\\\\030-React\\\\900-Others\\\\020-Redux\\\\070-ReduxDecoratorBabelLoaderExampe\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7805:23)\\n    at _class.parseBlockBody (c:\\\\Users\\\\panwaicheng\\\\git_workspace\\\\TechOffice-TypeScript\\\\030-React\\\\900-Others\\\\020-Redux\\\\070-ReduxDecoratorBabelLoaderExampe\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7792:10)\\n    at _class.parseTopLevel (c:\\\\Users\\\\panwaicheng\\\\git_workspace\\\\TechOffice-TypeScript\\\\030-React\\\\900-Others\\\\020-Redux\\\\070-ReduxDecoratorBabelLoaderExampe\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7218:10)\\n    at _class.parse (c:\\\\Users\\\\panwaicheng\\\\git_workspace\\\\TechOffice-TypeScript\\\\030-React\\\\900-Others\\\\020-Redux\\\\070-ReduxDecoratorBabelLoaderExampe\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8618:17)\\n    at parse (c:\\\\Users\\\\panwaicheng\\\\git_workspace\\\\TechOffice-TypeScript\\\\030-React\\\\900-Others\\\\020-Redux\\\\070-ReduxDecoratorBabelLoaderExampe\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10624:38)\\n    at parser (c:\\\\Users\\\\panwaicheng\\\\git_workspace\\\\TechOffice-TypeScript\\\\030-React\\\\900-Others\\\\020-Redux\\\\070-ReduxDecoratorBabelLoaderExampe\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:170:34)\\n    at normalizeFile (c:\\\\Users\\\\panwaicheng\\\\git_workspace\\\\TechOffice-TypeScript\\\\030-React\\\\900-Others\\\\020-Redux\\\\070-ReduxDecoratorBabelLoaderExampe\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:138:11)\\n    at runSync (c:\\\\Users\\\\panwaicheng\\\\git_workspace\\\\TechOffice-TypeScript\\\\030-React\\\\900-Others\\\\020-Redux\\\\070-ReduxDecoratorBabelLoaderExampe\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:44:43)\\n    at runAsync (c:\\\\Users\\\\panwaicheng\\\\git_workspace\\\\TechOffice-TypeScript\\\\030-React\\\\900-Others\\\\020-Redux\\\\070-ReduxDecoratorBabelLoaderExampe\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:35:14)\\n    at process.nextTick.err (c:\\\\Users\\\\panwaicheng\\\\git_workspace\\\\TechOffice-TypeScript\\\\030-React\\\\900-Others\\\\020-Redux\\\\070-ReduxDecoratorBabelLoaderExampe\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:34:34)\\n    at _combinedTickCallback (internal/process/next_tick.js:73:7)\\n    at process._tickCallback (internal/process/next_tick.js:104:9)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIwLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);