import React, { Component } from "react";

class Card extends Component {
  state = {
    order: 4,
    name: "Aka",
  };

  hanleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.hanleCounterChange(this.state.order);
      }
    );
  };

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.hanleCounterChange(this.state.order);
        }
      );
    }
  };

  render() {
    return (
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="btn-group">
          <button onClick={this.handleMinus} className="btn btn-dark">
            -
          </button>
          <input
            type="text"
            value={this.state.order}
            className="btn btn-outline-dark"
          />
          <button onClick={this.handlePlus} className="btn btn-dark">
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
