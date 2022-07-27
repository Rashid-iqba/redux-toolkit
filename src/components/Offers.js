import React, { useEffect } from 'react'
import axios from 'axios';

const Offers = () => {

  function getapi()
  {
    // GET request for remote image in node.js
axios({
  method: 'get',
  url: 'http://localhost:4000/doctor/category',
  // responseType: 'stream'
})
  .then(function (res) {
    console.log(res);
   
  });
  }

  useEffect(() => {
    getapi()
 
  }, [])
  
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