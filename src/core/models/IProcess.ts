import { IState } from '~/core/models/IState'

export interface IProcess {
    created_at: string;
    id: string;
    state: IState;
    status: string;
    workflow_id: string;
}