import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
// import Reactstate from './content.jsx'


// class Reactstate extends React.Component{
//   constructor(){
//     super();
//     this.state = {obj1:"welcome to page", obj2:"hello Agash"};
//   }
//   changevalue=()=>{
//     this.setState({obj1:'This is my webasite'})
//   }
//   render(){
//     return <div>
//       <h2>{this.state.obj1},{this.state.obj2}</h2>
//       <button type='button' onClick={this.changevalue}>Click Here</button>
//     </div>
//   }
// }
// ReactDOM.render(<Reactstate/>,document.getElementById("root"));

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
 
//     <App />
  

//   </React.StrictMode>,
// )



// // React props

// class Reactprops extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>Vanakkam {this.props.object}</h1>
//         </div>
//     );
//    }
//  }

//  ReactDOM.render(<Reactprops object="Nanba !!"/>,document.getElementById("root"));

// // React Lists

// const Mywebsite = ["Home","Aboutus","Services","Products","ContactUs"];
// const websitemenu = Mywebsite.map((Mywebsite) =>{
//   return<h1>{Mywebsite}</h1>
// }
// );

// ReactDOM.render(<ul>{websitemenu}</ul>,document.getElementById("root"))


class Reacteventhandling extends React.Component{
  constructor(){
    super();
    this.state={content:"Welcome to my website"}
  }
  changetheValue = ()=>{
    this.setState({content:"Full Stack Developer"});
  }

  render(){
    return(
      <div>
        <h1>{this.state.content}</h1>
        <button onClick={this.changetheValue}>Click Here</button>
      </div>
    )
  }
}

ReactDOM.render(<Reacteventhandling />,document.getElementById("root"));