import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";


function App(){
  return(
    <React.Fragment>
      <Header/>
      <TicketControl/>
    </React.Fragment>

  );
}
export default App;




// 
//This was original code before introducing jsx
//import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
