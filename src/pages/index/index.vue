<template>
  <div>
    <i-notice-bar icon="systemprompt" loop>
    {{time}}诺贝尔文学奖获得者莫言将于何时推出下部著作！！！
    </i-notice-bar>

    <swiper
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
      style="height:200px"
    >
    <block v-for="item in imgUrls" :key="item">
      <swiper-item>
        <image :src="item" style="width:100%;"/>
      </swiper-item>
    </block>
  </swiper>

 <i-grid i-class="no-border">
      <i-grid-item @click="goList(item.url)" i-class="no-border" v-for="item in grids" :key="item">
          <i-grid-icon>
              <image :src="item.img" />
          </i-grid-icon>
          <i-grid-label>{{item.type}}</i-grid-label>
      </i-grid-item>
  </i-grid>

<i-panel title="今日店主力推">
<view v-for="item in recommand" :key='item'>
<i-card @click="goType(item.type)" i-class="split" :title="item.name" :extra="item.price" :thumb="item.img">
    <view slot="content" >推荐理由：{{item.remark}}</view>
    <view slot="footer">作者{{item.address}}</view>
</i-card>
</view>
</i-panel>
  </div>
</template>

<script>
import card from '@/components/card'
export default {
  data () {
    return {
      bookList: [],
      time: '2019年5月10日',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      },
      imgUrls: [
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3078637763,533870387&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2823371908,585722294&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1668552235,3376227991&fm=26&gp=0.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,   
       grids: [
        {type:'传记',img:'/static/images/bookFour.png',"url":'../counter/main?type=1'},
        {type:'哲学',img:'/static/images/bookFour.png',"url":'../counter/main?type=2'},
        {type:'情感',img:'/static/images/bookFour.png',"url":'../counter/main?type=3'},
        {type:'科幻',img:'/static/images/bookFour.png',"url":'../counter/main?type=4'},
        {type:'历史',img:'/static/images/bookFour.png',"url":'../counter/main?type=5'}
      ],
      recommand: [],
    }
  },
  components: {
    card
  },
  methods: {
    goList (url) {
      mpvue.navigateTo({ url })
    },
    goType (type) {
      let url = '../counter/main?type=' + type
      mpvue.navigateTo({ url })
    }
  },

  created () {
       const db = wx.cloud.database({ 
           env: 'book-a8926e' })
    db.collection('book_card').get().then(
      res => {
       console.log(res.data)
        this.recommand = res.data
      }
    )
    // let app = getApp()
    //  wx.cloud.callFunction({ name: 'new_book' }).then(
    //   res => {console.log(res)}
// )
  }
}
</script>

<style scoped>
div >>>.no-border{
  border-width:  0pt;
}
div >>> .split {
  margin-bottom: 10pt;
}
</style>
