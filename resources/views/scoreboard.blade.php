@extends('layouts.app')

@section('page-script')
    <script src="{{ asset('js/scoreboard.js') }}"></script>
@endsection

@section('content')
<div class="container-fluid">
    <div class="row">

        <div class="col-xs-6 team-scores white">
            <div class="team-name"><span id="team1-name">&nbsp;</span></div>
            <div class="score score-total"><span id="team1-score">0</span></div>
            <div class="score score-minimatch"><span id="team1-minimatch-score">0</span></div>
        </div>
        <div class="col-xs-6 team-scores white">
            <div class="team-name"><span id="team2-name">&nbsp;</span></div>
            <div class="score score-total"><span id="team2-score">0</span></div>
            <div class="score score-minimatch"><span id="team2-minimatch-score">0</span></div>
        </div>

    </div>
</div>
@endsection
