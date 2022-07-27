import React, { useEffect,useState } from 'react'
import axios from 'axios';

const Offers = () => {
  const [results, setresults] = useState();

    console.log(results);

  async function  getapi ()
  {
    // GET request for remote image in node.js
   let d = await axios('http://localhost:4000/doctor/category');
      return d.data;
  }

  useEffect(() => {
    getapi().then(
      (res)=>{
        setresults(res.data);
     
      }
    )
 
  }, [])
  
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
}

export default Offers