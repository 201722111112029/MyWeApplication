<template>
  <div>
    <i-notice-bar icon="systemprompt" loop>
    {{time}}诺贝尔文学奖获得者莫言将推新书，望周之！！！！！！！
</i-notice-bar>
    <i-grid i-class="no-border">
    <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="../../static/images/bookFour.png" />
        </i-grid-icon>
        <i-grid-label>传记</i-grid-label>
    </i-grid-item>
        <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="../../static/images/bookFour.png" />
        </i-grid-icon>
        <i-grid-label>哲学</i-grid-label>
    </i-grid-item>
        <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="../../static/images/bookFour.png" />
        </i-grid-icon>
        <i-grid-label>催泪</i-grid-label>
    </i-grid-item>
</i-grid>
<i-grid i-class="no-border">
    <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="../../static/images/bookFour.png" />
        </i-grid-icon>
        <i-grid-label>烧脑</i-grid-label>
    </i-grid-item>
        <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="../../static/images/bookFour.png" />
        </i-grid-icon>
        <i-grid-label>科幻</i-grid-label>
    </i-grid-item>
        <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="../../static/images/bookFour.png" />
        </i-grid-icon>
        <i-grid-label>历史</i-grid-label>
    </i-grid-item>
</i-grid>

<view v-for="bookList in bookList" :key='bookList'>
<i-card  i-class="top-padding" :title="bookList.introduction" :extra="bookList.value" :thumb="bookList.webAddress">
    <view slot="content" >{{bookList.name}}</view>
    <view slot="footer">{{bookList.type}}</view>
</i-card>
</view>


  </div>
</template>

<script>
import card from '@/components/card'
export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      bookList: [],
      time: '2019年4月3日',
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
      const db = wx.cloud.database({ 
          env: 'book-a8926e' })
    db.collection('books').get().then(
      res => {
       console.log(res.data)
        this.bookList = res.data
      }
    )

    // let app = getApp()
     wx.cloud.callFunction({ name: 'zheng' }).then(
      res => {console.log(res)}
)
  }
}
</script>

<style scoped>
div >>>.no-border{
  border-width:  0pt;
}
div >>>.top-padding{
  margin-top: 20pt;
}
</style>
