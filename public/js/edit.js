!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,t,n){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){!function(e){"use strict";function t(){n()}function n(){Vue.http.get("/team").then(function(e){return e.body}).then(r)}function r(e){for(var t=0;t<e.length;t++){var n=e[t];jQuery("#team"+n.id+"-name").val(n.name),jQuery("#team"+n.id+"-score").val(n.score),jQuery("#team"+n.id+"-minimatch-score").val(n.minimatch_score),jQuery("#team"+n.id+"-wins").val(n.wins)}}function a(){Vue.http.put("/team/1",{name:jQuery("#team1-name").val(),score:jQuery("#team1-score").val(),minimatch_score:jQuery("#team1-minimatch-score").val(),wins:jQuery("#team1-wins").val()}).then(o,u),Vue.http.put("/team/2",{name:jQuery("#team2-name").val(),score:jQuery("#team2-score").val(),minimatch_score:jQuery("#team2-minimatch-score").val(),wins:jQuery("#team2-wins").val()}).then(o,u)}function o(){toastr.success("Updated"),location.href=location.href}function u(){toastr.error("Failed!")}jQuery(e).ready(t),e.edit={update:a}}(window)}]);