<?php

namespace App\Http\Controllers;

use App\Models\Record;
use App\Http\Resources\RecordResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Exceptions\InvalidRecordStatusValue;

class RecordController extends Controller
{

    /**
     * If an existing Record model is present (because the route had the
     * primary key of the mode present e.g. /api/stored/1) then return
     * the model data as JSON. Otherwise, send back a JSON array of all
     * Record models in the database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Record  $record
     *
     * @return JsonResponse
     */
    public function retrieve(Request $request): JsonResponse
    {
        return response()->json(RecordResource::collection(Record::all()));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Record  $record
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Record $record): JsonResponse
    {
        // Validate record exists by its primary
        // key. This also allows us to validate
        // everything else separately
        $validatedId = $request->validate([
            'id' => 'exists:records|integer|required',
        ]);

        $validatedData = $request->validate([
            'name' => 'string|nullable',
            'description' => 'string|nullable',
            'code' => 'string|nullable',
            'status' => 'string|required'
        ]);

        // Update the attributes with the form
        // data and attempt to save
        $record->fill($validatedData)
               ->saveQuietly();

        return response()->json(new RecordResource($record));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete(Request $request, Record $record): JsonResponse
    {
        return response()->json([$record->delete()]);
    }
}
