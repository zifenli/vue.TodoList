/**
 * Created by lizifen on 16/8/8.
 */
var Promise=function(executor){
  executor(this.resolve.bind(this),this.reject.bind(this));
}

Promise.prototype.resolve = function (value) {
    setTimeout((function () {
      if (this.onResolve) {
        this.onResolve(value)
      }
    }).bind(this), 0)
}

Promise.prototype.reject = function (reason) {
    setTimeout((function () {
      if (this.onReject) {
        this.onReject(reason)
      }
    }).bind(this), 0)
}

Promise.prototype.then=function(onResolve, onReject){
  this.onResolve=onResolve;
  if(onReject){
    this.onReject = onReject;
  }
}

export default Promise;
