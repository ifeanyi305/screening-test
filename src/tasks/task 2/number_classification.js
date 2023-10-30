// Task:
// Write a program that allows a user to enter an integer and tells them if it is a deficient, perfect or
// abundant number.

//solution
// 1. Define a function isDeficientPerfectAbundant(num):
//    - Initialize a variable "sum" to 1 (since 1 is a divisor for all numbers).
//    - Iterate from i = 2 to the square root of num:
//      - If num is divisible by i (i.e., num % i === 0):
//        - Add i to "sum".
//        - If i is not the square root of num, add num / i to "sum".
//    - If "sum" is less than num, return "deficient".
//    - If "sum" is equal to num, return "perfect".
//    - If "sum" is greater than num, return "abundant".

// 2. Ask the user to input an integer and store it in a variable "userInput".

// 3. Call the isDeficientPerfectAbundant function with "userInput" as the argument and store the result in "result".

// 4. Display the result to the user, indicating whether the input number is deficient, perfect, or abundant.

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NumberClassification = () => {
  const [userInput, setUserInput] = useState("");
  const isDeficientPerfectAbundant = (num) => {
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        sum += i;
        if (i !== num / i) {
          sum += num / i;
        }
      }
    }

    if (sum < num) {
      return "Deficient";
    } else if (sum === num) {
      return "Perfect";
    } else {
      return "Abundant";
    }
  }

  const submitNum = (e) => {
    e.preventDefault();
    const number = parseInt(userInput);
    if (isNaN(number)) {
      toast.warn('Invalid input. Please enter a valid integer.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const result = isDeficientPerfectAbundant(number);
      toast.success(`${number} is a ${result} number.`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <div>
      <ToastContainer />
      <h1 className="text-[24px] font-[500]">Second task</h1>
      <p className="my-4">
        <span className="font-extrabold">Description: </span>
        Write a program that allows a user to enter
        an integer and tells them if it is a deficient, perfect or
        abundant number.
      </p>
      <form onSubmit={submitNum}>
        <div className="w-full md:w-[60%]">
          <input
            type="number"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full px-4 rounded-[5px] py-[4px] border-[1px] border-[#000]"
          />
          <button className="bg-[#2097A7] my-4 text-[#fff] px-4 py-[4px] rounded-[8px]" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NumberClassification;