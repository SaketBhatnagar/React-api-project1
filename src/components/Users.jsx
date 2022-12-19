import React, { Component } from "react";
import Card from "./Card";

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }
  static getDerivedStateFromProps() {
    console.log("hello");
  }
  shouldComponentUpdate() {
    return true;
  }
  componentDidMount() {
    let fetchData = async () => {
      await fetch("https://api.github.com/users")
        .then(response => {
          response
            .json()
            .then(res => {
              this.setState({ data: res });
              console.log(this.state.data);
              // console.log(...res);
            })
            .catch(error => console.log(error));
        })
        .catch(err => console.log(err));
    };
    fetchData();
  }
  componentDidUpdate() {
    console.log(this.state.data);
    console.log("update");
  }
  render() {
    console.log("render");
    return (
      <section className="card-Block">
        <article>
          {this.state.data.map(value => {
            return (
              <Card
                login={value.login}
                img={value.avatar_url}
                profile={value.html_url}
              ></Card>
            );
          })}
        </article>
      </section>
    );
  }
}
