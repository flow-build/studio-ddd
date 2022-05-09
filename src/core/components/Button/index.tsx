import { ButtonProps } from "@mui/material/Button";

import * as S from "./styles";

type Props = ButtonProps & {
    title: string;
    fullWidth?: boolean;

    variant?: "contained" | "outlined" | "text";

    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<Props> = ({ title, variant = "contained", ...props }) => {
    return (
        <S.Wrapper variant={variant} {...props}>
            {title}
        </S.Wrapper>
    );
};
