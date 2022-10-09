import React from 'react'
import '../styles/App.css';
import { useState, useEffect } from 'react';

const[user,setUser] = useSteate();
const App = () => {
fatch("https://content.newtonschool.co/v1/pr/main/users")
 .then(responce=>{
 return responce.json()
})
 .then(data =>{
 setUser(data)
}
useEffect()=>{
 fatchData()
},[])
 



  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <input id="input" onChange={changeInput} />
      <p id="name">{name}</p>
    </div>
  );
}


export default App;
