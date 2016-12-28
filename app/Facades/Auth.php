<?php

namespace App\Facades;

use Illuminate\Support\Facades\Auth as LaravelAuth;

class Auth extends LaravelAuth {

    public static function isAdmin()
    {
        return parent::user()->isAdmin();
    }

}