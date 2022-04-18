import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import CheckOut from './Pages/CheckOut/CheckOut';
import SignUp from './Pages/Login/SignUp/SignUp';
import RequireAuth from './RequireAuth/RequireAuth';
import NotFound from './Pages/NotFound/NotFound';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blog from './Pages/Blog/Blog';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
  return (
    <div className='App'>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/checkout" element={<RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
