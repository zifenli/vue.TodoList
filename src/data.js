/**
 * Created by lizifen on 16/7/12.
 */
const MODULES = [
  {id: 1, name: '提示框组件', path: '/alerts'},
  {id: 2, name: '拼图游戏', path: '/pic/game'},
  {id: 3, name: '瀑布流图片', path: '/gallery/columns'}
];

const CUBRSLENGTH = 15;

export default{
  getModules: function () {
    return MODULES;
  },
  getCubesLen: function () {
    return CUBRSLENGTH;
  }
}
