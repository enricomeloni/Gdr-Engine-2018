<?php

namespace App\Http\Controllers;

use App\PcClassRole;
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
        $player = $user;

        $character = $player->characters()->first();

        return view('home', ['character' => $character]);

        //return request()->session()->token();
    }

    public function game()
    {
        return view('test');
    }
}
