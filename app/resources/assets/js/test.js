import ReactDOM from "react-dom";
import React from "react";
import CharacterSheet from "./components/CharacterSheet";

require('./app');

var axios = require('axios');

if (document.getElementById('app')) {



    axios.all([axios.get('/api/character/1'), axios.get('/api/character/1/characteristics')])
        .then(
            axios.spread(
                (characterResponse, characteristicsResponse) => {

                    console.log(characterResponse);

                    ReactDOM.render(<CharacterSheet user={characterResponse.data} stats={characteristicsResponse.data}/>, document.getElementById('app'));
                }
            )
        )


}
