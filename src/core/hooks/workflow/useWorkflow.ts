import useGetInfo from "./useGetInfo";

const useWorkflow = () => {
    const getInfo = useGetInfo()

    return {
        getInfo
    }
}

export default useWorkflow;