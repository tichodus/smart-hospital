<?php

namespace App\Http\Controllers;

use App\Http\Requests\ServiceRequest;
use App\Bed;
use GuzzleHttp\Client;

class ServiceController extends Controller
{
    public function service(ServiceRequest $request)
    {
        $beds = Bed::all();
        $json = $request->toArray();
        $available = false;

        foreach ($beds as $bed)
        {
            if(null == $bed->patient)
            {
                $available = true;
                $json['bed'] = $bed;

                $client = new Client();
                $res = $client->request('POST', 'https://sh-service-2.herokuapp.com/service',
                    ['json' => $json]);

            }
            if($available)
            {
                return $res->getBody();
            }
        }

        $msg['exception'] = "No free beds in hospital!";
        return $msg;
    }
}
