import axios from "axios";
import { AxiosRequestConfig, AxiosStatic, Method } from "axios"
import { baseUrl } from "../config/Config"
import { apiStart, apiError, apiEnd } from "../actions/ApiActions"
import { Dispatch, Action } from "redux"
import { Action as FluxAction } from "redux-actions"


export interface IRequest {
    url: string;
    method: Method;
    data?: any;
    accessToken?: string;
    onSuccess?: (data: any) => FluxAction<Object>;
    onFailure?: (error: any) => FluxAction<Object>;
    label?: string;
    headers?: any;
}

export interface IResponse {
    request: IRequest;
    error: number;
    data: any;
    headers: any;
    label: string;
}

class Api {
    private axios: AxiosStatic;
    private dispatch: Dispatch<Action<Object>>;

    Api() {
        this.axios = axios;

        axios.defaults.baseURL = baseUrl;
        axios.defaults.headers.common["Content-Type"] = "application/json";
        //axios.defaults.headers.common["Authorization"] = `Bearer${token}`;

    }

    private async callApi(request: IRequest): Promise<IResponse> {

        const dataOrParams: string = ["get"].includes(request.method) ? "params" : "data";

        if (request.label)
            this.dispatch(apiStart(request));

        const requestConfig: AxiosRequestConfig = {
            url: request.url,
            method: request.method,
            headers: request.headers,
            [dataOrParams]: request.data,
            baseURL: baseUrl
    }

        try {
            let responseData = await axios.request(requestConfig);

            return {
                data: responseData.data,
                error: responseData.status,
                headers: responseData.headers,
                label: request.label,
                request: request
            };
        } catch (error) {
            console.log("Error in API");
            console.log(error);
            throw error;
        }
    }

    async getActions(roomId: number): Promise<IResponse> {

        return this.callApi({
            url: `/rooms/${roomId}/actions`,
            method: "get"
        });
    }
}

export const client = new Api();