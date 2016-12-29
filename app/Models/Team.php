<?php

namespace App\Models;

use App\Models\BaseModel;

class Team extends BaseModel
{

    protected $table = 'team';

    public $timestamps = false;

    // Everything is fillable
    protected $guarded = [null];

}
