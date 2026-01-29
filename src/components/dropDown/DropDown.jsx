import "./dropDown.css";
import React from "react";
export class DropDown extends React.Component {
  state = {
    showMenu: false,
  };

  render() {
    return (
      <div className="Dropdown">
        <h2>Випадашка</h2>
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={() => {
            this.setState((prev) => {
              return { showMenu: !prev.showMenu };
            });
          }}
        >
          Open
        </button>

        {this.state.showMenu && (
          <div className="Dropdown__menu">Випадаюче меню</div>
        )}
      </div>
    );
  }
}
