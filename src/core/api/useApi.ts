import axios from "axios";

import { getStorageItem } from "~/core/utils/storage";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
});

api.interceptors.request.use(
    async (config) => {
        const token = getStorageItem("TOKEN");

        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        console.error(`Interceptors Request -> ${error.name}: ${error.message}`);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    }
);

const useApi = () => {
    return api;
};

export default useApi;