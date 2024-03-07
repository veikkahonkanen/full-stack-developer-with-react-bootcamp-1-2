import React, { Component } from "react";

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3030/customers", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then((feedback) => {
      console.log("Post successful", feedback);
    })
    .catch((error) => {
      console.error("Error occurred", error);
    });
  }

  handleFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <main>
        <h2>Register for the competition</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Username:
              <input type="text" name="username" onChange={this.handleFieldChange} />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input type="text" name="password" onChange={this.handleFieldChange} />
            </label>
          </div>
          <div>
            <input type="submit" name="submit" />
          </div>
        </form>
      </main>
    );
  }
}

export default Main;