import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import {Home} from'./pages/Home.js'
import { Form } from './pages/Form.js';
import { Navbar } from './components/navbar/navbar';
import { Employee } from './pages/Employee'; 
import { useState,useEffect } from 'react';
import axios from "axios";
import {Update} from "./pages/Update"

function App() {
  
  const [state,setState]=useState();

  useEffect(() => {
    (async () => {
      const res = await axios.get('http://localhost:3001/read')
      setState(res?.data.data);

    })();
  }, []);


  return (
    <div className="App ">
   <Router>
    <Navbar/>
    <Routes>
    <Route path="/EmployeeDetails/:empId" element={<Employee />} />
    <Route path="/Update/:empId" element={<Update />} />   
    <Route path="/" element={<Home state={state} />} />
    <Route path="/AddEmployee" element={<Form/>} />
    </Routes>
   </Router>
     
    </div>
  );
}

export default App;
 