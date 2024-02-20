<script>
import{ store } from './store';
import AppTest from './components/AppTest.vue';
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue';
import AppHero from './components/AppHero.vue';
import AppSubscribe from './components/AppSubscribe.vue'

export default {
  data() {
    
    return {
      store,
     
    }
  },
  components:{AppTest,AppHeader,AppFooter,AppHero,AppSubscribe},
};
</script>

<template>
  <AppHeader/>
  <AppHero/> 
  <AppSubscribe/>
  <AppFooter/>
</template>

<style lang="scss" scoped>
//import of var and mixins
@use './styles/partials/variables.scss' as *;
@use './styles/partials/mixins.scss' as *;

</style>
