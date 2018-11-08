<template>
    <div class="AppNav">
    <ul class="nav-container">
        <router-link tag = "li"  class="nav-item" :to= "item.path"
        v-for = "item in navs"
        :key = "item.id"
        ><i :class= "item.icon"></i>
        <p>{{ item.title }}</p> 
             
        </router-link>
        
    </ul>    
    </div>    
</template>

<script>
export default {
  data() {
    return {
      navs: [
        { id: 1, title: "电影", path: "/home", icon: "fa fa-film fa-lg" },
        { id: 2, title: "影院", path: "/cinema", icon: "fa fa-television fa-lg" },
        { id: 3, title: "我的", path: "/user", icon: "fa fa-user-o fa-lg" }
      ]
    };
  }
};
</script>

<style lang="scss">
.AppNav {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  z-index: 9999;
  .nav-container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;

    .nav-item {
      width: 100%;
      text-align: center;
      color: #777;
      height: 1.28rem;
      border-top: 1px solid #ccc;
      box-sizing: border-box;
      padding: .133333rem 0;
    }
    .router-link-active{
          color: #f03d37;
    }
  }
}
</style>
