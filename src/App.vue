<template>
  <div id="app">
    <div class="m-main f-cf">
      <div class="left">
        <div class="m-addForm">
          <div class="horiControl">
            事件: <input class="input" type="text" v-model="ToDo.name">
          </div>
          <div class="horiControl">
            时间: <input class="input" type="text" v-model="ToDo.time">
          </div>
          <div class="btnWraper">
            <span href="" class="btn" v-on:click="addMember()">添加</span>
          </div>
        </div>
      </div>
      <div class="right">
        <ul class="m-banner">
          <li class="item" :class="{'z-active' : tabIndex==1}" v-on:click="changePanel(1)">待完成</li>
          <li class="item" :class="{'z-active' : tabIndex==2}" v-on:click="changePanel(2)">已完成</li>
        </ul>
        <div class="m-table">
          <table>
            <tr>
              <th>事件名称</th>
              <th>时间</th>
              <th>操作</th>
            </tr>
            <tr v-for="item in ToDos" track-by="$index" v-if="item.status==tabIndex">
              <td>{{item.name}}</td>
              <td>{{item.time}}</td>
              <td v-if="tabIndex==1"><a class="s-blue" v-on:click="operateMember(item,2)">删除</a></td>
              <td v-if="tabIndex==2"><a class="s-blue" v-on:click="operateMember(item,1)">恢复</a></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        id:1,
        ToDo:{status:1},
        ToDos:[],
        tabIndex:1
      }
    },
    methods:{
      addMember:function(){
        var _ToDo={
          id:this.id,
          name:this.ToDo.name,
          time:this.ToDo.time,
          status:this.ToDo.status
        };
        this.ToDos.push(_ToDo);

        this.id++;
      },
      changePanel: function (index) {
        this.tabIndex = index
      },
      operateMember:function(item,type){
        this.ToDos.find(function(value, index, arr){
            if(value.id==item.id) value.status=type;
            return !1;
        })
      },

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

  .m-main{
    .left{position:absolute;top:0;left:0;bottom:0;padding-top:180px;width:380px;background-color: white;}
    .right{position:absolute;top:0;right:0;bottom:0;left:380px;padding-top:30px;}
  }
  .f-cf{
    &:after{content:'';display:block;height:0;clear:both;visibility:hidden;}
  }

  a{text-decoration: none;cursor: pointer;}
  .m-addForm {  width: 100%;  text-align: center;
    .horiControl{margin-bottom:10px;
      .input {  width: 240px;  line-height: 28px;border:1px solid #ddd;border-radius: 4px; }
    }
    .btnWraper{
      .btn{display:inline-block;width:240px;line-height: 38px;background-color: #00bfbf;margin-left:40px;border-radius: 4px;color:white;}
    }
  }
  .s-blue{color:#00bfbf}
</style>
