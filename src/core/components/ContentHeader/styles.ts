import styled from '@emotion/styled'

import Grid from '@mui/material/Grid'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { ViewList, ViewModule } from '@mui/icons-material'

import { Button as SharedButton } from '~/core/components/Button'

export const Wrapper = styled(Grid)``
Wrapper.defaultProps = {
    item: true,
    xs: 12
};

export const Row = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
Row.defaultProps = {
    item: true,
    xs: 12
}

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled(Typography)``;
Title.defaultProps = {
    variant: 'h4',
    // component: 'h4',
    gutterBottom: true
};

export const Subtitle = styled(Typography)``;
Subtitle.defaultProps = {
    variant: 'caption',
    // component: 'h5',
    gutterBottom: true
};

export const Button = styled(SharedButton)``;

export const Input = styled(TextField)``
Input.defaultProps = {
    size: 'small'
};

export const ToggleContainer = styled(ToggleButtonGroup)`
  margin-left: auto;
`
ToggleContainer.defaultProps = {
    exclusive: true
};

export const Toggle = styled(ToggleButton)``

export const ListIcon = styled(ViewList)``

export const ModuleIcon = styled(ViewModule)``