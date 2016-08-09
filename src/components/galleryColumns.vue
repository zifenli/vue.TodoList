<template>
  <div class="container">
    <div class="gallery">gallery</div>
  </div>
</template>

<script>
  import Application from "../services/gallery_app"
  import GalleryColumns from "../services/gallery_columns"

  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    ready(){
      var columns = 2;
      if (window.innerWidth > 1200) {
        columns = 4
      } else if (innerWidth > 992) {
        columns = 3
      } else if (innerWidth > 768) {
        columns = 2
      }

      new Application(new GalleryColumns('.gallery', columns));
    }
  }
</script>
