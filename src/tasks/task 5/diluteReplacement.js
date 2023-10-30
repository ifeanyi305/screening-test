// Task 5
// Write a program that allows a user to calculate how many milliliters (ml) of their glass of sirup they
// need to replace (with water or sirup) to achieve the recommended dilution as indicated on the sirup
// bottle. The user can enter the amount of sirup in their glass (e.g. 200 ml), its dilution (e.g. 25 %) and
// the recommended dilution (e.g. 20 %).
// The program should then tell the user how many milliliters to replace with water or sirup. For
// example: "Replace 40 ml of your sirup with water."

// Solution

// 1. Define a function calculateDilutionReplacement(currentSirup, currentDilution, recommendedDilution):
//    - Calculate the amount of sirup needed to achieve the recommended dilution:
//      - sirupNeeded = (currentSirup * (recommendedDilution - currentDilution)) / currentDilution
//    - If sirupNeeded is greater than 0:
//      - Return "Replace sirupNeeded ml of your sirup with water."
//    - Else if sirupNeeded is less than 0:
//      - Return "Add abs(sirupNeeded) ml of sirup to your glass."
//    - Else:
//      - Return "No need to replace. You already have the recommended dilution."

// 2. Ask the user to input the following:
//    - Enter the amount of sirup in your glass (ml) and store it in a variable userInputSirup.
//    - Enter the current dilution percentage and store it in a variable userInputCurrentDilution.
//    - Enter the recommended dilution percentage and store it in a variable userInputRecommendedDilution.

// 3. Check if any of the user inputs (userInputSirup, userInputCurrentDilution, userInputRecommendedDilution) is not a valid number:
//    - Display "Invalid input. Please enter valid numbers."
//    - End the program.

// 4. Call the calculateDilutionReplacement function with the user inputs as arguments and store the result in a variable result.

// 5. Display the result message to the user.
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DiluteReplacement = () => {
  const [userInputSirup, setUserInputSirup] = useState("");
  const [userInputCurrentDilution, setUserInputCurrentDilution] = useState("");
  const [userInputRecommendedDilution, setUserInputRecommendedDilution] = useState("");

  const calculateDilutionReplacement = (currentSirup, currentDilution, recommendedDilution) => {
    const sirupNeeded = (currentSirup * (recommendedDilution - currentDilution)) / currentDilution;

    if (sirupNeeded > 0) {
      return `Replace ${sirupNeeded.toFixed(2)} ml of your sirup with water.`;
    } else if (sirupNeeded < 0) {
      return `Add ${Math.abs(sirupNeeded).toFixed(2)} ml of sirup to your glass.`;
    } else {
      return "No need to replace. You already have the recommended dilution.";
    }
  }

  const submitNum = (e) => {
    e.preventDefault();
    if (isNaN(userInputSirup) || isNaN(userInputCurrentDilution) || isNaN(userInputRecommendedDilution)) {
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
      const result = calculateDilutionReplacement(userInputSirup, userInputCurrentDilution, userInputRecommendedDilution);
      toast.success(`${result}`, {
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
      <h1 className="text-[24px] font-[500]">Final task</h1>
      <p className="my-4">
        <span className="font-extrabold">Description: </span>
        Write a program that allows a user to calculate how
        many milliliters (ml) of their glass of sirup they
        need to replace (with water or sirup) to achieve the
        recommended dilution as indicated on the sirup
        bottle. The user can enter the amount of sirup in their glass
        (e.g. 200 ml), its dilution (e.g. 25 %) and
        the recommended dilution (e.g. 20 %).
        The program should then tell the user how many milliliters
        to replace with water or sirup. For
        example: "Replace 40 ml of your sirup with water."
      </p>
      <form onSubmit={submitNum}>
        <div className="w-full md:w-[60%]">
          <div>
            <label className="block">Sirup</label>
            <input
              type="number"
              value={userInputSirup}
              required
              onChange={(e) => setUserInputSirup(e.target.value)}
              className="w-full px-4 rounded-[5px] py-[4px] border-[1px] border-[#000]"
            />
          </div>
          <div className="my-4">
            <label className="block">Current Dillution</label>
            <input
              type="number"
              value={userInputCurrentDilution}
              required
              onChange={(e) => setUserInputCurrentDilution(e.target.value)}
              className="w-full px-4 rounded-[5px] py-[4px] border-[1px] border-[#000]"
            />
          </div>
          <div>
            <label className="block">Reccomended Dillution</label>
            <input
              type="number"
              value={userInputRecommendedDilution}
              required
              onChange={(e) => setUserInputRecommendedDilution(e.target.value)}
              className="w-full px-4 rounded-[5px] py-[4px] border-[1px]  border-[#000]"
            />
          </div>
        </div>
        <button className="bg-[#2097A7] my-4 text-[#fff] px-4 py-[4px] rounded-[8px]" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DiluteReplacement;