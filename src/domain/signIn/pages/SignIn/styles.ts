import styledEmotion from '@emotion/styled';

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { Button } from "~/core/components/Button";
import { InputText } from "~/core/components/InputText";

export const Wrapper = styledEmotion(Grid)``;
Wrapper.defaultProps = {
    container: true,
    alignItems: "center",
    justifyContent: "center",
    sx: {
        height: "100vh",
        background: (theme) => theme.palette.background.default
    }
};

export const LoginContainer = styledEmotion(Box)``;
LoginContainer.defaultProps = {
    sx: { width: 320 }
}

export const LogoContainer = styledEmotion(Box)``;
LogoContainer.defaultProps = {
    sx: {
        display: "flex",
        justifyContent: "center",
        mb: 4
    }
}

export const Form = styledEmotion(Box)``;
Form.defaultProps = {
    component: "form"
};

export const Input = styledEmotion(InputText)``;
Input.defaultProps = {
    fullWidth: true,
    required: true,
    sx: { mb: 2 }
};

export const PrimaryButton = styledEmotion(Button)``;