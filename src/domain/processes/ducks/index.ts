import processes, { State as ProcessesState } from "./processes";

export type RootState = {
    processes: ProcessesState;
};

export const reducers = { processes };
