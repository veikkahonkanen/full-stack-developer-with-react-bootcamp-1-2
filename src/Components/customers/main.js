import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCustomers: [],
    }
  }

  render() {
    return (
      <main>
        <h2>Customers list</h2>
        {
          this.state.allCustomers.map((customer, index) => {
            return (
              <div key={index}>
                { customer.username }&nbsp;{ customer.password }
              </div>
            );
          })
        }
      </main>
    );
  }

  componentDidMount() {
    fetch("http://localhost:3030/customers")
    .then((data) => {
      return (data.json());
    })
    .then((users) => {
      this.setState({
        allCustomers: users
      });
      // console.log(users);
    });
    console.log(this.state.allCustomers);
  }
}

export default Main;