<script>
import { store } from "../store";


export default{
  data(){
    return{
      store,
      initindex: 'null',
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
  }
  
};



</script>

<template>
<header>
  <div class="d-flex menus">
      <ul class="me-4 d-flex me-5">
        <li v-for="(link, index) in store.headerLinks" @mouseenter="showCard(index)" @mouseleave="hidecard(index)" :key="index">
          {{ link.title.charAt(0).toUpperCase() + link.title.slice(1) }}
          <span class="links-icon"><font-awesome-icon :icon="['fas', 'angle-down']" /></span>
          <div v-if="show && index === initindex" class="option-container">
            <ul class="options">
              <li>optio1</li>
              <li>optio2</li>
              <li>optio3</li>
              <li>optio4</li>
              <li>optio5</li>
            </ul>
          </div>
        </li>
      </ul>
      <div class="logo"><img src="../assets/images/dark-logo.png" alt=""></div>
    </div>

    <div class="search d-flex">
      <div class="icons d-flex">
        <a href="#"><font-awesome-icon :icon="['fas', 'cart-shopping']" /></a>
        <a href="#"><font-awesome-icon :icon="['far', 'user']" /></a>
      </div>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search...">
        <div class="input-group-text"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></div>
      </div>
    </div>
</header>

</template>

<style lang="scss" scoped>

//import of var and mixins
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;
header{
    position: sticky;
    z-index: 9;
    height: $height-header;
    @include center-vertical;
    justify-content: space-between;
    padding: 0 55px;
    
    background-color: $white-color;
    .menus{
      width: 100vh;
      justify-content: space-between;
    }
  li{
    padding: 5px 10px;
   
  }
  .option-container{
    position: relative;
  }
  .options{
    position: absolute;
    left:-25px;
    z-index: 2;

    width: 120px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 5px 5px 15px 5px #3c3c3c75;
    text-align: center;
   &:hover{
    display: none;
   }
  }
  .logo{
    img{
      height: 28px;
    }
  }
  .search{
    width: 300px;
    .input-group-text{
      color: $gren-color;
    }
  }
  .icons{
    align-self: center;
    a{
      color: rgba(0, 0, 0, 0.645);
      font-size: 18px;
      margin-right: 15px;
    }
  }
}
</style>

  
   
    
 

 

