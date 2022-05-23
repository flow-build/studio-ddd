import { useMemo } from "react"
import { ExtensionOutlined, VisibilityOutlined } from "@mui/icons-material"

import { IProcess } from "~/core/models/IProcess"
import { getLongFormatByDate } from "~/core/utils/date"
import { useProcessPage } from '~/domain/processes/hooks'

const useTable = (processes: IProcess[]) => {
    const processPage = useProcessPage()

    const columnData = useMemo(() => {
        return [
            { id: 'name', name: 'Name' },
            { id: 'id', name: 'ID' },
            { id: 'status', name: 'Status' },
            { id: 'createdAt', name: 'Created at' },
            { id: 'actions', name: 'Actions' },
        ]
    }, [])

    const rows = useMemo(() => {
        return processes.map(process => {
            const items = [
                process.state.node_name,
                process.id,
                process.status,
                getLongFormatByDate(process.created_at)
            ];

            const actions = [
                {
                    icon: VisibilityOutlined,
                    tooltip: 'Ver histórico',
                    onClick: () => processPage.navigateToHistory(process.id)
                },
                {
                    icon: ExtensionOutlined,
                    tooltip: 'Ver diagrama',
                    onClick: () => processPage.navigateToDiagram(/* process.id */)
                },
            ];

            return { items, actions }
        })
    }, [processPage, processes])

    return { columnData, rows }
}

export default useTable;
