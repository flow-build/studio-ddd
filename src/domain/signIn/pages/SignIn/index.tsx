import { useState } from "react";

import flowbuildLogo from "~/domain/signIn/assets/images/flowbuild-studio/default.svg";
import useLogin from "~/domain/signIn/hooks/useLogin";

import * as S from "./styles";

const SignIn = () => {
    const login = useLogin();

    const [payload, setPayload] = useState({ email: "", password: "" });

    const onChangeTextByField = (text: string, field: "email" | "password") => {
        setPayload(prev => ({ ...prev, [field]: text }));
    };

    const onLogin = () => {
        login.mutate();
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
