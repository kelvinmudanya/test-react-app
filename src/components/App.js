import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import MystyledComponent from "./MyStyledComponent";


function App(){
  return(
    <React.Fragment>
      <Header/>
      <TicketControl/>
      {/* <MystyledComponent/> */}
    </React.Fragment>

  );
}
export default App;





// This was original code before introducing jsx
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
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
