<script>
import{ store } from './store';
import AppTest from './components/AppTest.vue';
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue';

export default {
  data() {
    
    return {
      store,
     
    }
  },
  components:{AppTest,AppHeader,AppFooter},
};
</script>

<template>
  <AppHeader/>
  <div class="container">
    
  </div>
  <AppFooter/>
</template>

<style lang="scss" scoped>

</style>
