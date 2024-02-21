<script>
import { store } from "../store";

export default{
  data(){
    let initindex = 0;
    return{
      store,
      initindex: 0,
      show : false,
    }
  },
  methods:{
    showCard(index){
        this.initindex = index;
        this.show = true;
    },
    hidecard(){
        this.show= false;
    },

    getImagePath: function(img){
        return new URL(`../assets/images/${img}`, import.meta.url).href;
    },
        
    
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
            <div v-for="card,index in store.testimonials" @mouseenter="showCard(index)" :class="card.class">
                <h2>{{ card.title }}</h2>
                <p>{{ card.text }}</p>
                <div class="scheda">
                    <div class="img"><img :src="getImagePath(card.imgUrl)" alt=""></div>
                    <div >
                        <h3>{{ card.nome }}</h3>
                        <h5>{{ card.profession }}</h5>
                    </div>
                </div>
                
            </div>
            <div v-if="(this.show)" @mouseleave="hidecard()" class="hover-testimonial">
                <h2>{{ store.testimonials[this.initindex].title }}</h2>
                <p>{{ store.testimonials[this.initindex].text }}</p>
                <div class="scheda">
                    <div class="img"><img :src="getImagePath(store.testimonials[this.initindex].imgUrl)" alt=""></div>
                    <div >
                        <h3>{{ store.testimonials[this.initindex].nome }}</h3>
                        <h5>{{ store.testimonials[this.initindex].profession }}</h5>
                    </div>
                </div>
            </div>

            
            

                

           
        </div>
        
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
              @include my-btn-secondary
            }
        }
    }
    .testimonial-content{
        position: relative;
       
        height: 550px;
        width: 700px;
        .testimonial-1to3{
            margin: auto;
            border: 1px solid rgba(0, 0, 0, 0.04);
            width: 500px;
            height: 550px;
            position: relative;
            h2{
                font-size: 12px;
            }
            p{
                font-size: 10px;
            }
            .scheda{
                display: flex;
                gap: 20px;
                .img{
                    height: 50px;
                    width: 50px;
                    border-radius: 50%;
                    @include center-flex;
                    img{
                        width: 100%;
                        border-radius: 50%;
                    }
                }
                h3{
                font-size: 12px;
                }
                h5{
                    font-size: 12px;
                }

            }
            
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
            border: 1px solid rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            position: absolute;
            top: 25%;
            left: -20%;
            background-color: white;
            -webkit-box-shadow: 5px 5px 15px 5px #000000; 
            box-shadow: 5px 5px 15px 5px #000000;
            h2{
                font-size: 20px;
                margin-bottom: 10px;
            }
            p{
                font-size: 16px;
            }
            .scheda{
                .img{
                    height: 80px;
                    width: 80px;
                }
                h3{
                    font-size: 16px;
                }
            }
            .scheda-testimonial{
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
           
        }
    }
 

</style>
