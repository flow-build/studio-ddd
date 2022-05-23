import { useQuery } from "react-query";

import useApi from "~/core/api/useApi";
import { IProcess } from "~/core/models/IProcess";

const useListByWorkflowId = () => ({ id }: { id: string }) => {
    const api = useApi();

    return useQuery<IProcess[]>(['getProcessesByWorkflowId', id], async () => {
        try {
            const { data } = await api.get<IProcess[]>(`/workflows/${id}/processes`)
            return data;
        } catch (error) {
            throw new Error('Erro ao tentar listar processo pelo Workflow ID')
        }
    })
}

export default useListByWorkflowId;