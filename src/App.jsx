import classes from './App.module.css';
import { useReducer } from 'react';
import DigitButton from './DigitButton';

export const ACTIONS = {
  ADD_DIGIT : "add-digit",
  CHOOSE_OPERATION : "choose-operation",
  CLEAR : "clear",
  DELETE_DIGIT : "delete-digit",
  EVALUATE : "evaluate"
}

function reducer (state, {type, payload}) {

}

function App() {

  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer (reducer, {});

  return (
    <div className = {classes.calculator}>
    <div className = {classes.calculatorGrid}>
      <div className = {classes.output}>
        <div className = {classes.previousOperand}>124213</div>
        <div className = {classes.currentOperand}>324345</div>
      </div>
      <button className = {classes.spanTwo}>AC</button>
      <button>DEl</button>
      <button>÷</button>
      <DigitButton dispatchHandler={dispatch} digit="1"></DigitButton>
      <DigitButton dispatchHandler={dispatch} digit="2"></DigitButton>
      <DigitButton dispatchHandler={dispatch} digit="3"></DigitButton>
      <button>*</button>
      <DigitButton dispatchHandler={dispatch} digit="4"></DigitButton>
      <DigitButton dispatchHandler={dispatch} digit="5"></DigitButton>
      <DigitButton dispatchHandler={dispatch} digit="6"></DigitButton>
      <button>+</button>
      <DigitButton dispatchHandler={dispatch} digit="7"></DigitButton>
      <DigitButton dispatchHandler={dispatch} digit="8"></DigitButton>
      <DigitButton dispatchHandler={dispatch} digit="9"></DigitButton>
      <button>-</button>
      <button>.</button>
      <DigitButton dispatchHandler={dispatch} digit="0"></DigitButton>
      <button className = {classes.spanTwo}>=</button>
    </div>
    </div>
  );
}

export default App;

