import { useQuery } from "react-query";
import useApi from "~/core/api/useApi";
import { IWorkflow } from "~/core/models/IWorkflow";

const useGetInfo = () => ({ id }: { id: string }) => {
    const api = useApi();

    return useQuery<IWorkflow>(['getWorkflowInfoById', id], async () => {
        try {
            const { data } = await api.get<IWorkflow>(`/workflows/${id}`)
            return data;
        } catch (error) {
            throw new Error('Erro ao tentar listar informações do workflow pelo workflow id')
        }
    })
}

export default useGetInfo;