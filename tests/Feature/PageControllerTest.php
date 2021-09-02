<?php

namespace Tests\Feature;

use Tests\TestCase;

class PageControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testHomePageReturnsCorrectly()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
}
