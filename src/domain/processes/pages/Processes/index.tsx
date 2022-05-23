import _isEqual from 'lodash/isEqual'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { ContentHeader } from '~/core/components/ContentHeader';
import { ModeView } from '~/core/constants/ModeView';
import useProcess from '~/core/hooks/process/useProcess';
import useWorkflow from '~/core/hooks/workflow/useWorkflow';
import { useTable } from '../../hooks';

import { default as CardsView } from '~/domain/processes/components/CardsView'

import * as S from './styles'

const Processes = () => {
    const { workflowId } = useParams()

    const process = useProcess()
    const {
        data: processes,
        isLoading: isProcessLoading
    } = process.listByWorkflowId({ id: workflowId ?? '' })

    const workflow = useWorkflow()
    const {
        data: workflowInfo,
        isLoading: isWorkflowLoading
    } = workflow.getInfo({ id: workflowId ?? '' })

    const [modeView, setModeView] = useState(ModeView.LIST)

    const table = useTable(processes ?? [])

    if (isProcessLoading || isWorkflowLoading) {
        return null;
    }

    return (
        <S.Wrapper>
            <ContentHeader
                title={`Workflow - ${workflowInfo?.name}`}
                subtitle={`Workflow id: ${workflowInfo?.workflow_id}`}
                hasInput={false}
                hasButton={false}
                initialModeView={ModeView.LIST}
                onChangeModeView={setModeView}
            />

            {_isEqual(modeView, ModeView.CARDS) && <CardsView processes={processes ?? []} />}

            {_isEqual(modeView, ModeView.LIST) && (
                <S.TableContainer>
                    <S.Table columnData={table.columnData} rows={table.rows} />
                </S.TableContainer>
            )}
        </S.Wrapper>
    )
};

export default Processes;
