import { Card, Icon, NonIdealState } from "@blueprintjs/core";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header"


class App extends Component {

  render() {

    return (
      <div className="App">
        <Header/>

      </div>
    );
  }
}

export default App;