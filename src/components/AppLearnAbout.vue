<script>
import { store } from "../store";

export default{
  data(){
    return{
      store,
     
     
    }
  },
};



</script>

<template>
  <section class="learn-about p-5">
    <div class="learn-about-content">
        <div class="content">
            
            <div class="mb-3">EVERYTHIDG IN <b>MAXCOACH</b></div>
            <h2>Learn about our  <span>Work Culture</span> at MaxCoach</h2>
            <p class="mb-4">
                Spend some time to visit our website ar head office and discover pur current courses,
                 enrollment procedure, and registration deadline.We're opening new classes every beggining of each month.
            </p>
            <div><span>Have Questions?</span><button class="btn-subscribe btn btn-outline-secondary" type="button">Get Free Guide -></button></div>
        </div>
        <div class="img-container">
            <h2></h2>
            <img class="img-center" src="../assets/images/stock-full-hd-10.jpg" alt="">
            <img class="svg0" src="../assets/images/maxcoach-shape-07-150x150.png" alt="">
            <img class="svg1" src="../assets/images/about-us-01.jpg" alt="">
            <div class="circle"></div>
            <img class="svg3" src="../assets/images/maxcoach-shape-02.png" alt="">
        </div>
    </div>
    <div class="stats">
        <div class="text-center"  v-for="stat in store.statics">
            <div class="stats-value">{{ stat.value}} <span>{{ stat.unit }}</span></div>
            <div class="stats-title">{{ stat.title.toUpperCase() }}</div>
        </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
//import of var and mixins
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.learn-about{
    background-color: $white-smoke-1-color;
   
    .stats{
        @include center-flex;
        gap: 150px;
        .stats-value{
            font-size: 44px;
            font-weight: 800;
            color: $gren-color;
        }
        .stats-title{
            font-size: 16px;
            font-weight: 600;
            color: $green-color;
        }
    }
   

     //img in absolute
   
  .learn-about-content{
    height: 800px;
    @include center-flex;
    gap: 200px;
      .img-container{
          width: 440px;
          position: relative;
          .img-center{
              position: absolute;
              top: -200px;
              left: -40px;
              z-index: 1;
            }
            .svg0{
                position: absolute;
                top: -270px;
                right: -75px;
            }
            .svg1{
                z-index: 2;
                position: absolute;
                top: -300px;
                right: -170px;
                border-radius: 10px;
            }
            .svg3{
                z-index: 2;
                position: absolute;
                bottom: -240px;
                left: 350px;
            }
            .circle{
                height: 60px;
                @include circle;
                border-color:rgb(236, 197, 171); 
                position: absolute;
                top: -200px;
                left:-180px;
            }
        }
        
        
        .content{
            width: 440px;
            padding: 20px;
            color: $green-color;
            h2{
                font-size: 54px;
                color: black;
                span{
                    color: $gren-color;
                }
            }
            
            .btn{
                @include  my-btn-secondary;
                background-color: inherit;
                margin-left: 5px;
                color:$gren-color
            }
            
        }
    }
}
 
</style>
