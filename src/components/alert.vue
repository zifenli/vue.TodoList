<template>
  <div class="m-alert"  v-if="show" transition="expand">
    <p class="p">{{ options.info }}</p>
    <span v-on:click="close()">关闭</span>
  </div>
</template>
<style>

</style>
<script>
  export default{
    props: {
      show: {
        type: Boolean,
        default: false
      },
      options: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return {
        msg: 'hello vue'
      }
    },
    methods: {
      close(){
        this.show = !1;
        this.options={};
      }
    }
  }
</script>
