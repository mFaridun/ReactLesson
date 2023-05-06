// import { useState } from "react";
// import './Lesson02.css'

// const Lesson02 = (props) => {

//   const [count, setCount] = useState(1);
//   const [dark, setDark] = useState(false);

//   const handleCount = () => {
//     setCount(count + 1);
//   }

//   const on = () => {
//     setCount(count - 1);
//   }

//   const darkNot = () => {
//     setDark(!dark);
//     console.log(dark);
//   }

//   // { `${'dark' ? 'dark' : 'light'}` }
// return (
//     <div className= { `${dark ? 'dark' : 'light'}` }>
//       Lesson02

//       {
//         count
//       }
//       <button onClick={handleCount}>increase</button>
//       <button onClick={on}>decrease</button>
//       <button onClick={darkNot}>dark</button>
//     </div>
//   )
// }

// export default Lesson02;


import { Component } from "react";

class ExampleClass extends Component {
  constructor () {
    super ();
    this.state = {
      count: 0,
    }
    this.handleClick = this.addCount.bind(this);
  }

  addCount() {
    this.setState((prevState) => ({
      count: prevState.count-1
    }))
  }

  render() {
    return (
      <div>
        Example Class

          {this.state.count}
          <button onClick={this.handleClick}>Add me</button>
      </div>
    )
  }
}


export default ExampleClass;
