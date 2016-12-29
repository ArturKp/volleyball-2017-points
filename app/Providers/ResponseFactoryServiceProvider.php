<?php

namespace App\Providers;

use App\Factories\ResponseFactory;
use Illuminate\Support\ServiceProvider;

class ResponseFactoryServiceProvider extends ServiceProvider
{
    /**
     * Register the application's response macros.
     *
     * @return void
     */
    public function register()
    {

        $this->app->singleton('Illuminate\Contracts\Routing\ResponseFactory', function ($app) {
            return new ResponseFactory($app['Illuminate\Contracts\View\Factory'], $app['redirect']);
        });

    }
}