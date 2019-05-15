<template>
  <div>
           <i-input :value="name" title="书名" autofocus placeholder="名称" />
           <i-input :value="introduction" title="关于本书" placeholder="介绍" />
           <i-input :value="type" title="作品类型" placeholder="类型" />
           <i-input :value="price" title="作品价格" placeholder="价格" />
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      name:"",
      introduction:"",
      type:"",
      price:""
    }
    
  },

  components: {
    card
  },
  
  methods: {
  },

  created () {

  }
}
</script>

<style scoped>
</style>
