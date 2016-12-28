@extends('layouts.app')

@section('page-script')
    <script src="{{ asset('js/scoreboard.js') }}"></script>
@endsection

@section('content')
<div class="container">
    <div class="row">

        <div class="col-xs-6">
            <div class="panel panel-default">
                <div class="panel-heading">Team 1</div>
                <div class="panel-body">
                    <div class="team-scores small">
                        <div class="team-name"><span id="team1-name">&nbsp;</span></div>
                        <div class="score score-total"><span id="team1-score">0</span></div>
                        <div class="team-wins">Wins: <span id="team1-wins">&nbsp;</span></div>
                        <div class="score score-minimatch"><span id="team1-minimatch-score">0</span></div>

                        <button class="btn btn-success action-add" onclick="scoreboard.add(1)">+1</button>
                        <button class="btn btn-danger action-remove" onclick="scoreboard.remove(1)">-1</button>

                        <br><br>
                        <button class="btn btn-warning action-winner pull-right" onclick="scoreboard.win(1)">Winner</button>
                    </div>

                </div>
            </div>
        </div>

        <div class="col-xs-6">
            <div class="panel panel-default">
                <div class="panel-heading">Team 2</div>
                <div class="panel-body">
                    <div class="team-scores small">
                        <div class="team-name"><span id="team2-name">&nbsp;</span></div>
                        <div class="score score-total"><span id="team2-score">0</span></div>
                        <div class="team-wins">Wins: <span id="team2-wins">&nbsp;</span></div>
                        <div class="score score-minimatch"><span id="team2-minimatch-score">0</span></div>

                        <button class="btn btn-success action-add" onclick="scoreboard.add(2)">+1</button>
                        <button class="btn btn-danger action-remove" onclick="scoreboard.remove(2)">-1</button>

                        <br><br>
                        <button class="btn btn-warning action-winner pull-right" onclick="scoreboard.win(2)">Winner</button>
                    </div>


                </div>
            </div>
        </div>

        <div class="col-xs-12">

            <a href="{{ url('/edit') }}">Manual override (Edit all)</a>

        </div>

    </div>
</div>
@endsection
