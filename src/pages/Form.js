import { useGeolocated } from "react-geolocated";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const Form=()=> {

  const navigate = useNavigate();


  const { coords } =useGeolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
});

const [state, setState] = useState({
  Email: '',
  EmployeeName:'',
  Phone:'',
  Address:'',
  Age:'',
  Dept:'',
  Latitude:'',
  Longitude:'',
  Online:true,

})

const submitData=async()=> {
 axios.post('http://localhost:3001/insert', {...state,
 Latitude:coords?.latitude,
 Longitude:coords?.longitude
})
navigate('/')
window.location.reload(false);

}


function handleInputChange(e) {
  setState({
    ...state,
    [e.target.name]: e.target.value
  })
     
 
  
}

function SubmitButton(){
  const PHONE_REGEX = new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$");
  const EMAIL_REGEX = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");

  if (PHONE_REGEX.test(state.Phone) && EMAIL_REGEX.test(state.Email)){
    return  <button type="submit" onClick={submitData} className="btn btn-primary btn-block mb-4">Submit</button>

  } else {
    return  <button type="submit" disabled className="btn btn-primary btn-block mb-4">Submit</button>
  };
};

 return (

    <div className="container w-50 p-3">
      <h1>Employee Data</h1>
      <form>
        {/*Name */}
        <div className="form-outline mb-4">
          <input type="text" name="EmployeeName"  id="form6Example3" onChange={(event)=>handleInputChange(event)} className="form-control" required={true} />
          <label className="form-label" htmlFor="form6Example3">Name</label>
        </div>
         {/* Number input */}
         <div className="form-outline mb-4">
          <input type="tel" id="form6Example6"  name="Phone" onChange={(event)=>handleInputChange(event)} required={true} className="form-control" />
          <label className="form-label" htmlFor="form6Example6">Phone</label>
        </div>
         {/* Email input */}
         <div className="form-outline mb-4">
          <input type="email" id="form6Example5" name="Email" onChange={(event)=>handleInputChange(event)} required={true} className="form-control" />
          <label className="form-label" htmlFor="form6Example5">Email</label>
        </div>
        {/*Address*/}
        <div className="form-outline mb-4">
          <input type="text" id="form6Example3" name="Address" onChange={(event)=>handleInputChange(event)} required={true} className="form-control" />
          <label className="form-label" htmlFor="form6Example3">Address</label>
        </div>
        {/* Department*/}
        <div className="form-outline mb-4">
          <input type="text" id="form6Example3" name="Dept" onChange={(event)=>handleInputChange(event)}className="form-control" />
          <label className="form-label" htmlFor="form6Example3">Department</label>
        </div>
        {/* Age */}
        <div className="form-outline mb-4">
          <input type="text" id="form6Example4" name="Age" onChange={(event)=>handleInputChange(event)} className="form-control" required={true}/>
          <label className="form-label" htmlFor="form6Example4">Age</label>
        </div>
      
        {/* Submit button */}
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input type="text" id="form6Example1" name="Latitude"  placeholder={coords?.latitude} className="form-control" disabled={true}/>
              <label className="form-label" htmlFor="form6Example1">latitude</label>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input type="text" id="form6Example2" name="Longitude"  placeholder={coords?.longitude} className="form-control" disabled={true} />
              <label className="form-label" htmlFor="form6Example2">longitude</label>
            </div>
          </div>
        </div>
        <div className="form-check d-flex justify-content-center mb-4">
          <input className="form-check-input me-2" name="Online" onChange={(e)=>{setState({...state,[e.target.name]: e.target.checked}); console.log(e.target.checked)}} type="checkbox" defaultValue id="form6Example8" defaultChecked />
          <label className="form-check-label" htmlFor="form6Example8"> Is employee Online? </label>
        </div>
        <SubmitButton/>
         </form>
    </div>
  );
}
