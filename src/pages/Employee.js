import { useParams } from "react-router-dom";
import {useEffect,useState} from 'react'
import axios, * as others from 'axios';
import React from 'react'

export const Employee=()=> {

 let {empId } = useParams();

 const [value, setvalue] = useState();
  useEffect(() => {
    (async () => {
      const res = await axios.post('http://localhost:3001/get/',{id:empId})
      setvalue(res?.data.data);
    })();
  }, []);

  const mapUrl=`https://maps.google.com/maps?q=${value?.Latitude}%2C${value?.Longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`
  return (
    <div className="container">
    <card className="card">
      <iframe className="card-img-top" title="Map"src={mapUrl} frameBorder={0} style={{border: 0}} allowFullScreen>
      </iframe>
      <div className="card-body">
        <table>
          <tbody><tr>
              <td>
              <h1>
                {value?.EmployeeName}
              </h1>
              </td>
            </tr>
            
            <tr>
              <td><h5>Email: <strong> {value?.Email}</strong></h5></td>
              <td><h5> </h5></td>
              
              <td><h5>Mobile:  <strong>{value?.Phone}</strong></h5></td>
            </tr>
            <tr>
              <td><span> Address:  <strong>{value?.Address}</strong></span></td>
              <td><h5></h5> </td>
              <td><h5> </h5></td>
              <td><span> Department: <strong>{value?.Dept}</strong>
              </span>
              </td>
            </tr>
            <tr>
              <td><span>Age  <strong>{value?.Age}</strong></span></td>
              <td><h5></h5></td>
              <td><h5></h5></td>              
              <td><span> Online
              <strong>{value?.Online ? " : True" : ": False"}</strong>
              </span>
              </td>
            </tr>
          </tbody></table>
      </div>
    </card>
  </div>
  )
}
