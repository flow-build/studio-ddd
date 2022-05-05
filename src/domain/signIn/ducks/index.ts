import signIn, { State as SignInState } from "./signIn";

export type RootState = {
    signIn: SignInState;
};

export const reducers = { signIn };
