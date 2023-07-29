import axios, { type AxiosInstance, type AxiosResponse } from "axios";

export class ApiClient {
  private readonly _baseUrl: string;
  private _defaultHeaders: { Accept: string; "Content-Type": string };
  private readonly _instance: AxiosInstance;

  constructor() {
    this._baseUrl = import.meta.env.VITE_API_URL;
    this._defaultHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    this._instance = axios.create({
      baseURL: this._baseUrl,
      headers: this._defaultHeaders,
    });
    this._init();
  }

  get instance() {
    return this._instance;
  }

  _init() {
    this._instance.interceptors.request.use(
      function (config) {

        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    this._instance.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        if (axios.isCancel(error)) {
          return error.message;
        }
        if (typeof error.response.data === "object") {
          error.response.data.error = true;
        }
        throw error.response;
      }
    );
  }

  _handleResponse(response: AxiosResponse) {
    const error: Error | undefined =
      response.data?.errors || response.data?.error;
    if (error) {
      this._handleErrors(response);
    }
    return response.data;
  }

  _handleErrors(response: AxiosResponse) {
    // nothing to do
    return response.data;
  }

  _handleUnexpectedError(error: { data: { error: boolean } }) {
    // console.error("Api call failed");
    if (
      typeof error === "object" &&
      error.data &&
      typeof error.data === "object"
    ) {
      error.data.error = true;
    } else {
      return { data: { error: true } };
    }
    return error.data;
  }

  async get(path = "", params = {}) {
    try {
      return this._handleResponse(await this._instance.get(path, params));
    } catch (error) {
      return this._handleUnexpectedError(error as { data: { error: boolean } });
    }
  }

  async post(path = "", body = {}, params = {}) {
    try {
      return this._handleResponse(
        await this._instance.post(path, body, params)
      );
    } catch (error) {
      return this._handleUnexpectedError(error as { data: { error: boolean } });
    }
  }

  async put(path = "", body = {}, params = {}) {
    try {
      return this._handleResponse(await this._instance.put(path, body, params));
    } catch (error) {
      return this._handleUnexpectedError(error as { data: { error: boolean } });
    }
  }

  async patch(path = "", body = {}, params = {}) {
    try {
      return this._handleResponse(
        await this._instance.patch(path, body, params)
      );
    } catch (error) {
      return this._handleUnexpectedError(error as { data: { error: boolean } });
    }
  }

  async delete(path = "", params = {}) {
    try {
      return this._handleResponse(await this._instance.delete(path, params));
    } catch (error) {
      return this._handleUnexpectedError(error as { data: { error: boolean } });
    }
  }
}

const $http = new ApiClient();

export default $http;
