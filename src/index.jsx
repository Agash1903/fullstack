import React from "react";
import ReactDOM from 'react-dom';


// // React props

// // class Reactprops extends React.Component{
// //   render(){
// //     return(
// //       <div>
// //         <h1>Vanakkam {this.props.Mywebsite}</h1>
// //         </div>
// //     );
// //   }
// // }

// // ReactDOM.render(<Reactprops Mywebsite="Nanba !!"/>,document.getElementById("root"));

// // React Lists

// const Mywebsite = ["Home","Aboutus","Services","Products","ContactUs"];
// const websitemenu = Mywebsite.map((Mywebsite) =>{
//   return<h1>{Mywebsite}</h1>
// }
// );

// ReactDOM.render(<ul>{websitemenu}</ul>,document.getElementById("root"))


// class Reacteventhandling extends React.Component{
//   constructor(){
//     super();
//     this.state={content:"Welcome to my website"}
//   }
//   changetheValue = ()=>{
//     this.setState({content:"Full Stack Developer"});
//   }

//   render(){
//     return(
//       <div>
//         <h1>{this.state.content}</h1>
//         <button onClick={this.changetheValue}>Click Here</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Reacteventhandling />,document.getElementById("root"));