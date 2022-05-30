import { useQuery } from "react-query";

import useApi from "~/core/api/useApi";

const useGetByProcessId = () => ({ processId }: { processId: string }) => {
    const api = useApi()

    return useQuery(['getHistoryByProcessId', processId], async () => {
        try {
            const { data } = await api.get(`/processes/${processId}/history`);
            return data;
        } catch (error) {
            throw new Error('Erro ao tentar listar histórico pelo id do processo')
        }
    })
}

export default useGetByProcessId;