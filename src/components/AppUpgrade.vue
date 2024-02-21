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
   <section class="upgrade">
    <div class="img-container">
      <img class="img-center" src="../assets/images/stock-full-hd-11-670x450.jpg" alt="">
      <img class="svg0" src="../assets/svg/svg-0.svg" alt="">
      <img class="svg1" src="../assets/images/maxcoach-shape-05.png" alt="">
      <img class="svg2" src="../assets/images/maxcoach-shape-07.png" alt="">
      <img class="svg3" src="../assets/images/icon-youtube-play.png" alt="">

    </div>
    <div class="content">
        <div class="circle"></div>
        <div class="mb-3">HOW WE WORK</div>
        <h2>Upgrade Your Skills<span>Upgrade Your Life</span> You!</h2>
        <p class="mb-4">
            Opening up more opprtunities in front of you ti get the ticket to more enjoyable 
            door in life.Getting equipped with new skills for new sets of insights into
            your career.MaxCoach accompany learners in every stage of learning.
        </p>
        <button class="btn-view" type="button">Download free guidebook -></button>
    </div>
 </section>
</template>

<style lang="scss" scoped>
//import of var and mixins
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;
.upgrade{
    height: 800px;
    @include center-flex;
    gap: 150px;
    background-color: $white-smoke-1-color;

     //img in absolute
   
    
  .img-container{
    width: 580px;
    position: relative;
    .img-center{
      position: absolute;
      border-radius: 10px;
      top: -220px;
      left: -50px;
      z-index: 2;
    }
    .svg0{
      height: 170px;
      position: absolute;
      top: -300px;
      left: -120px;
     }
     .svg1{
      z-index: 1;
      position: absolute;
      top: -170px;
      left: -170px;
     }

     .svg2{
        height: 180px;
        position: absolute;
        bottom: -330px;
        left: 460px;
     }
     .svg3{
        z-index: 3;
        position: absolute;
        right: 45%;
        top: -30px;
     }
  }
     
    
    .content{
      width: 440px;
      padding: 20px;
      color: $green-color;
      position: relative;

      .circle{
        height: 60px;
        @include circle;
        border-color:rgb(236, 197, 171); 
        position: absolute;
        top: -50px;
        left:15px;
      }
      h2{
        font-size: 54px;
        color: black;
        span{
          color: $gren-color;
        }
      }
        .btn-view{
            @include my-btn-secondary;
            background-color: $white-smoke-1-color;
        }
        
    }
}
</style>
