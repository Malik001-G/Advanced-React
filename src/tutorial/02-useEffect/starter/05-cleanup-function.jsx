import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>toggle component</button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
//     console.log('Hmmm, this is interesting');
//     const intId = setInterval(() => {
//       console.log("Hello from interval");
//     }, 1000);
//     return () => {
// clearInterval(intId)
    // } // a clean up function

    //another example using event listener
    const someFunc = () => {

    }
    window.addEventListener('scroll', someFunc);
    return () => window.removeEventListener('scroll', someFunc)
  }, [])
return <h1>Hello there</h1>
}
export default CleanupFunction;
