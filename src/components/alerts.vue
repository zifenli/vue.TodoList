<template>
  <div>
    <alert :show.sync="show" :options.sync="options"></alert>
    <div class="m-horiBtnGroup">
      <div class="btn"  v-on:click="showAlert(1)">
        <a class="a">成功</a>
      </div>
      <div class="btn"  v-on:click="showAlert(2)">
        <a class="a">错误</a>
      </div>
      <div class="btn"  v-on:click="showAlert(3)">
        <a class="a">警告</a>
      </div>
    </div>
  </div>
</template>
<script>
  import alert from './alert.vue'

  function Hints() {
    let data = {
      warning: '这是一条警告提示信息。。。',
      success: '这是一条成功提示信息。。。',
      error: '这是一条错误提示信息。。。'
    }
    return {
      getHint: function (key) {
        return data[key]
      }
    }
  }

  var hints = new Hints();

  export default{
    data(){
      return {
        options: {
          info: ''
        },
        show: !1
      }
    },
    components: {alert},
    methods: {
      showAlert(type){
        this.show = !0;

        let key = type == 1 ? 'success' : (type == 2 ? 'error' : 'warning');
        this.options.info = hints.getHint(key);
      }
    }
  }
</script>
