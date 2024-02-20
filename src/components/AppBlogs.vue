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
    <section class="our-blogs">
        <div class="mb-3">READ FOR MORE JOYMENT</div>
        <div class="d-flex gap-3 justify-content-center mb-5">
                <h3>Latest From</h3>
                <h4>Our Blogs</h4>
        </div>
        <div class="card-container">
            <div class="my-card">
                <figure><img class="img-fluid" src="../assets/images/course-02-480x298.jpg" alt=""></figure>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
//import of var and mixins
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

.our-blogs{
    background-color: $white-smoke-2-color;
    height: 800px;
    text-align: center;
    padding:100px 0;
    h3{
        font-size: 48px;
        font-weight: 600;
    }
    h4{
        font-size: 48px;
        font-weight: 600;
        color: $gren-color;
    }
    .my-card{
        margin-left: auto;
        margin-right: auto;
        border: 2px solid red;

        width: 380px;
        height: 480px;
        

    }
}
</style>
