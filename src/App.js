import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import AddCandidate from './addCandidate';
import Schedule from './schedule';

function App() {
  return (
    <div className="App">
      <Router basename='/'>
         <Routes>
          <Route exact path='/' element={<Dashboard/>}></Route>
          <Route path='/addCandidate' element={<AddCandidate/>}></Route>
          <Route path='/schedule' element={<Schedule/>}></Route>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
