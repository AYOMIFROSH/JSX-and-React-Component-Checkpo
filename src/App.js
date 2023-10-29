import React from "react";
import Switch from "./switch";
import "./App.css";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from "./component/name";
import Price from "./component/price";
import Description from "./component/description";
import PPhoto from "./component/image";
import Photo from "./asset/DanoLogo.jpg"

{/* declaring my first name */}
const firstName = "Olumade"

function App() {
  return (
    <div className="App">
      <Switch />
    {/* creating a card */}
      <Card style={{ width: '65rem', justifyContent: 'center', margin: 200, padding: 10}}>
        <PPhoto variant="top" />
        <Card.Body>
          <Name as={Card.Title} />
          <Price as={Card.Text} />
          <Description as={Card.Text} />
        </Card.Body>
      </Card>

      {/* display of message */}
      <p><b>Hello, {firstName ? firstName : 'there'}!</b></p>

      {/* displaying an image if the firstName is provided  */}
      {firstName && <img className="Photo" src={Photo} alt="profile"/>}
    </div>
  );
}

export default App;
