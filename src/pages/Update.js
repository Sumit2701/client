import { useGeolocated } from "react-geolocated";
import { useState,useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


export const Update=()=> {

const navigate = useNavigate();



const { coords } =useGeolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
});



let {empId } = useParams();

const [value, setValue] =useState();



const submitData=async()=> {
 axios.put('http://localhost:3001/update', {
id: empId,
empData: state,
}
)
navigate('/')
window.location.reload(false);
}




const [state, setState] = useState(
  {
    Email: '',
  EmployeeName:'',
  Phone:'',
  Address:'',
  Age:'',
  Dept:'',
  Latitude:'',
  Longitude:'',
  Online:true,
  }
);

useEffect(() => {
  (async () => {
    const res = await axios.post('http://localhost:3001/get/',{id:empId})
    setValue(res?.data.data);
    
  })();
}, []);
console.log(value)



function handleInputChange(e) {
  setState({
    ...state,
    [e.target.name]: e.target.value
  })
}









 return (

    <div className="container w-50 p-3">
      <h1>Update Employee Data</h1>
      <form>
        {/*Name */}
        <div className="form-outline mb-4">
          <input type="text" name="EmployeeName" id="form6Example3" defaultValue={value?.EmployeeName} onChange={(event)=>handleInputChange(event)} className="form-control" required={true} />
          <label className="form-label" htmlFor="form6Example3">Name</label>
        </div>
         {/* Number input */}
         <div className="form-outline mb-4">
          <input type="tel" id="form6Example6"  defaultValue={value?.Phone}  name="Phone" onChange={(event)=>handleInputChange(event)} required={true} className="form-control" />
          <label className="form-label" htmlFor="form6Example6">Phone</label>
        </div>
         {/* Email input */}
         <div className="form-outline mb-4">
          <input type="email" id="form6Example5"  defaultValue={value?.Email} name="Email" onChange={(event)=>handleInputChange(event)} required={true} className="form-control" />
          <label className="form-label" htmlFor="form6Example5">Email</label>
        </div>
        {/*Address*/}
        <div className="form-outline mb-4">
          <input type="text" id="form6Example3"  defaultValue={value?.Address} name="Address" onChange={(event)=>handleInputChange(event)} required={true} className="form-control" />
          <label className="form-label" htmlFor="form6Example3">Address</label>
        </div>
        {/* Department*/}
        <div className="form-outline mb-4">
          <input type="text" id="form6Example3"  defaultValue={value?.Dept}name="Dept" onChange={(event)=>handleInputChange(event)}className="form-control" />
          <label className="form-label" htmlFor="form6Example3">Department</label>
        </div>
        {/* Age */}
        <div className="form-outline mb-4">
          <input type="text" id="form6Example4"  defaultValue={value?.Age} name="Age" onChange={(event)=>handleInputChange(event)} className="form-control" required={true}/>
          <label className="form-label" htmlFor="form6Example4">Age</label>
        </div>
      
        {/* Submit button */}
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input type="text" id="form6Example1"  name="Latitude"  value={coords?.latitude} className="form-control" disabled={true}/>
              <label className="form-label" htmlFor="form6Example1">latitude</label>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input type="text" id="form6Example2" name="Longitude" value={coords?.longitude}   className="form-control" disabled={true} />
              <label className="form-label" htmlFor="form6Example2">longitude</label>
            </div>
          </div>
        </div>
        <div className="form-check d-flex justify-content-center mb-4">
          <input className="form-check-input me-2" name="Online"  onChange={(e)=>{setState({...state,[e.target.name]: e.target.checked}); console.log(e.target.checked)}} type="checkbox"  id="form6Example8" defaultChecked />
          <label className="form-check-label" htmlFor="form6Example8"> Is employee Online? </label>
        </div>
          <button type="submit" onClick={submitData} className="btn btn-primary btn-block mb-4">Submit</button>

         </form>
    </div>
  );
}






// PHONE_REGEX.test(state?.Phone) && EMAIL_REGEX.test(state?.Email)