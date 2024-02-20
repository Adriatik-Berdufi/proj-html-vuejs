<script>
import{ store } from './store';
import AppTest from './components/AppTest.vue';
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue';
import AppSubscribe from './components/AppSubscribe.vue';
import AppHero from './components/AppHero.vue';
import AppBlogs from './components/AppBlogs.vue';
import AppCard from './components/AppCard.vue';

export default {
  data() {
    
    return {
      store,
     
    }
  },
  components:{AppTest,AppHeader,AppFooter,AppHero,AppBlogs,AppSubscribe,AppCard},
};
</script>

<template>
  <AppHeader/>
  <AppHero/> 
  <AppBlogs/>
  <AppSubscribe/>
  <AppFooter/>
</template>

<style lang="scss" scoped>
//import of var and mixins
@use './styles/partials/variables.scss' as *;
@use './styles/partials/mixins.scss' as *;

</style>
