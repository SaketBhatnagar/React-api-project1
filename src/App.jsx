import React, { Component } from "react";
import ErrorBoundary from "./components/ErrorBoundaries/ErrorBoundary";
import Users from "./components/Users";

export default class App extends Component {
  render() {
    return <Users></Users>;
  }
}
