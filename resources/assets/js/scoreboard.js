(function(window) {
    'use strict';

    jQuery(window).ready(onReady);
    jQuery(window).resize(adjustFontSizes);

    function onReady() {

        adjustFontSizes();

        getInitialData();

        openSocket();

    }

    function adjustFontSizes() {

        // https://github.com/jquery-textfill/jquery-textfill
        jQuery('.score-total').textfill({
            maxFontPixels: 180,
            widthOnly: true
        });

        jQuery('.team-name').textfill({
            maxFontPixels: 120,
            widthOnly: true
        });

    }

    function openSocket() {
        var socket = io(':3000', {
            'reconnection': true,
            'reconnectionDelay': 500,
            'reconnectionDelayMax' : 10 * 1000,
            'reconnectionAttempts': Infinity
        });
        socket.on("scores:App\\Events\\ScoresUpdated", setScores);
    }

    function getInitialData() {
        Vue.http.get('/team').then(function(response) { return response.body; }).then(setScores);
    }

    function setScores(data) {

        for (var i = 0; i < data.length; i++) {
            setTeamScores(data[i]);
        }

    }

    function getNameEl(id) {           return jQuery('#team' + id + '-name');            }
    function getScoreEl(id) {          return jQuery('#team' + id + '-score');           }
    function getMinimatchScoreEl(id) { return jQuery('#team' + id + '-minimatch-score'); }
    function getWinsEl(id) {           return jQuery('#team' + id + '-wins');            }

    function setTeamScores(team) {
        updateElementContent(getNameEl(team.id), team.name);
        updateElementContent(getScoreEl(team.id), team.score);
        updateElementContent(getMinimatchScoreEl(team.id), team.minimatch_score);
        updateElementContent(getWinsEl(team.id), team.wins);
    }

    function updateElementContent(element, data) {
        if (element && element.html() != data) {
            element.fadeOut(100, function onComplete() {
                element.html(data).fadeIn(100, function onComplete() {
                    adjustFontSizes();
                });
            });
        }
    }

    function add(id) {
        Vue.http.post('/team/' + id + '/add').then(onAddSuccess, onAddFailure);
    }

    function onAddSuccess() {
        toastr.success('+1');
    }

    function onAddFailure() { toastr.error('Failed!'); }

    function remove(id) {
        Vue.http.post('/team/' + id + '/remove').then(onRemoveSuccess, onRemoveFailure);
    }

    function onRemoveSuccess() {
        toastr.success('-1');
    }

    function onRemoveFailure() { toastr.error('Failed!'); }

    function win(id) {
        Vue.http.post('/team/' + id + '/win').then(onWinSuccess, onWinFailure);
    }

    function onWinSuccess() {
        toastr.success('Saved');
    }

    function onWinFailure() { toastr.error('Failed!'); }

    window.scoreboard = {
        add: add,
        remove: remove,
        win: win
    };



})(window);
