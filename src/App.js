import logo from './logo.svg';
import './App.css';
import B from './components/B';
import C from './components/C';
import { Route, Routes } from 'react-router-dom';
import A from './components/A';
import D from './components/D';

function App() {
  return (
    <div className="App">
    <C/>
    <Routes>
      <Route path='/' element={<A/>}/>
      <Route path='/s' element={<B/>}/>
      <Route path='/t' element={<D/>}/>
    </Routes>
  
    </div>
  );
}

export default App;
