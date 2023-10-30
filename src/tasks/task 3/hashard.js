// Task 3:
// Write a program that allows a user to enter an integer and tells them if it is a Harshad number.

///////

//solution
// 1. Define a function isHarshadNumber(number):
//    - Convert the number to a string and store it in numStr.
//    - Initialize a variable digitSum to 0.
//    - Iterate through each character in numStr:
//      - Convert the character to an integer and add it to digitSum.
//    - If the original number is divisible by digitSum, return true (it's a Harshad number).
//    - Otherwise, return false (it's not a Harshad number).

// 2. Ask the user to input an integer and store it in a variable userInput.

// 3. Check if userInput is a valid integer:
//    - If not, display an error message and end.
//    - If valid, parse userInput to an integer and store it in the variable number.

// 4. Call the isHarshadNumber function with the number as the argument and store the result in a variable result.

// 5. Display the result to the user:
//    - If result is true, print that the number is a Harshad number.
//    - If result is false, print that the number is not a Harshad number.
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hashard = () => {
  const [userInput, setUserInput] = useState("");
  const isHarshadNumber = (number) => {
    const numStr = number.toString();
    const digitSum = numStr.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    return number % digitSum === 0;
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
      const result = isHarshadNumber(number);
      if (result) {
        toast.success(`${number} is a Harshad number.`, {
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
        toast.error(`${number} is not a Harshad number.`, {
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
  }

  return (
    <div>
      <ToastContainer />
      <h1 className="text-[24px] font-[500]">Third task</h1>
      <p className="my-4">
        <span className="font-extrabold">Description: </span>
        Write a program that allows a user to enter an
        integer and tells them if it is a Harshad number.
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

export default Hashard;