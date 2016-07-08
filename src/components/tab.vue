<template>
      <ul class="m-banner">
        <li class="item" :class="{'z-active' : tabIndex==1}" v-on:click="changePanel(1)">已添加</li>
        <li class="item" :class="{'z-active' : tabIndex==2}" v-on:click="changePanel(2)">已删除</li>
      </ul>
      <div class="m-table">
        <table>
          <tr>
            <th>姓名</th>
            <th>电话</th>
            <th>操作</th>
          </tr>
          <tr v-for="item in members" track-by="$index" v-if="item.status==tabIndex">
            <td>{{item.name}}</td>
            <td>{{item.number}}</td>
            <td>删除</td>
          </tr>
        </table>
      </div>
</template>
<script>
export default{
  props: ['tabIndex','members'],
  data () {
    return {
      txt: 'hello vue'
    }
  },
  methods: {
    changePanel: function (index) {
      this.tabIndex = index
    }
  }
}
</script>
<style lang="less">
    body{
        background-color:#eeeeee;
    }
    .m-banner{margin:0;font-size:0;
      .item{display:inline-block;width: 100px;height:36px;line-height: 36px;font-size:14px;text-align:center;background-color: #ddd;
        &.z-active{background-color: #ccc;}
      }
    }
    .m-table{width:100%;text-align: center;margin-top: 50px;
      table{width:80%;
        tr{line-height: 26px;}
      }
    }
</style>
