import React, { useEffect } from 'react'
import axios from 'axios';

const Offers = () => {

//   async function  getapi ()
//   {
//     // GET request for remote image in node.js
// let d =await axios({
//   method: 'get',
//   url: 'http://localhost:4000/doctor/category',
//   // responseType: 'stream'
// })
// return d;
//   }

//   useEffect(() => {
//     getapi().then(
//       (res)=>{
//         console.log(res);
//       }
//     )
 
//   }, [])
  
  return (
    <div><table className="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
  </div>
  )
}

export default Offers