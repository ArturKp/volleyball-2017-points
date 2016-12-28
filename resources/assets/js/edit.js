(function(window){
    'use strict';

    jQuery(window).ready(onReady);

    function onReady() {
        getInitialData();
    }

    function getInitialData() {
        Vue.http.get('/team').then(function(response) { return response.body; }).then(setInitialValues);
    }

    function setInitialValues(data) {

        for (var i = 0; i < data.length; i++) {
            var team = data[i]

            jQuery('#team' + team.id + '-name').val(team.name)
            jQuery('#team' + team.id + '-score').val(team.score)
            jQuery('#team' + team.id + '-minimatch-score').val(team.minimatch_score)
            jQuery('#team' + team.id + '-wins').val(team.wins)

        }

    }

    function update() {

        Vue.http.put('/team/1', {
            name: jQuery('#team1-name').val(),
            score: jQuery('#team1-score').val(),
            minimatch_score: jQuery('#team1-minimatch-score').val(),
            wins: jQuery('#team1-wins').val(),
        }).then(onUpdateSuccess, onUpdateFailure);

        Vue.http.put('/team/2', {
            name: jQuery('#team2-name').val(),
            score: jQuery('#team2-score').val(),
            minimatch_score: jQuery('#team2-minimatch-score').val(),
            wins: jQuery('#team2-wins').val(),
        }).then(onUpdateSuccess, onUpdateFailure);
    }

    function onUpdateSuccess() {
        toastr.success('Updated');
        location.href = location.href;
    }

    function onUpdateFailure() { toastr.error('Failed!'); }

    window.edit = {
        update: update
    };

})(window);