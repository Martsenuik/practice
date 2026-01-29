//* export class Counter extends React.Component {
//*   render() {
//* return ()}
//* }

import React from "react";
import { ChangeBtn } from "./ChangeBtn";
import { CounterContent } from "./CounterContent";

export class Counter extends React.Component {
  state = {
    value: this.props.InitialValue,
  };

  handleClickIncrement = (event) => {
    this.setState((prevententState) => {
      {
        return { value: (prevententState.value += 1) };
      }
    });
  };
  handleClickDecrement = (event) => {
    this.setState((prevententState) => {
      {
        return { value: (prevententState.value -= 1) };
      }
    });
  };

  render() {
    return (
      <div style={{ border: "5px solid blue" }}>
        <div style={{ width: "600px" }}>
          <div className="card-body">
            <h5 className="card-title text-center fs-1">Counter</h5>
            <CounterContent value={this.state.value} />
            <ChangeBtn
              onIncrement={this.handleClickIncrement}
              onDecrement={this.handleClickDecrement}
            />
          </div>
        </div>
      </div>
    );
  }
}
