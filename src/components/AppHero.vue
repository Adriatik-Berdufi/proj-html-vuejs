<script>
import { store } from "../store";

export default{
  data(){
    return{
      store,
      title:'Commence Business',
      h1Title:'Distant Mentoring Program',
     
    }
  },
};



</script>

<template>
   <div class="hero">
        <h3>{{ title }}</h3> 
        <h1>{{ h1Title }}</h1>
        <button class="btn btn-light">Download free guidebook -></button>
        <div class="icons">
            <ul>
                <li>icon 1</li>
                <li>icon 2</li>
                <li>icon 3</li>
                <li>icon 4</li>
            </ul>
        </div>
   </div>
</template>

<style lang="scss" scoped>
//import of var and mixins
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.hero{
    position: relative;
    height: $hero-header;
    @include center-flex;
    flex-direction: column;

    color: $white-color;
    background-image: url(../assets/images/home-3-hero-bg.jpg) ;

        h1{
           font-size: 75px;
           font-weight: 200; 
        }
        h3{
            font-size: 38px;
        }
        .btn{
            margin-top: 30px;
            padding: 15px 30px;
            font-size: 18px;
            font-weight:500;
            color: $gren-color;
        }
        .icons{
            position: absolute;
            top: 15%;
            right: 0;
            padding:5px 10px;
            color: $black-color;
            background-color: $white-color;
        }
    }

</style>
