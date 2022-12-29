import { ACTIONS } from "./App";

function DigitButton (props) {
    return (
        <button onClick = {() => props.dispatchHandler({type : ACTIONS.ADD_DIGIT, payload : props.digit})}>
            {props.digit}
        </button>
    )
}

export default DigitButton;

