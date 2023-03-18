
import './App.css';
import Profile from './profile/Profile';
import profileImage from './profileImage.jpg';
import { Card ,} from 'react-bootstrap';
function App() {
  const handleName = (name) => {
    alert(`Profile user name is ${name}`);
  };

  return (
    <div className="App"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: '20rem' ,border :'3px solid black' }}>
      <Card.Body>
      <Profile fullName="Oussama Jendoubi" bio="Software Engineer" profession="Web Development" handleName={handleName}>
      {profileImage}
      </Profile>   
      </Card.Body>
    </Card>
    </div>
    
  );

}

export default App;
