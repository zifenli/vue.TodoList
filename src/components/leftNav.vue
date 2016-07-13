<template>
  <div v-for="item in modules">
    <a v-on:click="changeView(item)" >{{item.name}}</a>
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
