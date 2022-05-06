/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BASE_URL: string;
    readonly VITE_MQTT_HOST: string;
    readonly VITE_MQTT_PORT: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}