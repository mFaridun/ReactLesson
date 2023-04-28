import { useState } from "react";
import './Lesson02.css'

const Lesson02 = (props) => {

  const [count, setCount] = useState(1);
  const [dark, setDark] = useState(false);

  const handleCount = () => {
    setCount(count + 1);
  }

  const on = () => {
    setCount(count - 1);
  }

  const darkNot = () => {
    setDark(!dark);
    console.log(dark);
  }

  // { `${'dark' ? 'dark' : 'light'}` }
return (
    <div className= { `${dark ? 'dark' : 'light'}` }>
      Lesson02

      {
        count
      }
      <button onClick={handleCount}>increase</button>
      <button onClick={on}>decrease</button>
      <button onClick={darkNot}>dark</button>
    </div>
  )
}

export default Lesson02;
