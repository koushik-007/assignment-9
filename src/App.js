import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import UserVarification from './Components/UserVarification/UserVarification';
import Places from './Components/Places/Places';
import HotelBook from './Components/HotelBook/HotelBook';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const userContext = createContext();

function App() {
  const [logedInUser,setLogedInUser] = useState({});
  return (
    <userContext.Provider value={[logedInUser,setLogedInUser]}>
    
        <Router>
        
            <Switch>
              <Route exact path="/">
                <Places></Places>
              </Route>
              <Route path="/UserVarification">
                  <UserVarification></UserVarification>
              </Route>
              <PrivateRoute path="/hotelBooking">
                <HotelBook></HotelBook>
              </PrivateRoute>
              <Route path="*">
                <NoMatch />
              </Route>
          </Switch>
      </Router>
    </userContext.Provider>
  );
      
}

export default App;
