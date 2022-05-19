import { useEffect, useState } from 'react';

import _isEqual from 'lodash/isEqual'

import { ContentHeader } from '~/core/components/ContentHeader'
import { ModeView } from '~/core/constants/ModeView';
import { IWorkflow } from '~/core/models/IWorkflow';

import { CardsView } from '~/domain/workflows/components/CardsView'
import { useTable, useWorkflow } from '~/domain/workflows/hooks'

import * as S from './styles';

const Workflows = () => {
    const [workflows, setWorkflows] = useState<IWorkflow[]>([]);
    const [modeView, setModeView] = useState(ModeView.LIST)
    const [filter, setFilter] = useState('')

    const { data } = useWorkflow({ search: filter })
    const table = useTable(workflows)

    const onChangeModeView = (newModeView: ModeView) => {
        setModeView(newModeView)
    }

    const onFilter = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setFilter(event.target.value)
    }

    useEffect(() => {
        setWorkflows(data?.reverse() ?? [])
    }, [data])

    return (
        <S.Wrapper>
            <ContentHeader
                title='Workflows'
                inputLabel="Nome / ID"
                onChangeModeView={onChangeModeView}
                onChangeInput={onFilter}
            />

            {_isEqual(modeView, ModeView.CARDS) && <CardsView workflows={workflows ?? []} />}

            {_isEqual(modeView, ModeView.LIST) && (
                <S.TableContainer>
                    <S.Table columnData={table.columnData} rows={table.rows} />
                </S.TableContainer>
            )}

        </S.Wrapper>
    )
};

export default Workflows;
