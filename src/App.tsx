import React, { useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const {user, setUser, isAuthenticated, setIsAuthenticated} = useContext(AuthContext);
  console.log(user)
  console.log(isAuthenticated)
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
