import {NavLink} from "react-router-dom";
import React from "react";

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Home
    </NavLink>
    <NavLink
      to="/candidates"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Candidates
    </NavLink>
    <NavLink
      to="/vacancies"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Vacancies
    </NavLink>
      <NavLink
          to="/interviews"
          exact
          className="nav-link"
          activeClassName="router-link-exact-active"
      >
          Interviews
      </NavLink>
<NavLink
    to="/profile"
    exact
    className="nav-link"
    activeClassName="router-link-exact-active"
    >
    Profile
</NavLink>
      <NavLink
          to="/ai-analysis"
          exact
          className="nav-link"
          activeClassName="router-link-exact-active"
      >
          AI records
      </NavLink>
  </div>
);

export default MainNav;
