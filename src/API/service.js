
  
 const getapi = async() => {
    // GET request for remote image in node.js
    let d = await fetch("http://localhost:4000/doctor/category", {
      method: "GET",
    });
    let fd = await d.json();
    return fd;
  }

  export{getapi}