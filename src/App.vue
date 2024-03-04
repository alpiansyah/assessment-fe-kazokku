<template>
  <div id="app">
            <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  },
  data() {
    return {
      step: 1,
    }
  },
  watch:{
    '$store.state.form.step'(){
      this.step = this.$store.state.form.step
      this.$forceUpdate()
    }
  },
  methods:{
    back(){
      this.step = 1
      this.$store.commit('initialise_step', this.step)
    }
  },
  mounted(){
    if(localStorage.getItem('state_selected')) this.$store.commit('initialise_selected', JSON.parse(localStorage.getItem('state_selected')))
    if(localStorage.getItem('step')) this.$store.commit('initialise_step', parseInt(localStorage.getItem('step')))
    this.step = this.$store.state.form.step == null ? 1 : this.$store.state.form.step
    
  },
};
</script>

<style lang="stylus">
bgcolor = #FFFFFF
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  text-align left
  background bgcolor
  color #2c3e50
  max-width: 478px;
  min-height:100vh;
  margin: 0 auto;
  background-image linear-gradient(153deg, #712bda, #a45deb 100%);

body
  background-color bgcolor

.search-wrapper 
  display flex
  align-items center
  justify-content center
  flex-flow column
.search-button 
  width: 380px;
  height: 40px;
  margin: 15px 0 0;
  border-radius: 20px;
  border none
  background-color: rgba(255, 255, 255, 0.2);
  color white

.search-text
  text-align center
  width 380px;
  height 40px;
  border none
  padding 13px 81px 13px 79px;
  border-radius 20px;
  background-color #fff;

 
</style>
