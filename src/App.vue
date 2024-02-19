<script>
import{ store } from './store';
import AppTest from './components/AppTest.vue';

export default {
  data() {
    
    return {
      store,
     
    }
  },
  components:{AppTest},
};
</script>

<template>
  <div class="container">
    <h1>New project</h1>
    <h3>{{ store.globalVarTest }}</h3>
    <AppTest/>
  </div>
</template>

<style scoped>
</style>
