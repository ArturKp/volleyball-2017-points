<?php

namespace App\Http\Controllers;

use DB;
use App\Models\Team;
use Illuminate\Http\Request;

class TeamController extends Controller
{

    public function __construct()
    {
        $this->middleware('admin', ['except' => 'index']);
    }

    public function index()
    {
        return response()->json(Team::all());
    }

    public function add($teamId)
    {
        $updated = DB::table('team')
            ->where('id', '=', $teamId)
            ->where('score', '<', '2017')
            ->update([
                'score' => DB::raw('score + 1'),
                'minimatch_score' => DB::raw('minimatch_score + 1')
            ]);

        if($updated === 0) { throw new \Exception("Nothing updated!"); }

        event(new \App\Events\ScoresUpdated());
    }

    // Only remove, if some minimatch is active
    public function remove($teamId)
    {
        $updated = DB::table('team')
            ->where('id', '=', $teamId)
            ->where('minimatch_score', '>', '0')
            ->update([
                'score' => DB::raw('GREATEST(score - 1, 0)'),
                'minimatch_score' => DB::raw('GREATEST(minimatch_score - 1, 0)')
            ]);

        if($updated === 0) { throw new \Exception("Nothing updated!"); }

        event(new \App\Events\ScoresUpdated());
    }

    public function win($teamId)
    {
        DB::transaction(function() use ($teamId) {
            $updated = DB::table('team')
                ->where('id', '=', $teamId)
                ->where('minimatch_score', '>', '0')
                ->update([
                    'wins' => DB::raw('wins+1'),
                    'minimatch_score' => 0
                ]);

            if($updated === 0) { throw new \Exception("Nothing updated!"); }

            DB::table('team')
                ->where('id', '!=', $teamId)
                ->where('minimatch_score', '>', '0')
                ->update([
                    'minimatch_score' => 0
                ]);
        });

        event(new \App\Events\ScoresUpdated());
    }

    // Make changes to all fields
    public function update($teamId, Request $request)
    {
        Team::findOrFail($teamId)->update($request->all());

        event(new \App\Events\ScoresUpdated());
    }
}
