import React, { Component, Fragment } from "react";
import Card from "./Card";

class Produk extends Component {
  state = {
    order: 4,
    name: "Aka",
  };

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="card">
          <div className="card-header">{this.state.order}</div>
          <Card onCounterChange={(value) => this.handleCounterChange(value)} />
        </div>
      </Fragment>
    );
  }
}

export default Produk;
