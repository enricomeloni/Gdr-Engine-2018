import { Action } from "redux/index";
import { createAction } from "redux-actions";
import { Action as FluxAction } from "redux-actions"
import { IRequest, IResponse } from "../api/Api"

export const lel = 50;

//export type ApiCallAction = FluxAction<{ apiCall: ApiCall }>


export const apiStart = createAction("API_START", (request: IRequest) => ({ request }));
export const apiError = createAction("API_ERROR", (request: IRequest, error: any) => ({ request, error }));
export const apiEnd = createAction("API_END", (response: IResponse) => ({ response }));

/*
export const sendApiCall = createAction("API", (apiCall: ApiCall) => ({ apiCall }));
export const apiStart = createAction("API_START", (apiCall: ApiCall) => ({ apiCall }));
export const apiError = createAction("API_ERROR", (apiCall: ApiCall) => ({ apiCall }));
export const apiEnd = createAction("API_END", (apiResponse: ApiResponse) => ({ apiResponse }));
*/
