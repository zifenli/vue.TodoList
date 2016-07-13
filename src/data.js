/**
 * Created by lizifen on 16/7/12.
 */
const modules = [
  {id:1,name:'module_1',path:'/modules/1'},
  {id:2,name:'module_2',path:'/modules/1/detail'},
  {id:3,name:'module_3',path:'/modules/1'}
];

export default{
  getModules:function(){
    return modules;
  }
}
