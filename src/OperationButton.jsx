import { ACTIONS } from "./App";

function OperationButton (props) {
    return (
        <button onClick={() => props.dispatchHandler({type : ACTIONS.CHOOSE_OPERATION, payload : props.operation})}>
            {props.operation}
        </button>
    )
}

export default OperationButton;

