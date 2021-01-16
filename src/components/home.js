import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./searchbar";
import RecentPosts from "./recent-posts";

export default class App extends Component {
  handleSearchBarSubmit(query) {
    this.props.history.push("/results");
    console.log("handleFromSubmit", query);
  }
  render() {
    return (
      <div className="app">
        <div>
          <Logo />
          <SearchBar onSubmit={query => this.handleSearchBarSubmit(query)} />
          <RecentPosts />
        </div>
      </div>
    );
  }
}
