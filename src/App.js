import React from "react";


import {useSelector,useDispatch} from "react-redux";
import {increment, decrement, incrementByAmount} from "./reduxs/features/updownSlice"

const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  // console.log(dispatch(incrementByAmount));
return(
  <>
  {/* <Login/> */}

  <div style={{flex: 1,flexDirection:"row"}}>
  <button onClick={() => dispatch(increment())} className="btn btn-primary" type="submit">Increment + </button>
     <div>{count}</div>
   <button  onClick={() => dispatch(decrement())} className="btn btn-primary" type="submit">Decrement - </button>
   <br />
   <button onClick={() => dispatch(incrementByAmount())} className="btn btn-primary" type="submit">Increment = </button>
        
  </div>
  </>
)
};

export default App;
