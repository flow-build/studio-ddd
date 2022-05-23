import { combineReducers } from "@reduxjs/toolkit";

import { reducers as historyReducers, RootState as HistoryRootState } from "~/domain/history/ducks";
import { reducers as signInReducers, RootState as SignInRootState } from "~/domain/signIn/ducks";
import { reducers as workflowsReducers, RootState as WorkflowsRootState } from "~/domain/workflows/ducks";

export type RootState = SignInRootState & WorkflowsRootState & HistoryRootState;

export default combineReducers({
    ...signInReducers,
    ...workflowsReducers,
    ...historyReducers
});
