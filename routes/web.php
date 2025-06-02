<?php

use Illuminate\Support\Facades\Route;

Route::get('dashboard', function () {
    return view('admin.dashboard');
})->name('dashboard');



/**
 * 404 | Not found page
 */

Route::fallback(function () {
    return response()->view('admin.errors.404', [], 404);
});
