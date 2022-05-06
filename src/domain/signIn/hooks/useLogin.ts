import { useMutation } from "react-query";

import useApi from "../../../core/api/useApi";

const useLogin = () => {
    const api = useApi();

    return useMutation<string>(async () => {
        try {
            const response = await api.post("/token", {});
            return response.data.jwtToken || response.data.token;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            throw new Error(`getWorkflowAnonymousToken -> ${e.error}: ${e.message}`);
        }
    });
};

export default useLogin;