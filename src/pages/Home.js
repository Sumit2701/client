import {Card} from "../components/card/card"
export const Home=({state, setState})=> {
  return (
    <div  >
    {state?.map((value)=>{
      return(<Card value={value}/>)
    })}

      </div>
   
  );
}

