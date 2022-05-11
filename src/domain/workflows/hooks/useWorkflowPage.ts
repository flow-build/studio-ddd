import { useCallback } from "react"
import { useQuery } from "react-query"
import { useNavigate } from 'react-router-dom'

import useApi from "~/core/api/useApi"
import { IWorkflow } from "~/core/models/IWorkflow"
// import { useSnackbar } from 'notistack';
// import { createProcessByName } from "services/resources/processes/create-by-name";

const useWorkflowPage = () => {
    const navigate = useNavigate()
    const api = useApi()

    // const { enqueueSnackbar } = useSnackbar();

    const navigateToProcess = useCallback((workflowId: string) => {
        navigate(`${workflowId}/processes`)
    }, [navigate])

    const showNotification = useCallback((message: string) => {
        /* enqueueSnackbar(
            `Processo ${message} criado!`,
            { autoHideDuration: 2000, variant: 'success' }
        ); */
    }, [/* enqueueSnackbar */])

    const createProcess = useCallback(async (processName: string, workflowId: string) => {
        try {
            /*  const response = await createProcessByName(processName);
             showNotification(processName);
             navigate(`${workflowId}/processes/${response.process_id}/history`) */
        } catch (error) {
            console.error(error)
        }
    }, [navigate, showNotification])

    const navigateToDiagram = useCallback((workflowId: string) => {
        navigate(`${workflowId}/diagram`)
    }, [navigate])

    return {
        navigateToProcess,
        createProcess,
        navigateToDiagram
    }
}

export default useWorkflowPage;
