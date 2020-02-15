import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import Api from './Api'

// class App extends Component {
//     render(){
//         return (
//             <div className="App">
//                 <h1>TAE HEE</h1>
//             </div>
//         )
//     }
// }

//ReactDOM.render(<App/>, document.getElementById('root')) // render <App> where root
ReactDOM.render(<Api/>, document.getElementById('root'))