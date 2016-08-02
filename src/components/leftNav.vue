<template>
  <div class="m-nav" v-for="item in modules">
    <div class="navItem">
       <a class="a" v-on:click="changeView(item)" >{{item.name}}</a>
    </div>
  </div>
</template>

<script>
  export default{
    name:"leftNav",

    data(){
      return {
        msg: 'hello vue'
      }
    },
    props:['modules'],
    methods:{
      changeView:function(item){
        this.$router.go(item.path);
      }
    }
  }
</script>
