import { useMemo } from "react"

import CollapseContent from "~/domain/history/components/CollapseContent"

import { getLongFormatByDate } from "~/core/utils/date"

/* TODO: Remover any para IState */
const useTable = (states: any[]) => {
    const columnData = useMemo(() => {
        return [
            { id: 'id', name: 'ID' },
            { id: 'node', name: 'Node' },
            { id: 'nextNode', name: 'Next node' },
            { id: 'status', name: 'Status' },
            { id: 'createdAt', name: 'Created at' },
        ]
    }, [])

    const rows = useMemo(() => {
        return states.map(state => {
            const items = [
                state.id,
                state.node_id,
                state.next_node_id ?? 'null',
                state.status,
                getLongFormatByDate(state.created_at)
            ];

            const collapseContent = <CollapseContent state={state} />

            return { items, collapseContent }
        })
    }, [states])

    return { columnData, rows }
};

export default useTable;
