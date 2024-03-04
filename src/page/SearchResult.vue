<template>
  <div id="search-result">
    <header class="header">
      <div class="menu-bar" @click="$router.push('/')">
        <i class="fa fa-bars"></i>
      </div>
      <div class="logo" @click="$router.push('/')">
        <img src="../assets/ngmusic.svg" />
      </div>
      <div class="search" @click="searchDialog = true">
        <i class="fa fa-search"></i>
      </div>
    </header>

    <div class="search-result-text">
      <span
        >Search result for:
        <b class="search-input-text">{{ $route.query.search }}</b></span
      >
    </div>

    <div class="song-list">
      <div class="song-wrapper" v-for="(item, index) in songList" :key="index">
        <div class="song-album-cover">
          <img :src="item.artworkUrl100" alt="artwork" class="album-cover" />
          <img src="../assets/play-circle.svg" class="play-circle" />
        </div>
        <div class="song-content">
          <div class="song-artist">{{ item.artistName }}</div>
          <div class="song-title">{{ item.trackName }}</div>
          <div class="song-footer">
            <div class="song-genre">{{ item.primaryGenreName }}</div>
            <div class="song-price">
              <img src="../assets/currency-dollar.svg" />
              {{ item.trackPrice }}
            </div>
          </div>
        </div>
      </div>

      <div class="load-more">
        <button class="load-more-button" type="button" @click="loadMoreSong()">
          load more
        </button>
      </div>
    </div>

    <div class="overlay-search" v-if="searchDialog">
      <div class="closer-button" @click="searchDialog = false">
        <i class="fa fa-close"></i>
      </div>
      <div class="search-wrapper overlay-content">
        <h3>Search</h3>
        <input
          type="text"
          v-model="searchText"
          @keypress.enter="searchSong()"
          class="search-text"
          placeholder="Artis / Album / Title"
        />
        <button
          type="button"
          class="search-button-overlay"
          @click="searchSong()"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search-result-page",
  data() {
    return {
      searchDialog: false,
      songList: [],
      limit: 5,
      searchText: this.$route.query.search,
    };
  },
  mounted() {
    this.getSongList();
  },
  methods: {
    getSongList() {
      this.axios
        .get(
          "https://itunes.apple.com/search?term=" +
            this.searchText +
            "&entity=song&limit=" +
            this.limit
        )
        .then((response) => {
          this.songList = response.data.results;
          this.searchDialog = false;
        });
    },
    loadMoreSong() {
      this.limit += 5;
      this.getSongList();
    },

    searchSong() {
      this.limit = 5;
      this.$router.push({
        path: "/result",
        query: { search: this.searchText },
      });
      this.getSongList();
    },
  },
};
</script>

<style lang="stylus">
#search-result
  min-height 100vh
  width 100%
  background #f8fafc
  position relative

.header
  display flex
  justify-content space-between
  flex-flow row
  box-shadow: 0 0 6px 0 rgba(148, 77, 230, 0.75);
  padding 15px
  color white
  border-bottom-left-radius 50%
  border-bottom-right-radius 50%
  height 80px
  font-size 20px
  background-image: linear-gradient(100deg, #712bda, #a45deb 100%);
.search
  cursor pointer
.menu-bar
  cursor pointer
.logo
  cursor pointer
.search-result-text
  text-align center
  margin-top 35px
  font-size 14px
.search-input-text
  color #7b34dd
  font-size 18px



.song-list
  padding 10px
  display flex
  flex-flow column
.song-wrapper
  border-radius 10px
  padding 10px
  display flex
  margin 10px
  flex-flow row
  background white
.song-content
  width 100%
  padding-right 10px
.album-cover
  border-radius 10px

.song-album-cover
  min-width 100px
  min-height 100px
  margin-right 15px
  position relative
  text-align center

.song-footer
  margin-top 1rem
  display flex
  justify-content space-between
.song-genre
  padding 5px 10px 5px 10px
  color white
  background #10b981
  border-radius 10px
.song-title
  font-weight bold
  font-size 17px
.song-artist
  font-size 14px
  font-weight 500
.song-price
  color #f5b014
  font-weight bold

.load-more
  margin 25px
  width 100%
  display flex
  align-items center
  justify-content center

.load-more-button
  width: 120px;
  height: 34px;
  border none
  color #64748b
  font-weight bold
  cursor pointer
  border-radius: 17px;
  background-color: #e2e8f0;

.overlay-search
  position absolute
  width 100%
  height 100vh
  top 0
  background-color: rgba(28, 28, 45, 0.9);
.closer-button
  padding 10px
  text-align right
  color white
  font-size 20px
  cursor pointer

.search-wrapper.overlay-content
  color white
  margin-top 25%


.search-button-overlay
  background-image: linear-gradient(98deg, #712bda, #a45deb);
  width: 380px;
  height: 40px;
  margin: 15px 0 0;
  border-radius: 20px;
  border none
  color white

.play-circle
  position absolute
  cursor pointer
  left 0
  right 0
  margin 0 auto
  top 2rem
</style>
