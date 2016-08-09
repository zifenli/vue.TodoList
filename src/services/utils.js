/**
 * Created by lizifen on 16/8/8.
 */
import Promise from '../services/Promise'

var Utils={};

Utils.request=function(url){
  return new Promise(function(resolve){
    var xhr=new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.send();
    xhr.addEventListener('load',function () {
      resolve(JSON.parse(this.response));
    })

  })
}

Utils.getPhotos=function(page,source){
  var page=page || 0;
  var source=source || '500px';
  return Utils.request('http://test.facelending.com:3000/?source=' + source + '&page=' + page);
}

export default Utils;
