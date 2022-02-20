<?php

use App\Http\Controllers\API\ProfileController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/profile',[ProfileController::class, 'index']);
Route::get('/e-profile/1',[ProfileController::class, 'edit']);
Route::put('/u-profile/1',[ProfileController::class, 'update']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
