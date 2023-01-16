import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import NavBar from "./NavBar";

const BubbleSort = () => {
  const [arr, setArr] = useState([]);
  const [number, setNumber] = useState();
  const [result, setResult] = useState([]);
  const [alert, setAlert] = useState("press Bubble Sort to sort the array");

  const addToArray = (event) => {
    event.preventDefault();
    let arrayNew = arr;
    arrayNew.push(number);
    setArr(arrayNew);
    console.log("array ", arr);
    setNumber();
  };

  const showArray = () => {
    return arr.join(", ");
  };
  const clearArray = () => {
    setArr([]);
    setAlert("press Bubble Sort to sort the array");
  };

  const bubbleSort = () => {
    let arrayNew = arr;
    for (let i = arrayNew.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arrayNew[j] > arrayNew[j + 1]) {
          let temp = arrayNew[j];
          arrayNew[j] = arrayNew[j + 1];
          arrayNew[j + 1] = temp;
        }
      }
    }
    setResult(arrayNew);
    setAlert("Sort Done! Reset to do it again.");
  };

  return (
    <div className="palindrome">
      <NavBar />
      <div className="context">
        <h1>Bubble sort</h1>
        <form onSubmit={addToArray}>
          <label htmlFor="arr">Type array of numbers,  click on Bubble sort button, and after that delete number from input field !  </label>
          <input
            type="number"
            name="arr"
            onChange={(event) => setNumber(Number(event.target.value))}
          />
          <button type="submit">Add</button>
        </form>

        <h2>
          Your array is now: <span>{showArray()}</span>
        </h2>
        <div className="result">{alert}</div>
        <button onClick={bubbleSort}>Bubble sort!</button>
        <button onClick={clearArray}>Clear</button>
      </div>
    </div>
  );
};

export default BubbleSort;
