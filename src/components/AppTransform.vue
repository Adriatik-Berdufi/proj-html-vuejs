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
 <section class="transform_you">
    <div class="img-container">
      <h2></h2>
      <img class="svg0" src="../assets/svg/svg-0.svg" alt="">
      <img class="svg1" src="../assets/images/maxcoach-shape-05.png" alt="">
      <img class="svg3" src="../assets/images/maxcoach-shape-01.png" alt="">
      <img class="svg4" src="../assets/images/maxcoach-shape-07.png" alt="">
      <img class="img-center" src="../assets/images/home-3-team-image.png" alt="">
    </div>
    <div class="content">
        <div class="circle"></div>
        <div class="mb-3">EVERYTHIDG IN <b>MAXCOACH</b></div>
        <h2>We're Here To <span>Tranform</span> You!</h2>
        <p class="mb-4">
            As learnes, people can enjoy great campanionship from MaxCoach mentors and educators.
            We can help you develop and grow at your best.
        </p>
        <button class="btn-subscribe btn btn-outline-secondary" type="button">Get Free Guide</button>
    </div>
 </section>
</template>

<style lang="scss" scoped>
//import of var and mixins
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;
section{
    background-color:$white-color;
}
.transform_you{
    height: 800px;
    @include center-flex;
    gap: 150px;
    padding-bottom: 150px;

     //img in absolute
   
    
  .img-container{
    width: 440px;
    position: relative;
    .img-center{
      position: absolute;
      top: -220px;
      left: -50px;
      z-index: 3;
    }
    .svg0{
      height: 170px;
      position: absolute;
      top: -150px;
      left: -90px;
      path{
        fill: red !important;
      }
     }
     .svg1{
      z-index: 2;
      position: absolute;
      top: -70px;
      left: -180px;
     }
     .svg3{
      z-index: 2;
      position: absolute;
      bottom: -250px;
      left: -330px;
     }
     .svg4{
      position: absolute;
      bottom: -368px;
      left: 170px;
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
        top: -90px;
        left:-33px;
      }




      h2{
        font-size: 54px;
        color: black;
        span{
          color: $gren-color;
        }
      }

        .btn{
            @include  my-btn;
            padding: 15px 45px;
            background-color: $gren-color;
        }

    }
}

</style>
