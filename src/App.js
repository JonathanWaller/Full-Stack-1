import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    axios.get("/api/items").then(response => {
      // console.log(response);
      this.setState({
        items: response.data
      });
    });
  }

  render() {
    return (
      <div className="appmain">
        <Header />
        <div className="appbelowhead">
          <Dashboard
            items={this.state.items}
            getItems={this.componentDidMount}
          />
          <Form getItems={this.componentDidMount} />
        </div>
      </div>
    );
  }
}

export default App;
