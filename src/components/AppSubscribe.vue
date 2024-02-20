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
        border: 2px solid red;
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
            color: white;
            background-color: $gren-color;
            border: none;
            font-size: 14px;
            font-weight: 800;
            padding: 15px 30px;
        }
    }
    

}
</style>


