import { useQuery } from "react-query";

import _isEmpty from 'lodash/isEmpty'

import useApi from "~/core/api/useApi";
import { IWorkflow } from "~/core/models/IWorkflow";

const useWorkflow = ({ search }: { search: string }) => {
    const api = useApi();

    function filterWorkflowByName(workflowName: string, name: string) {
        return workflowName.includes(name)
    }

    function filterWorkflowById(workflowId: string, id: string) {
        return workflowId.includes(id)
    }

    function filterWorkflow(workflow: IWorkflow, search: string) {
        const name = workflow.name;
        const id = workflow.workflow_id

        return filterWorkflowByName(name, search) || filterWorkflowById(id, search)
    }

    return useQuery<IWorkflow[]>(['getWorkflows', search], async () => {
        try {
            const response = await api.get<IWorkflow[]>('/workflows')

            if (_isEmpty(search)) {
                return response.data ?? [];
            }

            return response.data.filter(
                workflow => filterWorkflow(workflow, search.trim() as string)
            );
        } catch (error) {
            throw new Error('Erro ao tentar listar workflows.')
        }
    })
}

export default useWorkflow;