<template>
  <div @click="clickHandle">
    你的书架上都有这些书
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
    card
  },
  
  methods: {
  },

  created () {
        this.$http.get('https://www.baidu.com', 'param').then((res)=>{
        console.log('res', res)
      }).catch(err=>{
      })
    // let app = getApp()
  }
}
</script>

<style scoped>
</style>
