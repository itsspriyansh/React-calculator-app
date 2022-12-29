import classes from './App.module.css';
import { useReducer } from 'react';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';

export const ACTIONS = {
  ADD_DIGIT : "add-digit",
  CHOOSE_OPERATION : "choose-operation",
  CLEAR : "clear",
  DELETE_DIGIT : "delete-digit",
  EVALUATE : "evaluate"
}

function reducer (state, {type, payload}) {
  switch (type) {

    case ACTIONS.ADD_DIGIT:
      if (state.overrite == true) {
        return {
          ...state,
          currentOperand : payload,
          overrite : false
        }
      }
      if (payload === "0" && state.currentOperand === "0") return state;
      if (payload === "." && state.currentOperand.includes(".")) return state; 
      return {
        ...state,
        currentOperand : `${state.currentOperand ? state.currentOperand : ""}${payload}`
      }

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state
      }
      if (state.currentOperand == null) {
        return {
          ...state,
          operation : payload
        }
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          operation : payload,
          previousOperand : state.currentOperand,
          currentOperand : null
        }
      }
      return {
        ...state,
        previousOperand : evaluate(state),
        operation : payload,
        currentOperand : null
      }

    case ACTIONS.DELETE_DIGIT:
      if (state.currentOperand == null) return state;
      if (state.overrite == true) {
        return {
          ...state,
          currentOperand : null,
          overrite : false
        }
      }
      let len = state.currentOperand.length;
      return {
        ...state,
        currentOperand : state.currentOperand.slice(0, len-1)
      }

    case ACTIONS.EVALUATE:
      if (state.currentOperand == null || state.previousOperand == null || state.operation == null) return state;
      return {
        previousOperand : null,
        operation : null,
        currentOperand : evaluate(state),
        overrite : true
      }

    case ACTIONS.CLEAR:
      return {}
  }
}


function evaluate ({currentOperand, previousOperand, operation}) {

  let prev = parseFloat (previousOperand);
  let curr = parseFloat (currentOperand);

  if (isNaN(prev) || isNaN(curr)) return "";

  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + curr
      break;
    case "-":
      computation = prev - curr
      break;
    case "÷":
      computation = prev / curr
      break;
    case "*":
      computation = prev * curr
      break;
  }
  return computation.toString();
}

function App() {

  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer (reducer, {});

  return (
    <div className = {classes.calculator}>
    <div className = {classes.calculatorGrid}>
      <div className = {classes.output}>

        <div className = {classes.previousOperand}>
          {previousOperand}{operation}
        </div>
        <div className = {classes.currentOperand}>
          {currentOperand}
        </div>

      </div>
      <button className = {classes.spanTwo} onClick={() => dispatch({type : ACTIONS.CLEAR})}>AC</button>
      <button onClick={() => dispatch({type : ACTIONS.DELETE_DIGIT})}>DEL</button>
      <OperationButton dispatchHandler={dispatch} operation="÷" />

      <DigitButton dispatchHandler={dispatch} digit="1" />
      <DigitButton dispatchHandler={dispatch} digit="2" />
      <DigitButton dispatchHandler={dispatch} digit="3" />

      <OperationButton dispatchHandler={dispatch} operation="*" />

      <DigitButton dispatchHandler={dispatch} digit="4" />
      <DigitButton dispatchHandler={dispatch} digit="5" />
      <DigitButton dispatchHandler={dispatch} digit="6" />

      <OperationButton dispatchHandler={dispatch} operation="+" />

      <DigitButton dispatchHandler={dispatch} digit="7" />
      <DigitButton dispatchHandler={dispatch} digit="8" />
      <DigitButton dispatchHandler={dispatch} digit="9" />

      <OperationButton dispatchHandler={dispatch} operation="-" />

      <DigitButton dispatchHandler={dispatch} digit="." />
      <DigitButton dispatchHandler={dispatch} digit="0" />
      <button className = {classes.spanTwo} onClick={() => dispatch({type : ACTIONS.EVALUATE})}>=</button>
    </div>
    </div>
  );
}

export default App;

