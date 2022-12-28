import classes from './App.module.css';
import { useReducer } from 'react';

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

  const [{currentOperant, previousOperand, operation}, dispatch] = useReducer (reducer, {});

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
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className = {classes.spanTwo}>=</button>
    </div>
    </div>
  );
}

export default App;

