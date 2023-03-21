import {Link} from 'react-router-dom'
export const Navbar=()=>{
   
    return(
       
        <nav className="navbar navbar-light bg-light justify-content-between container  w-70 p-3 bg-opacity-30">
          
       
      <Link   to="./" className="navbar-brand" href="#">Home</Link> 
      <h3>Settyl Assignment</h3>
        <Link  className='d-flex ms-auto ' style={{textDecoration:"none",color:'black'}} to="/AddEmployee"  >  <button className="btn btn-success my-2 my-sm-0" type="submit">
          Add New Employee

          </button></Link>
       
      </nav>


    )
}