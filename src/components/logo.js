import React, { Component } from "react";
//import Logo from "../../static/assets/logos/crm.png";

export default class Logo extends Component {
  render() {
    const size = {
      height: this.props.size ? this.props.size : 105,
      width: this.props.size ? this.props.size : 105,
    };
    return (
      <div className="logo-main">
        <img
          style={size}
          src={"/assets/logos/crm.png"}
          height={200}
          width={200}
          alt="crm ui"
        />
      </div>
    );
  }
}
