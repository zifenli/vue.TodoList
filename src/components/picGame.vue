<template>
  <div>
    <ul class="m-gameBox">
      <li class="cube"
          :class="{'cube-empty' : !cube}"
          :style="{'background-position-x':cube.bgPositionX,'background-position-y':cube.bgPositionY}"
          v-for="cube in cubes"
          v-on:click="moveFn($index)"></li>
    </ul>
    <div class="m-btnwrap">
      <a href="" class="btn" v-on:click="reset($event)">重置</a>
      <a href="" class="btn" v-on:click="finish($event)">还原</a>
    </div>
  </div>
</template>

<script>
  import data from "../data"
  export default{
    data(){
      return {
        cubes: [],
        indexArr: []
      }
    },
    methods: {
      _initCubesBg(){
        var l = Math.round(Math.sqrt(data.getCubesLen() / 2));
        var index = 0;

        for (let i = 0; i < l + 1; i++) {
          for (let j = 0; j < l + 1; j++) {
            if (i == l && j == l) return;

            var temp = {
              index: ++index,
              bgPositionX: -150 - 125 * j + "px",
              bgPositionY: -16.5 - 125 * i + "px"
            }

            this.cubes.push(temp);
          }
        }
      },
      _generateIndex(){
        for (let i = 0; i < data.getCubesLen(); i++) {
          this.indexArr.push(i + 1);
        }
      },
      _disorderIndex(){
        this.indexArr = this.indexArr.sort(function () {
          return Math.random() - 0.5
        });
      },
      _render(){
        var _self = this;
        var _temp = [];

        this._disorderIndex();

        for (let i = 0; i < this.indexArr.length; i++) {
          _temp.push(this.cubes.find(function (item) {
            return item.index == _self.indexArr[i];
          }));
        }

        _temp.push('');
        this.cubes = _temp;
        console.log(_temp);
      },
      moveFn(index){
        let curNum = this.cubes[index],
          leftNum = this.cubes[index - 1],
          rightNum = this.cubes[index + 1],
          topNum = this.cubes[index - 4],
          bottomNum = this.cubes[index + 4];

        if (leftNum === '') {
          this.cubes.$set(index - 1, curNum)
          this.cubes.$set(index, '')
        } else if (rightNum === '') {
          this.cubes.$set(index + 1, curNum)
          this.cubes.$set(index, '')
        } else if (topNum === '') {
          this.cubes.$set(index - 4, curNum)
          this.cubes.$set(index, '')
        } else if (bottomNum === '') {
          this.cubes.$set(index + 4, curNum)
          this.cubes.$set(index, '')
        }
      },
      reset($event){
        $event.preventDefault();
        this._render();
      },
      finish($event){
        $event.preventDefault();

        var _temp = [];
        for (var i = 0; i < this.cubes.length - 1; i++) {
          _temp[i] = this.cubes.find(function (item) {
            return item.index == i + 1;
          });
        }

        _temp.push('');

        this.cubes = _temp;
      }
    },
    ready(){
      this._initCubesBg();
      this._generateIndex();
      this._render();
    }
  }
</script>
