import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({ // person here is an object
    name: 'Peter',
    age: 24,
    hobby: 'read books'
  })

  const displayPerson = () => {
  //  setPerson({name: 'john', age:20, hobby: 'scream at the laptop'})
 setPerson({...person, name: 'John'})
  };
  return (
    <>
      <h3>{person.name}</h3> 
      <h3>{person.age}</h3>
      <h3>Enjoys to : {person.hobby}</h3>
      <button className="btn" onClick={displayPerson}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
