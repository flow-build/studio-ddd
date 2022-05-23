import { combineReducers } from "@reduxjs/toolkit";

import { reducers as processesReducers, RootState as ProcessesRootState } from "~/domain/processes/ducks";
import { reducers as signInReducers, RootState as SignInRootState } from "~/domain/signIn/ducks";
import { reducers as workflowsReducers, RootState as WorkflowsRootState } from "~/domain/workflows/ducks";

export type RootState = SignInRootState & WorkflowsRootState & ProcessesRootState;

export default combineReducers({
    ...signInReducers,
    ...workflowsReducers,
    ...processesReducers
});
