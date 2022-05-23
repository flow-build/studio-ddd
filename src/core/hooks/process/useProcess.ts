import useCreateProcessByName from './useCreateProcessByName'
import useListByWorkflowId from './useListByWorkflowId'

const useProcess = () => {
    const createByName = useCreateProcessByName()
    const listByWorkflowId = useListByWorkflowId()

    return {
        createByName,
        listByWorkflowId,
    }
}

export default useProcess;
