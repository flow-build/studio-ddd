import styled from '@emotion/styled'

import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { IconButton as SharedIconButton } from '~/core/components/IconButton'

export const Wrapper = styled(Grid)``
Wrapper.defaultProps = {
    item: true,
    xs: 12,
    sm: 12,
    md: 6,
    lg: 4,
};

export const Card = styled(MuiCard)``

export const Content = styled(MuiCardContent)``

export const Actions = styled(MuiCardActions)``
Actions.defaultProps = {
    sx: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
};

export const Title = styled(Typography)``
Title.defaultProps = {
    variant: "h5",
    // component: "h5"
};

export const Description = styled(Typography)``
Description.defaultProps = {
    variant: "body2",
};

export const Subtitle = styled(Typography)``
Subtitle.defaultProps = {
    color: "text.secondary",
    fontSize: 14,
    mb: 2
};

export const Caption = styled(Typography)``
Caption.defaultProps = {
    variant: 'caption'
};

export const IconButton = styled(SharedIconButton)``