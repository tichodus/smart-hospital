<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bed extends Model
{
    protected $with = ['patient'];

    public function patient()
    {
        return $this->hasOne(Patient::class);
    }
}
