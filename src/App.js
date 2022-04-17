import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import CheckOut from './Pages/CheckOut/CheckOut';

function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
        </Routes>
    </div>
  );
}

export default App;
