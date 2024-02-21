<script>
import{ store } from './store';
import AppTest from './components/AppTest.vue';
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue';
import AppSubscribe from './components/AppSubscribe.vue';
import AppHero from './components/AppHero.vue';
import AppBlogs from './components/AppBlogs.vue';
import AppCard from './components/AppCard.vue';
import AppTransorm from './components/AppTransform.vue';
import AppTestimonials from './components/AppTestimonials.vue';
import AppLearnAbout from './components/AppLearnAbout.vue';
import AppUpgrade from './components/AppUpgrade.vue';
import AppLastCourses from './components/ApplastCourses.vue';
export default {
  data() {
    
    return {
      store,
     
    }
  },
  components:{AppTest,AppHeader,AppFooter,AppHero,AppBlogs,AppSubscribe,AppCard,AppTransorm,AppTestimonials,AppLearnAbout,AppUpgrade,AppLastCourses},
};
</script>

<template>
  <div id="app">
    <AppHeader/>
    <div class="main-container">
      <AppHero/>
      <AppLearnAbout/>
      <AppUpgrade/>
      <AppLastCourses/>
      <AppTestimonials/>
      <AppTransorm/> 
      <AppBlogs/>
      <AppSubscribe/>
      <AppFooter/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//import of var and mixins
@use './styles/partials/variables.scss' as *;
@use './styles/partials/mixins.scss' as *;
.main-container {
  overflow: scroll;
  height: calc(100vh - 80px); 
  position: relative;
}

</style>
