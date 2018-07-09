<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    protected $with = ['beds'];
    public function beds()
    {
        return $this->hasMany(Bed::class);
    }
}
