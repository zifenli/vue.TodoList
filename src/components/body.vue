<template>
    <div style="border:1px solid #aaa">
      <p >这是item1的内容</p>
      <p v-show="">这是item2的内容</p>
    </div>
</template>
<style>

</style>
<script>
export default{
  data () {
    return {
      txt: 'body'
    }
  },
  props: ['itemIndex']
}
</script>
