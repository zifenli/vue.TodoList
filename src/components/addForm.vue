<template>
  <div class="m-addForm">
    <div class="horiControl">
      姓名: <input class="input" type="text" v-model="member.name">
    </div>
    <div class="horiControl">
      电话: <input class="input" type="text" v-model="member.number">
    </div>
    <div class="btnWraper">
      <span href="" class="btn" v-on:click="addMember()">添加</span>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        member: {
          name:'',
          number:''
        }
      }
    },
    methods:{
      addMember:function(){
        var _self=this;
        console.log(_self.$data.member);
      }
    }
  }
</script>
<style lang="less">
  a{text-decoration: none;}
  .m-addForm {  width: 100%;  text-align: center;
    .horiControl{margin-bottom:10px;
      .input {  width: 240px;  line-height: 28px;border:1px solid #ddd;border-radius: 4px; }
    }
  .btnWraper{
    .btn{display:inline-block;width:240px;line-height: 38px;background-color: #00bfbf;margin-left:40px;border-radius: 4px;color:white;}
  }
  }
</style>
