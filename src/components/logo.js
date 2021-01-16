import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Logo from "../../static/assets/logos/crm.png";

export default class Logo extends Component {
  render() {
    const size = {
      height: this.props.size ? this.props.size : 105,
      width: this.props.size ? this.props.size : 105,
    };
    return (
      <div className="logo-main">
        <Link to="/">
          {" "}
          <img
            style={size}
            src={"/assets/logos/crm.png"}
            height={200}
            width={200}
            alt="crm ui"
          />
        </Link>
      </div>
    );
  }
}
