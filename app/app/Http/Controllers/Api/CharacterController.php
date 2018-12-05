<?php

namespace App\Http\Controllers\Api;

use App\Character;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CharacterController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function get(Character $character)
    {
        return $character->toJson();
    }

    public function characteristics(Character $character)
    {
        return $character->characteristics()->firstOrFail()->toJson();
    }
}
