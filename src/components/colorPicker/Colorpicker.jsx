import React from "react";

export class ColorPicker extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text">Color Picker</h1>
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
