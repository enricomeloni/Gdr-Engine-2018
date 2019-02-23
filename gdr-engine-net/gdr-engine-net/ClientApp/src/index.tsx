import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory, BrowserHistoryBuildOptions } from 'history';
import configureStore from './store/configureStore';
import App from './App';
import Test from './components/Test'
import ActiveWindow from './components/ActiveWindow'
import registerServiceWorker from './registerServiceWorker';

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl } as BrowserHistoryBuildOptions);

// Get the application-wide store instance, prepopulating with state from the server where available.

const rootElement = document.getElementById('root');
/*const initialState = window.initialReduxState;
const store = configureStore(history, initialState);


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  rootElement);
  */

ReactDOM.render(
    <ActiveWindow id={0} key={0} title="narobba" onCloseButtonClick={alert.bind(this, "test")}/>,
    rootElement
);

registerServiceWorker();
