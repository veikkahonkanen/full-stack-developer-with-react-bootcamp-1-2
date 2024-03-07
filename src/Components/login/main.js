import React, { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom";

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
    fetch(`http://localhost:3030/customers?username=${encodeURIComponent(this.state.username)}`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      /* body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }) */
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const match = data[0];
      // console.log("Found in db", match);
      if (match.password === this.state.password) {
        // passwords match!
        localStorage.setItem("validUser", this.state.username);
        this.props.history.push("/");
      } else {
        console.warn("Invalid login");
      }
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
        <h2>Login to participate</h2>
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

export default withRouter(Main);