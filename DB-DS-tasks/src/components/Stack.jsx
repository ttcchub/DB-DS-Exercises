import React from "react";
import { useState } from "react";
import NavBar from "./NavBar";

const Stack = () => {
  const [stackArr, setStackArr] = useState([]);
  const [stackLength, setStackLength] = useState(0);
  const [top, setTop] = useState(0);
  const [value, setValue] = useState();
  const [update, setUpdate] = useState(0);

  const setArrLength = (length) => {
    setStackLength(length);
  };
  const createArr = () => {
    let array = Array(stackLength).fill(" 🙉 ");
    setStackArr(array);
    renderStack();
  };
  
  const forceUpdate = () => {
    setUpdate(update+1)
  }

  const pushStack = () => {
    let arr = stackArr;
    if (top >= arr.length) {
      arr[arr.length - 1] = value;
      setStackArr(arr);
      forceUpdate();
    } else {
      arr[top] = value;
      setTop(top + 1);
      setStackArr(arr);
    }
  };
  const popStack = () => {
    let arr = stackArr;
    if (top == 0) {
        console.log("Stack is empty")
      return;
    } else {
      arr[top - 1] = "🙊";
      setTop(top - 1);
      console.log(arr);
      setStackArr(arr);
    }
  };

  const renderStack = () => {
    let x = stackArr.map((e) => "[" + e + "]").join(" ");
    console.log(x);
    return x;
  };
  return (
    <div className="palindrome">
      <NavBar />
      <div className="context">
        <h1>Stack</h1>
        <label htmlFor="createArr">Array size:</label>
        <input
          type="number"
          name="createArr"
          onChange={(event) => setArrLength(Number(event.target.value))}
        />
        <button onClick={createArr}>Create</button>
        <h2>Stack present: {renderStack()} </h2>
        <h2>Stack position: {top} </h2>
        <label htmlFor="push">Push into stack this value:</label>
        <input
          type="number"
          name="push"
          onChange={(event) => setValue(event.target.value)}
        />
        <button onClick={pushStack}>Push</button>
        <button onClick={popStack}>Pop Last One </button>
      </div>
    </div>
  );
};

export default Stack;
