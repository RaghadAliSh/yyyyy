import './App.css';
 import SignUpFunc from './pages/signupfile/SignUp';
import './App.css';
import Login from './pages/loginfile/Login';
import LoginFunc from './pages/loginfile/Login'
import AddProduct from './pages/Admin/Product/AddProduct/AddProduct';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
import DashBoard from './pages/Admin/DashBoard/DashBoard';
import React from "react";
import ProductDetails from './pages/Admin/Product/ProductDetails/ProductDetails';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  
      <>
          <Routes>
            <Route path= "/signup" element={<><SignUpFunc/></>}/>
            <Route path="/Orders" element={<></>} />  
            <Route path="/DashBoard" element={<><DashBoard/></>} /> 
            <Route path="/AddProduct" element={<><AddProduct/></>} />  
            <Route path="/prouductDeatiels" element={<><ProductDetails/></>} />  
            <Route path= "/login" element={<><Login/></>}/>
            {/* <Route path="/AdminData" element={<><Get-AdminData/></>}/> */}
          
          </Routes>
          </>
   
  );
}

export default App;
