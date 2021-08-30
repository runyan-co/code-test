<?php

namespace App\Http\Controllers;

use App\Models\Record;
use App\Http\Resources\RecordResource;
use Illuminate\Http\Request;

class RecordController extends Controller
{
    /**
     * If an existing Record model is present (because the route had the
     * primary key of the mode present e.g. /api/stored/1) then return
     * the model data as JSON. Otherwise, send back a JSON array of all
     * Record models in the database.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function retrieve(Request $request, Record $record)
    {
        return $record->exists
            ? response()->json(new RecordResource($record))
            : response()->json(RecordResource::collection($record::all()));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Record  $record
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Record $record)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Record  $record
     * @return \Illuminate\Http\Response
     */
    public function destroy(Record $record)
    {
        //
    }
}
