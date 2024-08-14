import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {<table>
        <tr>
          <th>Name</th>
          <th>Mark</th>

        </tr>
        <tr>
          <td>Agash</td>
          <td>20</td>
        </tr>
      </table>}

     
    </>
  )
}

export default App

// import React, {Component} from "react";
// class Welcome extends Component{
//    render() {
//     return <h1>Hello !!!</h1>;
//   }
// }
// export default Welcome;