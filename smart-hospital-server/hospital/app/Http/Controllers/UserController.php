<?php

namespace App\Http\Controllers;

use App\Http\Requests\HospitalRequest;
use App\Room;

class UserController extends Controller
{

    public function hospital(HospitalRequest $request)
    {
        $rooms = Room::all();

        return $rooms;
    }
}
