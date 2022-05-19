import React from 'react';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import * as S from './styles'

type Props = {
    tooltip?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

export const IconButton: React.FC<Props> = ({ icon: Icon, tooltip = '', ...props }) => {
    return (
        <S.Wrapper title={tooltip}>
            <S.Button {...props}>
                <Icon />
            </S.Button>
        </S.Wrapper>
    )
}