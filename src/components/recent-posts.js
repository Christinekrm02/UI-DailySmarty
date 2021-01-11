import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="recent-posts">
        <div className="recent-posts__wrapper">
          <div className="recent-posts__heading">Recent Posts</div>
          <ul className="recent-posts__posts">
            <li>Post 0</li>
            <li>Post 1</li>
            <li>Post 2</li>
          </ul>
        </div>
      </div>
    );
  }
}
