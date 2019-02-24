import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory, BrowserHistoryBuildOptions } from 'history';
import { configureStore } from './store/configureStore';
import App from './App';
import Test from './components/Test';
import ActiveWindow from './components/ActiveWindow';
import CharacterSheet from './components/CharacterSheet';
import { register } from './registerServiceWorker';
import Character from "./models/Character";
import Characteristics from "./models/Characteristics";

import Chat from "./components/room/Chat";
import TextAction from './models/TextAction';
import Action from "./models/Action";
import Room from "./containers/Room";

import { List } from "immutable";

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl } as BrowserHistoryBuildOptions);

// Get the application-wide store instance, prepopulating with state from the server where available.

const rootElement = document.getElementById('root');
//const initialState = window.initialReduxState;
const store = configureStore(history);
console.log(store);
/*

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  rootElement);
  */

const characteristics = {
    strength: 40,
    toughness: 30,
    agility: 40,
    intelligence: 30,
    willpower: 40,
    influence: 30,
    health: 40,
    mana: 70
} as Characteristics;

var character = new Character({
    firstName: "Raffaele",
    middleName: "Babbeus",
    lastName: "Zippo",
    characteristics: characteristics,
    createdAt: new Date(2018, 5, 12, 12, 43, 20)
});
//console.log(character.fullName());

var sheet = <CharacterSheet character={character} />;
var actions : TextAction[] = [
    new TextAction({
        characterId: 1,
        id: 0,
        roomId: 10,
        tag: "provocatorio",
        text: "Sei brutto"
    }),
    new TextAction({
      characterId: 2,
      id: 1,
      roomId: 10,
      tag: "offeso",
      text: "no u"
    })
];


ReactDOM.render(
    <Provider store={store}>
      <Room />
    </Provider>,
    rootElement
);



register();
