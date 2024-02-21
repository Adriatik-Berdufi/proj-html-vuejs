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
    <footer>
        <div>

            <div class="footer-menu">
                
                <div class="adress">
                    <h5 class="mb-3">{{ store.footercontent.adress.title }}</h5>
                    <div class="adress-info">
                        <div class="mb-3">{{ store.footercontent.adress.adress }}</div>
                        <div class="mb-3">{{ store.footercontent.adress.phone }}</div>
                        <div class="mb-3">{{ store.footercontent.adress.email }}</div>
                    </div>

                    <div class="socilas">
                        <span><a href="#"><font-awesome-icon :icon="['fab', 'x-twitter']" /></a></span>
                        <span><a href="#"><font-awesome-icon :icon="['fab', 'youtube']"/></a></span>
                        <span><a href="#"><font-awesome-icon :icon="['fab', 'pinterest']"/></a></span>
                        <span><a href="#"><font-awesome-icon :icon="['fab', 'facebook']"/></a></span>
                        <span><a href="#"><font-awesome-icon :icon="['fab', 'instagram']"/></a></span>
                    </div>
                    
                </div>
                <div class="info">
                    <div>
                        <h5>{{ store.footercontent.explore.title }}</h5>
                        <div class="d-flex">
                            <div class="me-5">
                                <ul v-for="link in store.footercontent.explore.linksOne">
                                    <li class="mb-3">{{ link }}</li>
                                </ul>
                            </div>
                            <div >
                                <ul v-for="link in store.footercontent.explore.linksTow">
                                    <li class="mb-3">{{ link }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5>{{ store.footercontent.info.title }}</h5>
                        <ul v-for="link in store.footercontent.info.links">
                            <li class="mb-3">{{ link }}</li>
                            
                        </ul>
                        
                    </div> 
                </div>
                
            </div>
            
            
            <div class="text-center"> 2020 maxcoach. All Rights Reserved</div>
            <a href="#" class="button"><font-awesome-icon :icon="['fas', 'arrow-up']" /></a>
            
        </div>
    </footer>
</template>

<style lang="scss" scoped>
//import of var and mixins
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;


footer{
    @include center-horisontal;
    color:$green-color;
    background-color: $footer-bcg;
    height: 410px;
    padding: 0 30px;
    position: relative;
    .footer-menu{
        width: 100%;
        display:flex;
        gap: 30px;
        h5{
            color: $white-color;
        }

        //adress section
        .adress,.info{
            width: 50%;
            padding: 55px;
        }

        //info section
        .info{
            display: flex;
            gap: 15%;
        }
    }
    .button{
        position: absolute;
        bottom: 30px;
        right: 30px;

        
        background-color: $gren-color;
        color: white;
        font-size: 22px;
        height: 60px;
        width: 60px;
        border-radius: 50%;
        @include center-flex;
        
    }
    .socilas{
        span{
            font-size: 28px;
            margin-right: 20px;
            cursor: pointer;
            a{
                list-style: none;
                color: $green-color;
            }
        }
    }
}

</style>
