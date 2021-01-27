import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, {useState} from 'react';
import Nav from './components/Nav/Nav.jsx';
import './App.css';

function Home() {
  return <h1>Home Page</h1>
}

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Nav isLoggedIn={isLoggedIn}/>
    // <Router>
    //   <div>
    //     {/* <nav>
    //       <ul>
    //         <li>
    //           <Link to='/home'>Home</Link>
    //         </li>
    //       </ul>
    //     </nav> */}

    //     <Switch>
    //       <Route path='/home'>
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
