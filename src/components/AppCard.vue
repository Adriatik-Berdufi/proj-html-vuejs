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
        <div v-for="card in store.dataBlogs" class="my-card">
          <div class="title">{{card.title.toUpperCase()}}</div>
          <div class="content">{{card.content}}</div>
          <div>
            <span class="me-5"><span class="me-2">icon</span>{{ card.data }}</span>
            <span class="me-5"><span class="me-2">icon</span>{{ card.views }}</span>

          </div>

            
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
        border-radius: 10px;
        border: 2px solid red;

        width: 380px;
        height: 480px;
        text-align: start;
        color: $green-color;

        .title{
          font-size: 16px;
        }
        .content{
          color: black;
          font-size: 26px;
          font-weight: 500;
        }
      

    }
</style>
