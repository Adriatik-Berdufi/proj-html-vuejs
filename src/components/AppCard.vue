<script>
import { store } from "../store";

export default{
  props: {
      param: Array,
    },
  data(){
    return{
      store,
      
    }
  },
  
  methods:{
    getImagePath: function(img){
        return new URL(`../assets/images/${img}`, import.meta.url).href;
    },
    
  },
};



</script>

<template>
   <div class="card-container">
        <div v-for="card in param" class="my-card">
          <div class="mb-3"><img :src="getImagePath(card.imgURL)" alt=""></div>
          <div class="title">{{card.title}}</div>
          <div class="content">{{card.content}}</div>
          <div>
            <span class="me-5"><span class="me-2"><font-awesome-icon :icon="['far', 'calendar']" /></span>{{ card.data }}</span>
            <span class="me-5"><span class="me-2"><font-awesome-icon :icon="['far', 'eye']" /></span>{{ card.views }}</span>
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
      
        width: 380px;
        height: 440px;
        text-align: start;
        color: $green-color;
        img{
          height: 260px;
          width: 100%;
          border-top-right-radius: 10px;
          border-top-left-radius: 10px;

          object-fit: contain;
        }
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
