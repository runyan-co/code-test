<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Record;

class RecordControllerTest extends TestCase
{
    public function testRecordRetrievalReturnsCorrectFormat()
    {
        $this->json('post', 'api/record/stored')
             ->assertStatus(200)
             ->assertJsonStructure([
                 '*' => [
                     'id',
                     'uuid',
                     'name',
                     'description',
                     'code',
                     'status'
                 ]
             ]);
    }

    public function testRecordUpdatesSuccessfully()
    {
        $record = Record::factory()->create();

        $jsonPayload = [
            'id' => $record->id,
            'name' => $this->faker->name(),
            'description' => $this->faker->sentences(5, true),
            'code' => $this->faker->sentences(2, true),
            'status' => $this->faker->boolean() ? 'Active' : 'Inactive'
        ];

        $this->json('post', "api/record/update/$record->id", $jsonPayload)
            ->assertStatus(200)
            ->assertExactJson([
                'id' => $record->id,
                'uuid' => $record->uuid,
                'name' => $jsonPayload['name'],
                'description' => $jsonPayload['description'],
                'code' => $jsonPayload['code'],
                'status' => $jsonPayload['status']
            ]);
    }

    public function testRecordIsSuccessfullyDeleted()
    {
        $recordData = [
            'name' => $this->faker->name(),
            'description' => $this->faker->sentences(5, true),
            'code' => $this->faker->sentences(2, true),
            'status' => $this->faker->boolean() ? 'Active' : 'Inactive'
        ];

        $record = Record::factory()->create($recordData);

        $this->json('delete', "api/record/delete/$record->id")
             ->assertStatus(200)
             ->assertExactJson([true]);

        $this->assertDatabaseMissing('records', $recordData);
    }
}
