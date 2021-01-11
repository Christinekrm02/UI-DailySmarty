import React, { Component } from "react";
import Logo from "../components/logo";
import SearchBar from "../components/searchbar";
import RecentPosts from "../components/recent-posts";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <Logo />
          <SearchBar />
          <RecentPosts />
        </div>
      </div>
    );
  }
}
