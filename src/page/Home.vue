<template>
  <div>
    <div class="login-wrapper">
      <img src="../assets/logo.svg" />
    </div>
    <div class="search-wrapper">
      <input
        v-model="searchText"
        @keypress.enter="searchSong()"
        type="text"
        class="search-text"
        placeholder="Artis / Album / Title"
      />
      <button type="button" class="search-button" @click="searchSong()">
        Search
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-page",
  data() {
    return {
      searchText: null,
    };
  },
  methods: {
    searchSong() {
      this.$router.push({
        path: "/result",
        query: { search: this.searchText },
      });
    },
  },
};
</script>

<style lang="stylus">
.login-wrapper
  width 100%
  display flex
  justify-content center
  align-items center
  height 80vh

.search-button
  cursor pointer
</style>
