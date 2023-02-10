import './App.css';
import Board from './Board';
import Write from './Write';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Board/>} />
      <Route path='/write' element={<Write/>}/>
    </Routes>
  );
}

export default App;
