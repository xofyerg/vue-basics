<template>
  <div>
    <h4 class="app__title">Post creation</h4>

    <my-input v-model="searchQuery" placeholder="Search..." />
    <div class="app__btns">
      <my-button @click="showDialog">Create posts</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <my-dialog v-model:show="dialogVisible" @hide="hideDialog">
      <post-form @create="createPost" v-model:show="dialogVisible" />
    </my-dialog>

    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Loading...</div>

    <div class="observer" ref="observer"></div>
    <!--    <div class="paginator">-->
    <!--      <div-->
    <!--        class="paginator__page"-->
    <!--        :class="{-->
    <!--          'current-page': page === pageNumber,-->
    <!--        }"-->
    <!--        v-for="pageNumber in totalPages"-->
    <!--        :key="pageNumber"-->
    <!--        @click="changePage(pageNumber)"-->
    <!--      >-->
    <!--        {{ pageNumber }}-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
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
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((item) => item.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    hideDialog() {
      this.dialogVisible = false;
    },
    // changePage(pageNumber) {
    //   this.page = pageNumber;
    // },
    async fetchPosts() {
      this.isPostsLoading = true;
      const response = await axios
        .get("https://jsonplaceholder.typicode.com/posts?", {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        })
        .catch((err) => err.data);

      this.posts = response.data;
      this.totalPages = Math.ceil(
        response.headers["x-total-count"] / this.limit
      );
      this.isPostsLoading = false;
    },
    async loadMorePosts() {
      this.page += 1;

      const response = await axios
        .get("https://jsonplaceholder.typicode.com/posts?", {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        })
        .catch((err) => err.data);

      this.totalPages = Math.ceil(
        response.headers["x-total-count"] / this.limit
      );
      this.posts = [...this.posts, ...response.data];
    },
  },
  mounted() {
    this.fetchPosts();

    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // },
  },
};
</script>

<style scoped>
.app__title {
  font-size: 38px;
}

.app__btns {
  display: flex;
  justify-content: space-between;
  width: 30%;
}

/*.paginator {*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  margin-top: 15px;*/
/*}*/

/*.paginator__page {*/
/*  border: 1px solid #000;*/
/*  padding: 15px;*/
/*  cursor: pointer;*/
/*}*/

/*.current-page {*/
/*  border: 2px solid #cccccc;*/
/*}*/
</style>
