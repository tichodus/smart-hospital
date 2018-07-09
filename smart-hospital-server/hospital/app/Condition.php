<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Condition extends Model
{
    protected $fillable = [
        'type',
        'description',
    ];

    public function patient()
    {
        return $this->belongsTo(User::class);
    }
}
