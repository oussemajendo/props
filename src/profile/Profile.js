import React from 'react';
import { Card, Button } from 'react-bootstrap';


const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div style={{border: '1px solid black', padding: '10px'}}>
      <img src={children} alt={fullName} style={{width: '250px'}} />
      <h2 style={{color:'red'}}>{fullName}</h2>
      <h4>{profession}</h4>
      <p>{bio}</p>
      <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      <Button style={{ backgroundColor: 'red', color: 'white', fontWeight: 'bold' , padding:'10px'}} onClick={() => handleName(fullName)}>Click me!</Button>

    </div>
  );
};



export default Profile;
