<?php

namespace TrabajaMejor\Base;

use Illuminate\Support\ServiceProvider;
use TrabajaMejor\Base\Providers\BaseAuthServiceProvider;

class BaseServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     */
    public function boot()
    {
        $this->loadMigrationsFrom(__DIR__ . '/migrations');

        $this->publishes([
            __DIR__.'/basic-assets' => resource_path('assets'),
        ], 'resource-assets');

        $this->publishes([
            __DIR__ . '/gulpfile-base.js' => base_path('gulpfile-base.js'),
        ], 'gulpfile');
    }

    /**
     * Register the application services.
     */
    public function register()
    {
        // $this->register(BaseAuthServiceProvider::class);
    }
}
