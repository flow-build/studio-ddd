import styled from '@emotion/styled'

import MuiAvatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'

import LogoUrl from '~/core/assets/images/flowbuildstudio_bg_dark.png'

export const Wrapper = styled(Box)``;
Wrapper.defaultProps = {
    sx: {
        gridArea: 'header',
        background: (theme) => theme.palette.background.paper,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        pl: '10px',
        pr: '10px'
    }
};

export const Logo = styled.img`
  width: 180px;
  cursor: pointer;
`
Logo.defaultProps = {
    src: LogoUrl,
    alt: "Flowbuild Studio Logo"
};

export const Avatar = styled(MuiAvatar)``