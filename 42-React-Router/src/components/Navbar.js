import React from "react";
import Paths from "../helpers/Paths"
import { Link } from "react-router-dom"

const Navbar = () => (
    <div className="ui inverted teal menu">
      <Link to={Paths.root} className="item">
        <h2 className="ui header">
          <i className="paint brush icon" />
          <div className="content">Paintr</div>
          <div className="sub header">All of the paintings.</div>
        </h2>
      </Link>
    </div>
)

export default Navbar;
