import AddOutlined from '@mui/icons-material/AddOutlined'
import ExtensionOutlined from '@mui/icons-material/ExtensionOutlined'
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined'

import { IWorkflow } from '~/core/models/IWorkflow'

import { useWorkflowPage } from '~/domain/workflows/hooks'

import { getLongFormatByDate } from '~/core/utils/date'

import * as S from './styles'

type Props = {
    workflows: IWorkflow[]
}

export const CardsView: React.FC<Props> = ({ workflows }) => {
    const workflowPage = useWorkflowPage()

    const getActions = (workflow: IWorkflow) => {
        return [
            {
                icon: VisibilityOutlined,
                tooltip: 'Ver processos',
                onClick: () => workflowPage.navigateToProcess(workflow.workflow_id)
            },
            {
                icon: AddOutlined,
                tooltip: 'Novo processo',
                onClick: () => workflowPage.createProcess(workflow.name)
            },
            {
                icon: ExtensionOutlined,
                tooltip: 'Ver diagrama',
                onClick: () => workflowPage.navigateToDiagram(workflow.workflow_id)
            }
        ];
    }

    return (
        <>
            {workflows.map(workflow => (
                <S.Cards
                    key={workflow.workflow_id}
                    title={workflow.name}
                    subtitle={workflow.workflow_id}
                    description={workflow.description}
                    headerTitle={`Versão ${workflow.version}`}
                    footerTitle={getLongFormatByDate(workflow.created_at)}
                    actions={getActions(workflow)}
                />
            ))}
        </>
    )
}