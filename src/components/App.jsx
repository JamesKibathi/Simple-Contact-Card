import React from "react";
import Mycard from "./Card";
import contacts from "../contacts.js"

function App() {
  return (
    <div>
    <h1 className="heading">My Contacts</h1>
      <Mycard 
       name={contacts[0].name}
       img={contacts[0].imgURL}
       phone={contacts[0].phone}
       email={contacts[0].email}
      />
      <Mycard 
       name={contacts[1].name}
       img={contacts[1].imgURL}
       phone={contacts[1].phone}
       email={contacts[1].email}
      />
      <Mycard 
       name={contacts[2].name}
       img={contacts[2].imgURL}
       phone={contacts[2].phone}
       email={contacts[2].email}
      />
    </div>
  );
}

export default App;
