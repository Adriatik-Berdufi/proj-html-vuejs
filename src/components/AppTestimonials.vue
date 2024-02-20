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
   <section class="testimonials">
    <div class="content">
        <div class="mb-3">TESTIMONIALS</div>
        <h2>Why Do People <span>Hearts</span> Us?</h2>
        <p class="m-0">Seeking for verbals of our service quality?Find them here.</p>
        <p class="mb-4">Everything is important and straitghtforward for your sense of justification.</p>
        <button class="btn-view" type="button">View all -></button>
    </div>
    <div class="testimonial-content">
        <div class="testimonial-1to3">
            <!-- todo riempire le card con conntenuto preso dallo store  -->
            <div class="testimonial-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, enim soluta mollitia nisi asperiores voluptas. Vel quis asperiores incidunt iusto expedita sit ducimus beatae, facere rerum ratione quasi veniam saepe.</div>
            <div class="testimonial-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur exercitationem provident inventore, placeat vitae ipsam maxime ipsum. Voluptas aut consequatur ratione minus atque aperiam labore aliquid officiis sunt et?</div>
            <div class="testimonial-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, non consequuntur quo, reprehenderit et ab autem illum, facere minima architecto tenetur recusandae odit eum harum placeat ut! Consectetur, id aliquid.</div>
        </div>
        <div class="hover-testimonial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dolore. Molestias dolores beatae doloribus omnis officiis iste nostrum nulla obcaecati eveniet, error reiciendis veniam commodi non pariatur quas? Nostrum, non.</div>
    </div>

   </section>
</template>

<style lang="scss" scoped>
//import of var and mixins
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

section{
    background-color:$white-color;
    padding-top: 80px;
}

    .testimonials{
        height: 800px;
        @include center-flex;
        gap: 150px;
        padding-bottom: 150px;
    .content{
        border: 2px solid red;
        width: 460px;
        padding: 20px;
        color: $green-color;
        position: relative;

            h2{
            font-size: 54px;
            color: black;
                span{color: $gren-color;}
            }
            .btn-view{
                font-size: 14px;
                font-weight: 600;
                padding: 0;
                color: black;
                background-color: white;
                border: none;
                border-bottom:1px solid rgba(0, 0, 0, 0.191)
            }
        }
    }
    .testimonial-content{
        position: relative;
        border: 2px solid red;
        height: 550px;
        width: 700px;
        .testimonial-1to3{
            margin: auto;
            border: 1px solid rgba(0, 0, 0, 0.04);
            width: 500px;
            height: 550px;
            position: relative;
            .testimonial-1,.testimonial-2,.testimonial-3
            {   
                padding:20px 40px;
                border: 1px solid rgba(0, 0, 0, 0.04);
                height: calc(100% / 3);
            }
            
        }
        .hover-testimonial{
            width: 700px;
            height: 250px;
            padding:20px 40px;
            border: 1px solid rgba(0, 0, 0, 0.999);
            border-radius: 10px;
            position: absolute;
            top: 25%;
            background-color: white;
        }
    }

</style>
