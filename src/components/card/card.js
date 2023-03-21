import React from 'react'
import {Link, } from 'react-router-dom';
import axios from 'axios';

export const Card=({value})=> {


  const deleteData=(empId)=>{
    axios.put('http://localhost:3001/delete', {
      id: empId,
      }
      )
      window.location.reload(false);
   console.log("deleting"+empId)
  }

  
    
  const Button=()=>{
    if(value.Online)
    return(<>
      <button type="button" className="mx-2 btn btn-success btn-sm btn-floating"></button><span>Online</span></>
    )
    else return(
      <><button type="button" className="mx-2 btn btn-danger btn-sm btn-floating"></button>
     <span>Offline</span></>
    )
  }
  return (
        <div className="container bg-opacity-50 navbar-light bg-light py-1 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="card col col-xl-6" style={{borderRadius: '15px'}}>
                <div className="card-body p-4">
                  <h3 className="mb-3">{value.EmployeeName}</h3>
                  <p className="small mb-0">
                    <strong className='mx-2'>{value.Phone}</strong>{ value.Email}</p>
                  <hr className="my-4" />
                  <div className="d-flex justify-content-start align-items-center">
                  <button  className="mx-4 btn btn-sm btn-primary btn-block "><Link style={{textDecoration:"none",color:"white"}} to={`/EmployeeDetails/${value?._id}`}>Details</Link></button>
                  <button   className="btn btn-sm btn-primary btn-block "><Link style={{textDecoration:"none",color:"white"}} to={`/Update/${value?._id}`}>Update</Link></button>                    
                  <button  onClick={()=>{deleteData(value?._id)}} className="mx-4 btn-sm btn btn-primary btn-block ">Delete</button>                  
                   <Button />
                  </div>
                </div>
              </div>
          </div>
        </div>
  )
}
