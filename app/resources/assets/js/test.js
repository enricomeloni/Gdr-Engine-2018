import ReactDOM from "react-dom";
import React from "react";
import CharacterSheet from "./components/CharacterSheet";
import {applyMiddleware, createStore} from "redux";
import {counterReducer} from "./reducers/counterReducer";
import {increment} from "./actions/counterActions";
import {createLogger} from "redux-logger";

require('./app');

const axios = require('axios');

const logger = createLogger();

const store = createStore(counterReducer, applyMiddleware(logger));


store.dispatch(increment(5));

if (document.getElementById('app')) {



    /*
    axios.all([axios.get('/api/character/1'), axios.get('/api/character/1/characteristics')])
        .then(
            axios.spread(
                (characterResponse, characteristicsResponse) => {

                    ReactDOM.render(<CharacterSheet user={characterResponse.data} stats={characteristicsResponse.data}/>, document.getElementById('app'));
                }
            )
        )
     */

}
