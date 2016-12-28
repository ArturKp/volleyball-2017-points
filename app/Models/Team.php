<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{

    protected $table = 'team';

    public $timestamps = false;

    // Everything is fillable
    protected $guarded = [null];

}