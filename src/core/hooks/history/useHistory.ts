import useGetByProcessId from "./useGetByProcessId";

const useHistory = () => {
    const getByProcessId = useGetByProcessId()

    return {
        getByProcessId
    }
}

export default useHistory;