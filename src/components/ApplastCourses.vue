<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";

export default{
  data(){
    return{
      store,
      data:store.courses,
    }
  },
  components:{AppCard},
};



</script>

<template>
  <section class="lastest-courses">
    <div class="title text-center">
        <h4>JOIN MAXCOACH AT BEST</h4>
        <h2>Latest Online <span>Courses</span></h2>
    </div>
    <!-- todo slider -->
    <div class="slider">
        <AppCard :param="data" class="d-flex gap-5"></AppCard>
    </div>
    <div class="view-all text-center">
        <div>
            <span>
                Control your personal preference settings to get notifed about appropriate courses.
            </span>
            <button class="btn-view" type="button">View all Courses -></button>
        </div>
        <img class="wave" src="../assets/svg/svg-1.svg" alt="">
    </div>
    
  </section>
</template>

<style lang="scss" scoped>
//import of var and mixins
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.lastest-courses{
    height: 950px;
    position: relative;
    gap: 150px;
    padding-bottom: 150px;
    background-color: $white-smoke-1-color;
}

.title{
    height: 150px;
    h4{
        font-size: 16px;
        color: $green-color;
        padding-top: 10px;
    }
    h2{
        font-size: 48px;
        margin:25px 0;
        span{
            color:$gren-color;
            font-weight: 300;
        }
    }
}
.slider{
    display: flex;
    justify-content: center;
    height: 550px;
}
.view-all{
    height: 200px;
    @include center-flex;
    flex-direction: column;
    div{    
        padding:20px ;
        width: 700px
    }
    span{
        font-size: 22px;
        color: $green-color 
    }
    .btn-view{
        @include my-btn-secondary;
        font-size: 20px;
        background-color: $white-smoke-1-color;
    }
    .wave{
        width: 100vw;
        position: absolute;
        bottom: 0;
    }
    
}

</style>
