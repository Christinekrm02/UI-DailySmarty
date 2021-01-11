import React, { Component } from "react";
//import Logo from "../../static/assets/logos/crm.png";

export default class Logo extends Component {
  render() {
    return (
      <div className="logo-main">
        <img
          src={"/assets/logos/crm.png"}
          height={200}
          width={200}
          alt="crm ui"
        />
      </div>
    );
  }
}
