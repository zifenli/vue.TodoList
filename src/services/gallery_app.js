/**
 * Created by lizifen on 16/8/8.
 */
import Modal from "../services/modal"
//import Utils from "../services/utils"
import photos from "../photos"

var Application = function (gallery) {
  this.gallery = gallery;
  this.modal = new Modal();
  this.source = '500px';
  this.page = 0;
  this.load(photos);

  window.addEventListener('scroll', this.scroll.bind(this))
}

Application.prototype.load = function () {
  this.loaded(photos.getPhotos(this.page++));
}

Application.prototype.loaded = function (photos) {
  this.gallery.append(photos);
}

Application.prototype.scroll = function () {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  if (scrollTop + window.innerHeight >= document.body.clientHeight) {
    this.load();
  }
}

export default Application;
