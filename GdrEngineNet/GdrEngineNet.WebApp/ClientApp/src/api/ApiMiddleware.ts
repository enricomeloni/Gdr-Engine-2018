import { Middleware, MiddlewareAPI, Dispatch, Action } from "redux";
import { Action as FluxAction } from "redux-actions"
//import { ApiCall, ApiCallAction, Method, apiStart, apiError, apiEnd, sendApiCall} from "../actions/ApiActions"
import axios from "axios";



/*export let apiMiddleware: Middleware = store => (next: Dispatch<Action>) => (action: Action<string>) => {
    console.log("Before");
    const result = next(action);

    const { dispatch } = store;

    if (action.type !== sendApiCall.toString())
        return result;

    const fluxAction = action as ApiCallAction;
    const apiCall = fluxAction.payload.apiCall;
    
    const {
        url,
        method,
        data,
        accessToken,
        onSuccess,
        onFailure,
        label,
        headers
    } = apiCall;

    
    const dataOrParams: string = [Method.Get].includes(method) ? "params" : "data";

    axios.defaults.baseURL = "/api/";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    //axios.defaults.headers.common["Authorization"] = `Bearer${token}`;

    if (label) {
        dispatch(apiStart(apiCall));
    }
    
    try {
        const responsePayload = await axios.request({
            url: url,
            method: method.toString(),
            headers: headers,
            [dataOrParams]: data
        });

        dispatch(onSuccess(data));
    } catch (err) {
        console.log(err);
        dispatch(apiError(apiCall));
        dispatch(onFailure(err);
    }
    console.log("After");
    return result;
}




    /*<TS>(api: MiddlewareAPI<TS>) =>
    (next: Dispatch<TS>) =>
        <TA extends Action>(action: TA): TA => {
        };#1#*/