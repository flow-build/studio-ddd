import { combineReducers } from "@reduxjs/toolkit";

import { reducers as signInReducers, RootState as SignInRootState } from "~/domain/signIn/ducks";

export type RootState = SignInRootState;

export default combineReducers({
    ...signInReducers,
});
