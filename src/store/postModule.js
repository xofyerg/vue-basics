export default postModule = {
  state: () => ({
    posts: [],
    isPostsLoading: false,
    searchQuery: "",
    page: 1,
    limit: 10,
    totalPages: 0,
    selectedSort: "",
    sortOptions: [
      { value: "title", name: "by title" },
      { value: "body", name: "by body" },
      { value: "id", name: "by id" },
    ],
  }),
  getters: {},
  mutations: {},
  actions: {},
};
