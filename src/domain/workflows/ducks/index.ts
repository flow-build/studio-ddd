import workflows, { State as WorkflowsState } from "./workflows";

export type RootState = {
    workflows: WorkflowsState;
};

export const reducers = { workflows };
