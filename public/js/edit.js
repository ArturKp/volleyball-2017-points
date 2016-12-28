/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("(function(window){\n    'use strict';\n\n    jQuery(window).ready(onReady);\n\n    function onReady() {\n        getInitialData();\n    }\n\n    function getInitialData() {\n        Vue.http.get('/team').then(function(response) { return response.body; }).then(setInitialValues);\n    }\n\n    function setInitialValues(data) {\n\n        for (var i = 0; i < data.length; i++) {\n            var team = data[i]\n\n            jQuery('#team' + team.id + '-name').val(team.name)\n            jQuery('#team' + team.id + '-score').val(team.score)\n            jQuery('#team' + team.id + '-minimatch-score').val(team.minimatch_score)\n            jQuery('#team' + team.id + '-wins').val(team.wins)\n\n        }\n\n    }\n\n    function update() {\n\n        Vue.http.put('/team/1', {\n            name: jQuery('#team1-name').val(),\n            score: jQuery('#team1-score').val(),\n            minimatch_score: jQuery('#team1-minimatch-score').val(),\n            wins: jQuery('#team1-wins').val(),\n        }).then(onUpdateSuccess, onUpdateFailure);\n\n        Vue.http.put('/team/2', {\n            name: jQuery('#team2-name').val(),\n            score: jQuery('#team2-score').val(),\n            minimatch_score: jQuery('#team2-minimatch-score').val(),\n            wins: jQuery('#team2-wins').val(),\n        }).then(onUpdateSuccess, onUpdateFailure);\n    }\n\n    function onUpdateSuccess() {\n        toastr.success('Updated');\n        location.href = location.href;\n    }\n\n    function onUpdateFailure() { toastr.error('Failed!'); }\n\n    window.edit = {\n        update: update\n    };\n\n})(window);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2VkaXQuanM/M2Y5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24od2luZG93KXtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBqUXVlcnkod2luZG93KS5yZWFkeShvblJlYWR5KTtcblxuICAgIGZ1bmN0aW9uIG9uUmVhZHkoKSB7XG4gICAgICAgIGdldEluaXRpYWxEYXRhKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW5pdGlhbERhdGEoKSB7XG4gICAgICAgIFZ1ZS5odHRwLmdldCgnL3RlYW0nKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5ib2R5OyB9KS50aGVuKHNldEluaXRpYWxWYWx1ZXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEluaXRpYWxWYWx1ZXMoZGF0YSkge1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRlYW0gPSBkYXRhW2ldXG5cbiAgICAgICAgICAgIGpRdWVyeSgnI3RlYW0nICsgdGVhbS5pZCArICctbmFtZScpLnZhbCh0ZWFtLm5hbWUpXG4gICAgICAgICAgICBqUXVlcnkoJyN0ZWFtJyArIHRlYW0uaWQgKyAnLXNjb3JlJykudmFsKHRlYW0uc2NvcmUpXG4gICAgICAgICAgICBqUXVlcnkoJyN0ZWFtJyArIHRlYW0uaWQgKyAnLW1pbmltYXRjaC1zY29yZScpLnZhbCh0ZWFtLm1pbmltYXRjaF9zY29yZSlcbiAgICAgICAgICAgIGpRdWVyeSgnI3RlYW0nICsgdGVhbS5pZCArICctd2lucycpLnZhbCh0ZWFtLndpbnMpXG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlKCkge1xuXG4gICAgICAgIFZ1ZS5odHRwLnB1dCgnL3RlYW0vMScsIHtcbiAgICAgICAgICAgIG5hbWU6IGpRdWVyeSgnI3RlYW0xLW5hbWUnKS52YWwoKSxcbiAgICAgICAgICAgIHNjb3JlOiBqUXVlcnkoJyN0ZWFtMS1zY29yZScpLnZhbCgpLFxuICAgICAgICAgICAgbWluaW1hdGNoX3Njb3JlOiBqUXVlcnkoJyN0ZWFtMS1taW5pbWF0Y2gtc2NvcmUnKS52YWwoKSxcbiAgICAgICAgICAgIHdpbnM6IGpRdWVyeSgnI3RlYW0xLXdpbnMnKS52YWwoKSxcbiAgICAgICAgfSkudGhlbihvblVwZGF0ZVN1Y2Nlc3MsIG9uVXBkYXRlRmFpbHVyZSk7XG5cbiAgICAgICAgVnVlLmh0dHAucHV0KCcvdGVhbS8yJywge1xuICAgICAgICAgICAgbmFtZTogalF1ZXJ5KCcjdGVhbTItbmFtZScpLnZhbCgpLFxuICAgICAgICAgICAgc2NvcmU6IGpRdWVyeSgnI3RlYW0yLXNjb3JlJykudmFsKCksXG4gICAgICAgICAgICBtaW5pbWF0Y2hfc2NvcmU6IGpRdWVyeSgnI3RlYW0yLW1pbmltYXRjaC1zY29yZScpLnZhbCgpLFxuICAgICAgICAgICAgd2luczogalF1ZXJ5KCcjdGVhbTItd2lucycpLnZhbCgpLFxuICAgICAgICB9KS50aGVuKG9uVXBkYXRlU3VjY2Vzcywgb25VcGRhdGVGYWlsdXJlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblVwZGF0ZVN1Y2Nlc3MoKSB7XG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKCdVcGRhdGVkJyk7XG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5ocmVmO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVXBkYXRlRmFpbHVyZSgpIHsgdG9hc3RyLmVycm9yKCdGYWlsZWQhJyk7IH1cblxuICAgIHdpbmRvdy5lZGl0ID0ge1xuICAgICAgICB1cGRhdGU6IHVwZGF0ZVxuICAgIH07XG5cbn0pKHdpbmRvdyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvZWRpdC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);