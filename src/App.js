import React,{useState} from "react";
import Login from "./components/Login";
import Home from "./components/Home";

import {useSelector,useDispatch} from "react-redux";
import {Increment,Decrement } from "./reduxs/actions/index";

const App = () => {
  const mystate = useSelector( (state) => state.changeTheNumber);
  const dispatch = useDispatch();
  // const [first, setfirst] = useState(0)
return(
  <>
  {/* <Login/> */}

  <div style={{flex: 1,flexDirection:"row"}}>
  <button onClick={()=> dispatch(Increment())  } className="btn btn-primary" type="submit">Increment + </button>
     <div>{mystate}</div>
   <button onClick={()=> dispatch(Decrement()) } className="btn btn-primary" type="submit">Decrement - </button>
        
  </div>
  </>
)
};

export default App;
