import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const style = {
    list: "px-4 "
  }
  return (
    <div className="bg-[#2097A7] top-0 fixed w-full px-4 py-2 flex justify-center gap-2 items-center">
      <ul className="flex items-center gap-[6px] flex-wrap">
        <Link to="/task1" className={style.list}><li>Task 1</li></Link>
        <Link to="/task2" className={style.list}><li>Task 2</li></Link>
        <Link to="/task3" className={style.list}><li>Task 3</li></Link>
        <Link to="/task4" className={style.list}><li>Task 4</li></Link>
        <Link to="/task5" className={style.list}><li>Task 5</li></Link>
      </ul>
    </div>
  );
};

export default Navbar;