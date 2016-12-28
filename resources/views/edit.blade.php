@extends('layouts.app')

@section('page-script')
    <script src="{{ asset('js/edit.js') }}"></script>
@endsection

@section('content')
<div class="container">
    <div class="row">
        <div class="col-xs-12">
            <div class="panel panel-default">
                <div class="panel-heading">Manual override (Edit all)</div>

                <div class="panel-body">

                    <div class="row">
                        <div class="col-xs-6">

                            <div class="form-group">
                                <label for="">Team 1 Name</label>
                                <input class="form-control" type="text" id="team1-name">
                            </div>

                            <div class="form-group">
                                <label for="">Team 1 Score</label>
                                <input class="form-control" type="text" id="team1-score">
                            </div>

                            <div class="form-group">
                                <label for="">Team 1 Minimatch score</label>
                                <input class="form-control" type="text" id="team1-minimatch-score">
                            </div>

                            <div class="form-group">
                                <label for="">Team 1 Wins</label>
                                <input class="form-control" type="text" id="team1-wins">
                            </div>

                        </div>
                        <div class="col-xs-6">

                            <div class="form-group">
                                <label for="">Team 2 Name</label>
                                <input class="form-control" type="text" id="team2-name">
                            </div>

                            <div class="form-group">
                                <label for="">Team 2 Score</label>
                                <input class="form-control" type="text" id="team2-score">
                            </div>

                            <div class="form-group">
                                <label for="">Team 2 Minimatch score</label>
                                <input class="form-control" type="text" id="team2-minimatch-score">
                            </div>

                            <div class="form-group">
                                <label for="">Team 2 Wins</label>
                                <input class="form-control" type="text" id="team2-wins">
                            </div>

                        </div>
                    </div>

                    <div class="pull-right">
                        <a href="{{ url('/dashboard') }}" class="btn btn-default">cancel</a>
                        <button onclick="edit.update()" class="btn btn-success">Save</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
