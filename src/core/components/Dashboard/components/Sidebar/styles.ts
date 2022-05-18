import styled from '@emotion/styled'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

export const Wrapper = styled(Box)``
Wrapper.defaultProps = {
    sx: {
        gridArea: 'sidebar',
        background: (theme) => theme.palette.background.paper
    }
};

export const NavList = styled(List)``

export const MenuItem = styled(ListItemButton)``

export const MenuIcon = styled(ListItemIcon)``

export const MenuText = styled(ListItemText)``