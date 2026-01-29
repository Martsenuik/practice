import React from "react";

export class Form extends React.Component {
  state = {
    name: "",
    mail: "",
    message: "",
    expirence: "junior",
    agree: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      message: `Користувач ${this.state.name} зареєструвався під поштою ${this.state.mail}`,
    });
  };
  handleChekChange = () => {
    this.setState((prevState) => ({ agree: !prevState.agree }));
  };

  render() {
    return (
      <div style={{ border: "5px solid red" }}>
        <form onSubmit={this.handleSubmit}>
          <h2>Форма</h2>
          <label>
            Name
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              value={this.state.name}
            />
          </label>
          <label>
            Email
            <input
              onChange={this.handleChange}
              type="email"
              name="mail"
              value={this.state.mail}
            />
          </label>
          <button type="submit" name="button">
            Click
          </button>
        </form>
        <p>{this.state.message}</p>
        <b>Професфйний рівень</b>
        <label>
          junior
          <input
            onChange={this.handleChange}
            type="radio"
            name="expirence"
            value="junior"
            checked={this.state.expirence === "junior"}
          />
        </label>

        <label>
          middle
          <input
            onChange={this.handleChange}
            type="radio"
            name="expirence"
            value="middle"
            checked={this.state.expirence === "middle"}
          />
        </label>
        <label>
          senior
          <input
            onChange={this.handleChange}
            type="radio"
            name="expirence"
            value="senior"
            checked={this.state.expirence === "senior"}
          />
        </label>
        <label>
          <input
            onChange={this.handleChekChange}
            type="checkbox"
            name="agree"
          />
          Погоджуюсь з умовами
        </label>
      </div>
    );
  }
}
