@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif


                    You are logged in!<br>

                    Your player is: {{ $player->name }}

                    Your races are
                    @foreach($player->races()->getEager() as $race)
                        {{ $race->name }}
                    @endforeach

                    <br>

                        @foreach($player->races()->where('name', 'Crimson')->getResults() as $cosa)
                            {{ $cosa->name }}
                        @endforeach

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
