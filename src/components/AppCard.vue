<script>
import { store } from "../store";

export default{
  data(){
    return{
      store,
      prova:'prova',
     
    }
  },
};



</script>

<template>
   <div class="card-container">
        <div class="my-card">
            <figure><img class="img-fluid" src="../assets/images/course-02-480x298.jpg" alt=""></figure>
        </div>
    </div>
</template>

<style lang="scss" scoped>
//import of var and mixins
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.my-card{
        margin-left: auto;
        margin-right: auto;
        border: 2px solid red;

        width: 380px;
        height: 480px;

    }
</style>
