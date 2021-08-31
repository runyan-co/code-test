<?php

namespace App\Models;

use Illuminate\Support\Str;
use App\Exceptions\InvalidRecordStatusValue;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Record extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'code',
        'status'
    ];

    public static function boot()
    {
        static::creating(static function (Record $record) {
            $record->uuid = Str::uuid();
        });

        parent::boot();
    }

    public function setStatusAttribute(mixed $value)
    {
        // If the value is passed as a boolean, then
        // a value of true will be considered equivalent
        // to "active" and false to "inactive"
        if (is_bool($value)) {
            $this->attributes['status'] = $value ? 'Active' : 'Inactive';

        // If the value is a string and is one of the
        // accepted values, "active" or "inactive",
        // then set it to the property
        } else if (is_string($value) && in_array($value, ['Active', 'Inactive'])) {
            $this->attributes['status'] = $value;

        // Otherwise, throw an exception that an invalid
        // value was attempted to be saved here
        } else {
            throw new InvalidRecordStatusValue();
        }
    }
}
