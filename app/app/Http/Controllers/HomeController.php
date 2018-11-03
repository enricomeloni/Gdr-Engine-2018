<?php

namespace App\Http\Controllers;

use App\Race;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $player = $user->characters()->first();

        $race = Race::first();
        $player->races()->sync([1, 2, 3]);

        return view('home', ['player' => $player]);
    }
}
