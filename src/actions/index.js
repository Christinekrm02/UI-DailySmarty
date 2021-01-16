import { SET_RECENT_POSTS } from "./types";
import { SET_RESULTS_POSTS } from "./types";
import axios from "axios";

export function fetchRecentPosts() {
  return function (dispatch) {
    axios.get("https://api.dailysmarty.com/posts").then(response => {
      console.log("fetchRecentPosts:", response.data.posts);
      dispatch({
        type: SET_RECENT_POSTS,
        payload: response.data.posts,
      });
    });
  };
}

export function fetchPostsViaQuery(query) {
  return function (dispatch) {
    axios
      .get(`https://api.dailysmarty.com/search?q=${query}`)
      .then(response => {
        console.log("fetchPostsViaQuery:", response.data.posts);
        dispatch({
          type: SET_RESULTS_POSTS,
          payload: response.data.posts,
        });
      });
  };
}
