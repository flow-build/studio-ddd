export interface IState {
    id: string;
    next_node_id: string | null;
    node_id: string;
    node_name: string;
    step_number: number;

    created_at: string;
    engine_id: string;
    error: null; /* TODO: Rever */
    external_input: null;
    process_id: string;
    result: any; /* TODO: Rever */
    status: string; /* TODO: Rever */
    time_elapsed: string;
}