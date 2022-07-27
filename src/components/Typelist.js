import React, { useEffect, useState } from "react";
import {getapi} from '../API/service';
const Typelist = () => {
  const [results, setresults] = useState();
//   console.log(results);


  useEffect(() => {
    getapi().then((res) => {
    //   console.log(res);
      setresults(res.data);
    });
  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          { results ? results.map((it)=>{
                return(
                    <tr>
                    <td>{it.type}</td>
                    <td>Doe</td>
                    <td><div><img src={`${it.img}`} alt="boohoo" className="img-responsive"/></div></td>
                  </tr>
                )
          }) : null}
  

        </tbody>
      </table>
    </div>
  );
};

export default Typelist;
