import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import useApi from "~/core/api/useApi";
import { setStorageItem } from "~/core/utils/storage";

const useLogin = () => {
    const navigate = useNavigate();
    const api = useApi();

    return useMutation<string>(
        async () => {
            try {
                const response = await api.post("/token", {});
                return response.data.jwtToken || response.data.token;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (e: any) {
                throw new Error(`getWorkflowAnonymousToken -> ${e.error}: ${e.message}`);
            }
        },
        {
            onSuccess: (token) => {
                if (token) {
                    setStorageItem("TOKEN", token);
                    navigate("/dashboard");
                }
            }
        }
    );
};

export default useLogin;