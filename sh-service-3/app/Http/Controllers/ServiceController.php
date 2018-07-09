<?php

namespace App\Http\Controllers;

use App\Bed;
use App\Condition;
use App\Http\Requests\ServiceRequest;
use App\Patient;

class ServiceController extends Controller
{
    public function service(ServiceRequest $request)
    {
        $patient = new Patient;

        $patient->timestamps = false;
        $bed = Bed::find($request->bed['id']);

        $patient->bed()->associate($bed);

        $patient->temperature = $request->temperature;
        $patient->sys = $request->sys;
        $patient->dias = $request->dias;
        $patient->isUrgent = $request->isUrgent;
        $patient->firstName = $request->firstName;
        $patient->lastName = $request->lastName;

        $patient->save();

        $condition = new Condition;

        $max = Condition::max('id');
        $condition->id = $max+1;

        $condition->type = $request->type;
        $condition->description = $request->description;
        $condition->timestamps = false;

        $condition->patient()->associate($patient);
        $condition->save();

        $resp['patient'] = $patient;
        $resp['condition'] = $condition;

        return response($resp, 200);
    }
}
