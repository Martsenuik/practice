import React from "react";

export class ColorPicker extends React.Component {
  render() {
    return (
      <div style={{ border: "5px solid red" }}>
        <h2 className="text">Color Picker</h2>
        <ul>
          {this.props.options.map(({ label, color }) => {
            return (
              <li key={label}>
                <button style={{ background: color }}>{label}</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
