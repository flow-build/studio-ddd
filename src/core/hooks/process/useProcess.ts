import useCreateProcessByName from './useCreateProcessByName'

const useProcess = () => {
    const createByName = useCreateProcessByName()

    return {
        createByName,
    }
}

export default useProcess;
