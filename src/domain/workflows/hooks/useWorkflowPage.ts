import { useCallback } from "react"
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack';

import useProcess from "~/core/hooks/process/useProcess"

const useWorkflowPage = () => {
    const navigate = useNavigate()

    const process = useProcess()

    const { enqueueSnackbar } = useSnackbar();

    const navigateToProcess = useCallback((workflowId: string) => {
        navigate(`${workflowId}/processes`)
    }, [navigate])

    const showNotification = useCallback((message: string) => {
        enqueueSnackbar(
            `Processo ${message} criado!`,
            { autoHideDuration: 2000, variant: 'success' }
        );
    }, [enqueueSnackbar])

    const createProcess = useCallback(async (processName: string) => {
        try {
            await process.createByName.mutateAsync(processName)
            showNotification(processName);
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
