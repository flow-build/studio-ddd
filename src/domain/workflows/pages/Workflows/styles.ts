import styled from '@emotion/styled'

import Grid from '@mui/material/Grid'

import { Table as SharedTable } from '~/core/components/Table'

export const Wrapper = styled(Grid)``
Wrapper.defaultProps = {
    container: true,
    spacing: 2,
}

export const TableContainer = styled(Grid)``
TableContainer.defaultProps = {
    item: true,
    xs: 12,
}

export const Table = styled(SharedTable)``
