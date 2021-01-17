import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./searchbar";
import RecentPosts from "./recent-posts";

import { connect } from "react-redux";
import * as actions from "../actions/";

class Home extends Component {
  handleSearchBarSubmit(query) {
    this.props.fetchPostsViaQuery(query, () => {
      this.props.history.push("/results");
    });
  }
  render() {
    return (
      <div className="home">
        <Logo />
        <SearchBar
          page="home"
          onSubmit={query => this.handleSearchBarSubmit(query)}
        />
        <RecentPosts />
      </div>
    );
  }
}

export default connect(null, actions)(Home);
