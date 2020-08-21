import React, { Component } from "react";

class FooterComponent extends Component {
  render() {
    return (
      <div className="text-center">
          {this.props.children}
      </div>
    );
  }
}

export default FooterComponent;
