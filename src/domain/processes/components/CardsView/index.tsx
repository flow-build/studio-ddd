import ExtensionOutlined from '@mui/icons-material/ExtensionOutlined'
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined'

import { IProcess } from '~/core/models/IProcess'
import { getLongFormatByDate } from '~/core/utils/date'

import { useProcessPage } from '~/domain/processes/hooks'


import * as S from './styles'

type Props = {
    processes: IProcess[]
}

const CardsView: React.FC<Props> = ({ processes }) => {
    const processPage = useProcessPage()

    const getActions = (process: IProcess) => {
        return [
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
    }

    return (
        <>
            {processes.map(process => (
                <S.Cards
                    key={process.id}
                    title={process.state.node_name}
                    subtitle={process.id}
                    headerTitle={process.status}
                    footerTitle={getLongFormatByDate(process.created_at)}
                    actions={getActions(process)}
                />
            ))}
        </>
    )
}

export default CardsView;