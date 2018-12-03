import {loginError, loginRequest, loginSuccess, logoutError, logoutRequest, logoutSuccess} from "../actions/session";
import {take, call, put, fork, cancel} from "redux-saga/effects";

import axios from 'axios'

function* authorize(credentials)
{
    try {
        //let {payload: {data}} = yield call([axios, axios.post], '/login', credentials);
        let {data} = yield call([axios, axios.post], '/login', credentials);
        console.log(data);
        if(data.status === "ok"){
            yield put(loginSuccess());
        }
        else {
            yield put(loginError(data.error))
        }
    }
    catch(error)
    {
        yield put(loginError(error));
    }
}

export default function* loginFlow()
{
    while(true) {
        let {payload: {credentials}} = yield take(loginRequest);

        const task = yield fork(authorize, credentials);
        const action = yield take([logoutRequest,loginError]);
        if(action.type === logoutRequest.toString())
        {
            console.log('Logout requested');
            try {
                let x = yield cancel(task);
                let response = yield call([axios, axios.post], '/logout');
                console.log(response);
                yield put(logoutSuccess());
            }
            catch(error)
            {
                yield put(logoutError(error))
            }
        }
        else
        {
            console.log("Login Failed");
        }
    }
}
