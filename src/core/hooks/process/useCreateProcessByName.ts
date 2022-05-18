import { useMutation } from 'react-query'

import useApi from '~/core/api/useApi';

type TResponse = {
    process_id: string;
    workflow: { id: string; name: string; version: number }
}

const useCreateProcessByName = () => {
    const api = useApi();

    return useMutation(async (name: string) => {
        try {
            const { data } = await api.post<TResponse>(`workflows/name/${name}/start`);
            return data;
        } catch (error) {
            throw new Error('Erro ao tentar listar workflows.')
        }
    })
}

export default useCreateProcessByName;