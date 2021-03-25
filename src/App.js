
import React from 'react';
import Profile from './profile/Profile';
import profilepic from './images/profilepic.jpg'


function App() {
  const handleAlert = (fullName) => {
    alert(`my name is ${fullName}`);
  };

  return (
    <div className="App">
      <Profile fullName = "Teyeb Amani"
       bio = " born in 1994 in bengerden, a beginner webdevelopper as a student of GoMyCode society as well as an petroleum engineer as a student of the FST" 
       profession = "begginer web developer"
        handleAlert={handleAlert}> 
        <img src={profilepic} alt = "img" /> 
        </Profile>
      
    </div>
  );
}

export default App;
//
