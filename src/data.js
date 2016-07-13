/**
 * Created by lizifen on 16/7/12.
 */
const MODULES = [
  {id:1,name:'提示框组件',path:'/alerts'},
  {id:2,name:'module_2',path:'/modules/1/detail'},
  {id:3,name:'module_3',path:'/modules/1'}
];

export default{
  getModules:function(){
    return MODULES;
  }
}
