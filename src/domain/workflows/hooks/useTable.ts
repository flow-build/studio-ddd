import { useMemo } from "react"
import { AddOutlined, ExtensionOutlined, VisibilityOutlined } from '@mui/icons-material'

import { useWorkflowPage } from "~/domain/workflows/hooks"

import { IWorkflow } from "~/core/models/IWorkflow"

import { getLongFormatByDate } from "~/core/utils/date"

const useTable = (workflows: IWorkflow[]) => {
    const workflowPage = useWorkflowPage()

    const columnData = useMemo(() => {
        return [
            { id: 'name', name: 'Name' },
            { id: 'id', name: 'ID' },
            { id: 'description', name: 'Description' },
            { id: 'version', name: 'Version' },
            { id: 'createdAt', name: 'Created at' },
            { id: 'actions', name: 'Actions' },
        ]
    }, [])

    const rows = useMemo(() => {
        return workflows.map(workflow => {
            const items = [
                workflow.name,
                workflow.workflow_id,
                workflow.description,
                workflow.version,
                getLongFormatByDate(workflow.created_at)
            ];

            const actions = [
                {
                    icon: VisibilityOutlined,
                    tooltip: 'Ver processos',
                    onClick: () => workflowPage.navigateToProcess(workflow.workflow_id)
                },
                {
                    icon: AddOutlined,
                    tooltip: 'Novo processo',
                    onClick: () => workflowPage.createProcess(workflow.name, workflow.workflow_id)
                },
                {
                    icon: ExtensionOutlined,
                    tooltip: 'Ver diagrama',
                    onClick: () => workflowPage.navigateToDiagram(workflow.workflow_id)
                }
            ]

            return { items, actions }
        })
    }, [workflowPage, workflows])

    return {
        rows,
        columnData,
    }
}

export default useTable;
