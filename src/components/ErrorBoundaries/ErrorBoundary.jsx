import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err, errinfo) {
    // console.log(err);
    // console.log(errinfo);
  }
  render() {
    if (this.state.hasError) {
      return <h1>something went wrong</h1>;
    } else {
      return this.props.children;
    }
  }
}
