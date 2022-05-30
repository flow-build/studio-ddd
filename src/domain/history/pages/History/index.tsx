import { useParams } from 'react-router-dom';

import { ContentHeader } from '~/core/components/ContentHeader'
import useHistory from '~/core/hooks/history/useHistory';

import { useTable } from '~/domain/history/hooks'

import * as S from './styles'

const History = () => {
    const { process_id } = useParams();

    const history = useHistory()
    const { data: historyList } = history.getByProcessId({ processId: process_id ?? '' })

    const table = useTable(historyList ?? [])

    return (
        <S.Wrapper>
            <ContentHeader
                title='Histórico'
                subtitle={`Process id: ${process_id ?? 'nenhum informado'}`}
                hasInput={false}
                hasButton={false}
                showToggle={false}
            />

            <S.TableContainer>
                <S.Table columnData={table.columnData} rows={table.rows.reverse()} isCollapse />
            </S.TableContainer>
        </S.Wrapper>
    );
};

export default History;
