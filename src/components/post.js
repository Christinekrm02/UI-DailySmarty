import React, { Component } from "react";
import AnimateHeight from "react-animate-height";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
    };
  }
  renderTopics() {
    let topics = this.props.associated_topics.map((topic, index) => {
      return (
        <span className="post-topic" key={index}>
          {topic}
        </span>
      );
    });
    return topics;
  }

  renderLinks() {
    let links = this.props.post_links.map((post_link, index) => {
      return (
        <div className="post-link" key={index}>
          <div className="post-link-box"></div>
          <div className="post-link-link">
            <a href={post_link.link_url}>Useful Link #{index + 1}</a>
          </div>
        </div>
      );
    });
    return links;
  }
  render() {
    if (this.props.type == "recent") {
      return (
        <li className="recent-posts">
          <div className="recent-posts-title"> {this.props.title}</div>
          <div className="recent-posts-topics">{this.renderTopics()}</div>
        </li>
      );
    } else {
      return (
        <li className="result-post">
          <div className="result-post-topics">{this.renderTopics()}</div>
          <div className="result-post-title">
            <a
              className="result-post-links"
              href={this.props.url_for_post}
              onMouseEnter={() => this.setState({ height: 70 })}
              onMouseLeave={() => this.setState({ height: 0 })}>
              {this.props.title}
            </a>
          </div>
          <AnimateHeight duration={500} height={this.state.height}>
            <div className="result-posts-links">{this.renderLinks()}</div>
          </AnimateHeight>
        </li>
      );
    }
  }
}

export default Post;
