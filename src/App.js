import { Routes, Route } from 'react-router-dom';
import Homepage from './tasks/Homepage';
import Hashard from './tasks/task 3/hashard';
import NumberClassification from "./tasks/task 2/number_classification";
import DiluteReplacement from "./tasks/task 5/diluteReplacement";
import FirstTask from './tasks/FirstTask';
import FourthTask from './tasks/FourthTask';
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="px-6 mt-[4%]">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/task1" element={<FirstTask />} />
          <Route path="/task2" element={<NumberClassification />} />
          <Route path="/task3" element={<Hashard />} />
          <Route path="/task4" element={<FourthTask />} />
          <Route path="/task5" element={<DiluteReplacement />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
