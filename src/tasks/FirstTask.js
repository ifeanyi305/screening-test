import React from 'react';

const FirstTask = () => {
  return (
    <div>
      <div className="mt-[5%] flex text-center justify-center w-fit items-center border-[1px] border-[#000] rounded-[8px] p-4">
        <div className="m-auto">
          Run the command on your terminal to see the results:
          <span className="text-[15px] text-[#2097A7] block">$ node src/tasks/firstTask/factorPairs.js</span>
        </div>
      </div>
    </div>
  );
};

export default FirstTask;