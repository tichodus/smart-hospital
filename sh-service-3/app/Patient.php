<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    protected $fillable = [
        'firstName',
        'lastName',
        'sys',
        'dias',
        'temperature',
    ];

    public function bed()
    {
        return $this->belongsTo(Bed::class);
    }

    public function condition()
    {
        return $this->hasOne(Condition::class);
    }
}
