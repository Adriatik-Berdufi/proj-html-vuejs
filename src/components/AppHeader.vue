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
<header>
    <div class="d-flex">
        <ul v-for="link in store.headerLinks" >
            <li class="me-4">{{link.title.charAt(0).toUpperCase() + link.title.slice(1)}}</li>
        </ul>
      </div>
      <div class="logo"><img src="../assets/images/dark-logo.png" alt=""></div>
    
    <div class="search">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search...">
        <div class="input-group-text">icon</div>
      </div>
    </div>
</header>

</template>

<style lang="scss" scoped>

//import of var and mixins
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

header{
    height: $height-header;
    @include center-vertical;
    justify-content: space-around;
   
    background-color: $gren-color;
  li{
    padding: 5px 10px;
  }
  .logo{
    img{
      height: 28px;
    }
  }
  .search{
    width: 300px;
  }
}
</style>

  
   
    
 

 

