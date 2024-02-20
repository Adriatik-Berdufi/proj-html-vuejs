<script>
import{ store } from './store';
import AppTest from './components/AppTest.vue';
import AppHeader from './components/AppHeader.vue'

export default {
  data() {
    
    return {
      store,
     
    }
  },
  components:{AppTest,AppHeader},
};
</script>

<template>
  <AppHeader/>
  <div class="container">
    
  </div>
</template>

<style scoped>
 
</style>
