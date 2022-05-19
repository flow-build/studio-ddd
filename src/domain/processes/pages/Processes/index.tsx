import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Button from "../../components/Button";
import { setCounter } from "../../ducks/processes";
import { RootState } from "../../ducks";

const Processes = () => {
    const dispatch = useDispatch();
    const counter = useSelector((store: RootState) => store.processes.counter);
    const [stateCounter, setStateCounter] = useState(counter);

    return (
        <div>
            <h1>Processes</h1>
            <h2>State counter - {stateCounter}</h2>
            <h2>Redux counter - {counter}</h2>
            <Button onClick={() => setStateCounter(actualValue => actualValue + 1)}>ADD +</Button>
            <Button onClick={() => dispatch(setCounter(stateCounter))}>Push to redux</Button>
        </div>
    );
};

export default Processes;
