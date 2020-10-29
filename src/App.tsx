import React, { useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import Register from "./Components/Register";
import Todos from "./Components/Todos";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const {user, setUser, isAuthenticated, setIsAuthenticated} = useContext(AuthContext);
  console.log(user)
  console.log(isAuthenticated)
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/todos" component={Todos} />
    </BrowserRouter>
  );
}

export default App;
