/**
 * Created by lizifen on 16/7/12.
 */
const MODULES = [
  {id: 1, name: '提示框组件', path: '/alerts'},
  {id: 2, name: '拼图游戏', path: '/pic/game'},
  {id: 3, name: 'module_3', path: '/modules/1'}
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
