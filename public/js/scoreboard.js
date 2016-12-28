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

eval("(function(window) {\n    'use strict';\n\n    jQuery(window).ready(onReady);\n    jQuery(window).resize(adjustFontSizes);\n\n    function onReady() {\n\n        adjustFontSizes();\n\n        getInitialData();\n\n        openSocket();\n\n    }\n\n    function adjustFontSizes() {\n\n        // https://github.com/jquery-textfill/jquery-textfill\n        jQuery('.score-total').textfill({\n            maxFontPixels: 180,\n            widthOnly: true\n        });\n\n        jQuery('.team-name').textfill({\n            maxFontPixels: 120,\n            widthOnly: true\n        });\n\n    }\n\n    function openSocket() {\n        var socket = io('http://localhost:3000', {\n            'reconnection': true,\n            'reconnectionDelay': 500,\n            'reconnectionDelayMax' : 10 * 1000,\n            'reconnectionAttempts': Infinity\n        });\n        socket.on(\"scores:App\\\\Events\\\\ScoresUpdated\", setScores);\n    }\n\n    function getInitialData() {\n        Vue.http.get('/team').then(function(response) { return response.body; }).then(setScores);\n    }\n\n    function setScores(data) {\n\n        for (var i = 0; i < data.length; i++) {\n            setTeamScores(data[i]);\n        }\n\n    }\n\n    function getNameEl(id) {           return jQuery('#team' + id + '-name');            }\n    function getScoreEl(id) {          return jQuery('#team' + id + '-score');           }\n    function getMinimatchScoreEl(id) { return jQuery('#team' + id + '-minimatch-score'); }\n    function getWinsEl(id) {           return jQuery('#team' + id + '-wins');            }\n\n    function setTeamScores(team) {\n        updateElementContent(getNameEl(team.id), team.name);\n        updateElementContent(getScoreEl(team.id), team.score);\n        updateElementContent(getMinimatchScoreEl(team.id), team.minimatch_score);\n        updateElementContent(getWinsEl(team.id), team.wins);\n    }\n\n    function updateElementContent(element, data) {\n        if (element && element.html() != data) {\n            element.fadeOut(100, function onComplete() {\n                element.html(data).fadeIn(100, function onComplete() {\n                    adjustFontSizes();\n                });\n            });\n        }\n    }\n\n    function add(id) {\n        Vue.http.post('/team/' + id + '/add').then(onAddSuccess, onAddFailure);\n    }\n\n    function onAddSuccess() {\n        toastr.success('+1');\n    }\n\n    function onAddFailure() { toastr.error('Failed!'); }\n\n    function remove(id) {\n        Vue.http.post('/team/' + id + '/remove').then(onRemoveSuccess, onRemoveFailure);\n    }\n\n    function onRemoveSuccess() {\n        toastr.success('-1');\n    }\n\n    function onRemoveFailure() { toastr.error('Failed!'); }\n\n    function win(id) {\n        Vue.http.post('/team/' + id + '/win').then(onWinSuccess, onWinFailure);\n    }\n\n    function onWinSuccess() {\n        toastr.success('Saved');\n    }\n\n    function onWinFailure() { toastr.error('Failed!'); }\n\n    window.scoreboard = {\n        add: add,\n        remove: remove,\n        win: win\n    };\n\n\n\n})(window);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3Njb3JlYm9hcmQuanM/MGI1YyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24od2luZG93KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgalF1ZXJ5KHdpbmRvdykucmVhZHkob25SZWFkeSk7XG4gICAgalF1ZXJ5KHdpbmRvdykucmVzaXplKGFkanVzdEZvbnRTaXplcyk7XG5cbiAgICBmdW5jdGlvbiBvblJlYWR5KCkge1xuXG4gICAgICAgIGFkanVzdEZvbnRTaXplcygpO1xuXG4gICAgICAgIGdldEluaXRpYWxEYXRhKCk7XG5cbiAgICAgICAgb3BlblNvY2tldCgpO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRqdXN0Rm9udFNpemVzKCkge1xuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnktdGV4dGZpbGwvanF1ZXJ5LXRleHRmaWxsXG4gICAgICAgIGpRdWVyeSgnLnNjb3JlLXRvdGFsJykudGV4dGZpbGwoe1xuICAgICAgICAgICAgbWF4Rm9udFBpeGVsczogMTgwLFxuICAgICAgICAgICAgd2lkdGhPbmx5OiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGpRdWVyeSgnLnRlYW0tbmFtZScpLnRleHRmaWxsKHtcbiAgICAgICAgICAgIG1heEZvbnRQaXhlbHM6IDEyMCxcbiAgICAgICAgICAgIHdpZHRoT25seTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9wZW5Tb2NrZXQoKSB7XG4gICAgICAgIHZhciBzb2NrZXQgPSBpbygnaHR0cDovL2xvY2FsaG9zdDozMDAwJywge1xuICAgICAgICAgICAgJ3JlY29ubmVjdGlvbic6IHRydWUsXG4gICAgICAgICAgICAncmVjb25uZWN0aW9uRGVsYXknOiA1MDAsXG4gICAgICAgICAgICAncmVjb25uZWN0aW9uRGVsYXlNYXgnIDogMTAgKiAxMDAwLFxuICAgICAgICAgICAgJ3JlY29ubmVjdGlvbkF0dGVtcHRzJzogSW5maW5pdHlcbiAgICAgICAgfSk7XG4gICAgICAgIHNvY2tldC5vbihcInNjb3JlczpBcHBcXFxcRXZlbnRzXFxcXFNjb3Jlc1VwZGF0ZWRcIiwgc2V0U2NvcmVzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJbml0aWFsRGF0YSgpIHtcbiAgICAgICAgVnVlLmh0dHAuZ2V0KCcvdGVhbScpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmJvZHk7IH0pLnRoZW4oc2V0U2NvcmVzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRTY29yZXMoZGF0YSkge1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2V0VGVhbVNjb3JlcyhkYXRhW2ldKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TmFtZUVsKGlkKSB7ICAgICAgICAgICByZXR1cm4galF1ZXJ5KCcjdGVhbScgKyBpZCArICctbmFtZScpOyAgICAgICAgICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTY29yZUVsKGlkKSB7ICAgICAgICAgIHJldHVybiBqUXVlcnkoJyN0ZWFtJyArIGlkICsgJy1zY29yZScpOyAgICAgICAgICAgfVxuICAgIGZ1bmN0aW9uIGdldE1pbmltYXRjaFNjb3JlRWwoaWQpIHsgcmV0dXJuIGpRdWVyeSgnI3RlYW0nICsgaWQgKyAnLW1pbmltYXRjaC1zY29yZScpOyB9XG4gICAgZnVuY3Rpb24gZ2V0V2luc0VsKGlkKSB7ICAgICAgICAgICByZXR1cm4galF1ZXJ5KCcjdGVhbScgKyBpZCArICctd2lucycpOyAgICAgICAgICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFRlYW1TY29yZXModGVhbSkge1xuICAgICAgICB1cGRhdGVFbGVtZW50Q29udGVudChnZXROYW1lRWwodGVhbS5pZCksIHRlYW0ubmFtZSk7XG4gICAgICAgIHVwZGF0ZUVsZW1lbnRDb250ZW50KGdldFNjb3JlRWwodGVhbS5pZCksIHRlYW0uc2NvcmUpO1xuICAgICAgICB1cGRhdGVFbGVtZW50Q29udGVudChnZXRNaW5pbWF0Y2hTY29yZUVsKHRlYW0uaWQpLCB0ZWFtLm1pbmltYXRjaF9zY29yZSk7XG4gICAgICAgIHVwZGF0ZUVsZW1lbnRDb250ZW50KGdldFdpbnNFbCh0ZWFtLmlkKSwgdGVhbS53aW5zKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVFbGVtZW50Q29udGVudChlbGVtZW50LCBkYXRhKSB7XG4gICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuaHRtbCgpICE9IGRhdGEpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuZmFkZU91dCgxMDAsIGZ1bmN0aW9uIG9uQ29tcGxldGUoKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5odG1sKGRhdGEpLmZhZGVJbigxMDAsIGZ1bmN0aW9uIG9uQ29tcGxldGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkanVzdEZvbnRTaXplcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGQoaWQpIHtcbiAgICAgICAgVnVlLmh0dHAucG9zdCgnL3RlYW0vJyArIGlkICsgJy9hZGQnKS50aGVuKG9uQWRkU3VjY2Vzcywgb25BZGRGYWlsdXJlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkFkZFN1Y2Nlc3MoKSB7XG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKCcrMScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQWRkRmFpbHVyZSgpIHsgdG9hc3RyLmVycm9yKCdGYWlsZWQhJyk7IH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZShpZCkge1xuICAgICAgICBWdWUuaHR0cC5wb3N0KCcvdGVhbS8nICsgaWQgKyAnL3JlbW92ZScpLnRoZW4ob25SZW1vdmVTdWNjZXNzLCBvblJlbW92ZUZhaWx1cmUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUmVtb3ZlU3VjY2VzcygpIHtcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoJy0xJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZW1vdmVGYWlsdXJlKCkgeyB0b2FzdHIuZXJyb3IoJ0ZhaWxlZCEnKTsgfVxuXG4gICAgZnVuY3Rpb24gd2luKGlkKSB7XG4gICAgICAgIFZ1ZS5odHRwLnBvc3QoJy90ZWFtLycgKyBpZCArICcvd2luJykudGhlbihvbldpblN1Y2Nlc3MsIG9uV2luRmFpbHVyZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25XaW5TdWNjZXNzKCkge1xuICAgICAgICB0b2FzdHIuc3VjY2VzcygnU2F2ZWQnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbldpbkZhaWx1cmUoKSB7IHRvYXN0ci5lcnJvcignRmFpbGVkIScpOyB9XG5cbiAgICB3aW5kb3cuc2NvcmVib2FyZCA9IHtcbiAgICAgICAgYWRkOiBhZGQsXG4gICAgICAgIHJlbW92ZTogcmVtb3ZlLFxuICAgICAgICB3aW46IHdpblxuICAgIH07XG5cblxuXG59KSh3aW5kb3cpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvc2NvcmVib2FyZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);