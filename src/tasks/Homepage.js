import React from 'react';
import Navbar from '../component/Navbar';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[5%]">
        <h1 className="text-center text-[27px] text-[#000] font-[500]">
          Screening test for Software developers and Engineers
        </h1>
      </div>
    </div>
  );
};

export default Homepage;