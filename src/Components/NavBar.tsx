import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import AuthService from "../Services/AuthService";


interface Props {
  
};

const NavBar: React.FC<Props> = (props) => {
  const {isAuthenticated, setIsAuthenticated, user, setUser} = useContext(AuthContext);


  const onClickLogout = () => {
    AuthService.logout()
    .then(data => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);
      }
    })
  }
  
  const unauthenticatedNavbar = () => {
    return (
      <>
        <Link to="/">
          <li className="nav-item nav-link">Home</li>
        </Link>
        <Link to="/login">
          <li className="nav-item nav-link">Login</li>
        </Link>
        <Link to="/register">
          <li className="nav-item nav-link">Register</li>
        </Link>                
      </>
    )
  }

  const authenticatedNavBar = () => {
    return (
      <>
        <Link to="/">
          <li className="nav-item nav-link">Home</li>
        </Link>
        <Link to="/todos">
          <li className="nav-item nav-link">Todos</li>
        </Link>
        { user.role === "admin" &&        
          <Link to="/register">
            <li className="nav-item nav-link">Register</li>
          </Link>   
        }
        <button type="button" className="btn btn-link nav-item nav-link" onClick={onClickLogout}>
          Logout
        </button>             
      </>
    )    
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <div className="navbar-brand">Krystian</div>
      </Link>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          {!isAuthenticated ? unauthenticatedNavbar() : authenticatedNavBar()}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
