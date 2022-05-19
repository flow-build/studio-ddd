import { combineReducers } from "@reduxjs/toolkit";

import { reducers as signInReducers, RootState as SignInRootState } from "~/domain/signIn/ducks";
import { reducers as workflowsReducers, RootState as WorkflowsRootState } from "~/domain/workflows/ducks";

export type RootState = SignInRootState & WorkflowsRootState;

export default combineReducers({
    ...signInReducers,
    ...workflowsReducers,
});
