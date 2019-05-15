<template>
  <div>
    <i-panel title="我的分享">
           <i-input :value="name" @change="changeName($event)" title="书名" autofocus placeholder="名称" maxlength="20"/>
           <i-input :value="introduction" @change="changeIntroduction($event)" title="关于本书" placeholder="介绍"  maxlength="50"/>
           <i-input :value="type" @change="changeType($event)" title="作品类型" placeholder="类型"  maxlength="20"/>
           <i-input :value="value" @change="changeValue($event)" title="推荐价格" placeholder="价格" maxlength="20" />
           <i-button @click="handleClick()">提交分享</i-button>
           <i-toast id="toast" />
    </i-panel >
  </div>
</template>

<script>
const { $Toast } = require('../../../static/dist/base/index');
import card from '@/components/card'

export default {
  data () {
    return {
      name: "",
      introduction: "",
      type: "",
      value: ""
    }  
  },

  components: {
    card
  },
  
  methods: {
      changeName(event){
      console.log(event)
      this.name = event.mp.detail.detail.value
    },
      changeIntroduction(event){
      console.log(event)
      this.introduction = event.mp.detail.detail.value
    },
      changeType(event){
      console.log(event)
      this.type = event.mp.detail.detail.value
    },
      changeValue(event){
      console.log(event)
      this.value = event.mp.detail.detail.value
    },
    handleClick(){
      if(this.name && this.introduction && this.type && this.value){
        let event = {
          name: this.name,
          introduction: this.introduction,
          type: this.type,
          value: this.value,
          webAddress:'cloud://book-a8926e.626f-book-a8926e/red&black.jpg' 
        }
              wx.cloud.callFunction({name:'new_book', data: event}).then(
                res => {
                  console.log(res)
                }
              )
        $Toast({
            content: '分享成功',
            type: 'success'
        });
       }else{
       $Toast({
            content: '分享失败(请填入相关信息)',
            type: 'warning'
        });        
      }
    }
  },

  created () {

  }
}
</script>

<style scoped>
</style>
