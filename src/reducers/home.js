export default (state={posts: []}, action) => {
  switch(action.type) {
    case 'HOME_PAGE_LOADED':
      return {
        ...state,
        posts: action.data.posts,
      };
    default:
      return state;
  }
};
