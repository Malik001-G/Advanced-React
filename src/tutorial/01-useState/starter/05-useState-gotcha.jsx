import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      console.log("click the button");
      setValue((currentState) => {
        return currentState + 1
      });
    }, 3000);
  };
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={handleClick} type="button" className="btn">
        increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
