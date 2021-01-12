import { SET_RECENT_POSTS } from "../actions/types";
import recentPosts from "../components/recent-posts";

const INIT_STATE = {
  posts: [],
  recentPosts: [],
};

export default function (state = INIT_STATE, action) {
  switch (action.type) {
    case value:
      SET_RECENT_POSTS;

      return [...state, (recentPosts: action.payload)];

    default:
      return state;
  }
}