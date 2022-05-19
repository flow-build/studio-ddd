import styled from '@emotion/styled'

import Box from '@mui/material/Box'

export const Wrapper = styled(Box)``;
Wrapper.defaultProps = {
    sx: {
        display: "flex",
        background: (theme) => theme.palette.background.default,
    }
}
