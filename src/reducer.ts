import { combineReducers } from "@reduxjs/toolkit";
import { reducers as exampleReducers, RootState as ExampleRootState } from "./domain/example/ducks";
import { reducers as signInReducers, RootState as SignInRootState } from "./domain/signIn/ducks";

export type RootState = ExampleRootState & SignInRootState;

export default combineReducers({
    ...exampleReducers,
    ...signInReducers,
});
