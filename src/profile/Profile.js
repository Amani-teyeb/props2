import React from 'react';
import PropTypes from 'prop-types'; 

function Profile(props) {
    return (
        <div style ={{width: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '400px'}}>
           {props.children}
           <h1 > <span style ={{color : 'grey', textAlign : 'center'}}> FullName : </span>{props.fullName} </h1> 
           <h3> <span style ={{color : 'grey', textAlign : 'center'}}>Bio :</span> {props.bio} </h3>
           <h3> <span style ={{color : 'grey', textAlign : 'center'}}>Profession :</span> {props.profession} </h3>
           <button onClick={() => props.handleAlert(props.fullName)}>click</button>
    </div>    
    
    )}

Profile.defaultProps = {
    FullName: "default FullName",
    };
Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession :  PropTypes.string,
    handleAlert: PropTypes.func,
      };
      

export default Profile
//
