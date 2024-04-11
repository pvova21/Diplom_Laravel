<?php

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Route;

Route::get('/#', function () {
    return view('client');
});
Route::get('/hall', function () {
    return view('client_hall');
});
Route::get('/ticket', function () {
    return view('client_ticket');
});
Route::get('/payment', function () {
    return view('client_payment');
});
Route::get('/index', function () {
    return view('admin_index');
});
Route::get('/login', function () {
    return view('admin_login');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
