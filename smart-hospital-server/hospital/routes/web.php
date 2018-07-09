<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Http\Requests\RegisterRequest;
use App\User;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/register', function (RegisterRequest $request)
{
    $user = new User;

    $user->username = $request->username;
    $user->firstName = $request->firstName;
    $user->lastName = $request->lastName;
    $user->password = bcrypt($request->password);
    $user->email = $request->email;

    $user->save();

    return $user;
});
