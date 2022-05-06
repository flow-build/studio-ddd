import { useState } from "react";
import { useNavigate } from "react-router-dom";

import flowbuildLogo from "../../assets/images/flowbuild-studio/default.svg";

import { setStorageItem } from "../../../../core/utils/storage";

import useLogin from "../../hooks/useLogin";

import * as S from "./styles";

const SignIn = () => {
    const navigate = useNavigate();

    const login = useLogin();

    const [payload, setPayload] = useState({ email: "", password: "" });

    const onChangeTextByField = (text: string, field: "email" | "password") => {
        setPayload(prev => ({ ...prev, [field]: text }));
    };

    const onLogin = async () => {
        const token = await login.mutateAsync();

        if (token) {
            setStorageItem("TOKEN", token);
            navigate("/dashboard");
        }
    };

    return (
        <S.Wrapper>
            <S.LoginContainer>
                <S.LogoContainer>
                    <img src={flowbuildLogo} alt="Logo" width="300px" />
                </S.LogoContainer>

                <S.Form>
                    <S.Input
                        id="email"
                        label="E-mail"
                        placeholder='Digite seu e-mail'
                        type="email"
                        value={payload.email}
                        onChange={evt => onChangeTextByField(evt.target.value, "email")}
                    />

                    <S.Input
                        id="password"
                        label="Senha"
                        placeholder='Digite sua senha'
                        type="password"
                        value={payload.password}
                        onChange={evt => onChangeTextByField(evt.target.value, "password")}
                    />

                    <S.PrimaryButton title="Login" fullWidth onClick={onLogin} />
                </S.Form>
            </S.LoginContainer>
        </S.Wrapper>
    );
};

export default SignIn;
