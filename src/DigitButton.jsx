import { ACTIONS } from "./App";

function DigitButton (props) {
    return (
        <button onClick={props.dispatch(ACTIONS.ADD_DIGIT)}></button>
    )
}

export default DigitButton;

