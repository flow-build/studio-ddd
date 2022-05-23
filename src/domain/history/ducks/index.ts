import history, { State as HistoryState } from "./history";

export type RootState = {
    history: HistoryState;
};

export const reducers = { history };
