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
  <section class="lastest-courses">
    <div class="title text-center">
        <h4>JOIN MAXCOACH AT BEST</h4>
        <h2>Latest Online <span>Courses</span></h2>
    </div>
    <!-- todo slider -->
    <div class="slider">
        <div class="card">left</div>
        <div class="card">midle</div>
        <div class="card">right</div>

    </div>
    <div class="view-all text-center">
        <div>
            <span>
                Control your personal preference settings to get notifed about appropriate courses.
            </span>
            <button class="btn-view" type="button">View all Courses -></button>
        </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
//import of var and mixins
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.lastest-courses{
    height: 900px;
   // @include center-flex;
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
    border: 2px solid red;
    height: 550px;
}
.view-all{
    height: 200px;
    @include center-horisontal;
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
    
}

</style>
