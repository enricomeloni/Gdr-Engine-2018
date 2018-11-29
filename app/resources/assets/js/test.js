import ReactDOM from "react-dom";
import React from "react";
import CharacterSheet from "./components/CharacterSheet";

require('./app');

if (document.getElementById('app')) {

    let stats = {
        strength: 40,
        toughness: 30,
        agility: 25,
        intelligence: 40,
        perception: 30,
        willpower: 20,
        fellowship: 15
    };

    ReactDOM.render(<CharacterSheet user={'Violet'} stats={stats}/>, document.getElementById('app'));
}
