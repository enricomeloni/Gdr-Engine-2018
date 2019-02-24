import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import sagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { routerReducer, routerMiddleware } from "react-router-redux";

import { roomReducer } from "../reducers/RoomReducer";


export const configureStore = (history) => {
	const reducers = {
		room: roomReducer
	};

    const middleware = [
        promiseMiddleware,
        sagaMiddleware,
        routerMiddleware(history),
        logger
	];

  // In development, use the browser's Redux dev tools extension if installed
	const enhancers = [];
		const isDevelopment = process.env.NODE_ENV === 'development';
		if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
		enhancers.push(window.devToolsExtension());
	}

	const rootReducer = combineReducers({
		...reducers,
		routing: routerReducer
	});

	return createStore(
		rootReducer,
		compose(applyMiddleware(...middleware), ...enhancers)
	);
}