<?php

namespace App\Http\Controllers;

use App\Http\Requests\ServiceRequest;
use GuzzleHttp\Client;

class ServiceController extends Controller
{
    public function service(ServiceRequest $request)
    {
        $req = $request->toArray();

        if($req['temperature'] > 37.0)
        {
            if($req['sys'] > 140 || $req['dias'] < 70)
            {
                $type = 'urgent';
                $description = 'Temperature and blood pressure are off the charts!';
                $req['isUrgent'] = 1;
            }
            else
            {
                $type = 'bad';
                $description = 'High temperature!';
                $req['isUrgent'] = 0;
            }
        }
        else
        {
            $req['isUrgent'] = 0;
            if($req['sys'] > 140 || $req['dias'] < 70)
            {
                $type = 'bad';
                $description = 'Problem with blood pressure!';
            }
            else
            {
                $type = 'good';
                $description = 'Everything is looking normal!';
            }
        }
        $req['type'] = $type;
        $req['description'] = $description;


        $client = new Client();
        $res = $client->request('POST', 'https://sh-service-3.herokuapp.com/service',
            ['json' => $req]);

        return response($res->getBody(), 200);
    }
}
