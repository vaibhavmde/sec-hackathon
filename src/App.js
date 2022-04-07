import {Routes,Route} from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { Forgot } from './Pages/Forgot';
import { Reset } from './Pages/Reset';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/forgot' element={<Forgot/>} />
        <Route path='/reset' element={<Reset/>} />
      </Routes>
    </div>
  );
}

export default App;
