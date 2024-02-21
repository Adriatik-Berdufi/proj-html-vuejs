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
    <section class="subscribe-section">
        
        <div class="subscribe text-center">
            <div class="circle"></div>
            <div class="d-flex gap-3 justify-content-center">
                <h3>Subscribe</h3>
                <h4>Newsletters</h4>
            </div>
            <div class="mb-5">Enter your email address to register to our newsletter subscription 
                delivered on a regular basis!
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Enter your email...">
                <button class="btn-subscribe btn btn-outline-secondary" type="button">Subscribe</button>
            </div>

            <div class="img-absolut-1 mt-5"><img src="../assets/images/maxcoach-shape-09.png" alt=""></div>
            <div class="img-absolut"><img src="../assets/images/maxcoach-shape-02.png" alt=""></div>
        </div>
        
    </section>
</template>

<style lang="scss" scoped>
//import of var and mixins
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.subscribe-section{
    height: 420px;
    background-color: $white-color;
    @include center-flex;
    .subscribe{
        position: relative;
        width: 660px;
        padding: 25px 50px;
        h3{
            font-size: 48px;
            font-weight: 600;
        }
        h4{
            font-size: 48px;
            font-weight: 600;
            color: $gren-color;
        }
        .btn{
            @include  my-btn;
            background-color: $gren-color;
            padding: 15px 30px;
        }
    }
    .img-absolut{
        position: absolute;
        height: 100px;
        right: -220px;
        bottom: 90px;
        
    }
    .circle{
        @include circle;
        height: 50px;
        border-color: $gren-color;
        position: absolute;
        left: -300px;
        bottom: 150px;
    }
    .img-absolut-1{
        position: absolute;
        left: 700px;
        bottom: 100px;
        z-index: 9;
    }
    

}
</style>


