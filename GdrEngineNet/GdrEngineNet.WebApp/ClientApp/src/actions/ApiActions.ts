import { createAction } from "redux-actions";
import { IRequest, IResponse } from "../api/Api"

export const apiStart = createAction("API_START", (request: IRequest) => ({ request }));
export const apiError = createAction("API_ERROR", (request: IRequest, error: any) => ({ request, error }));
export const apiEnd = createAction("API_END", (response: IResponse) => ({ response }));