import "./App.css";
import React, { useState, } from "react";

function App() {
  const [nameArray, setNameArry] = useState([]);
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  const getNameObj = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setNameArry(data);
  };

getNameObj();

  return( 
  <>
    {nameArray.map((user) => (
      <p>{user.name + " " + user.email + " " + user.phone}</p>
    ))

    }
  </>
);}

export default App;
