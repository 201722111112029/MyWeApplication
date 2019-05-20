<template>
  <div>
    <i-notice-bar icon="systemprompt" loop>
    {{time}}诺贝尔文学奖获得者莫言将推新书，望周之！！！！！！！
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
<i-card @click="goType(item.type)" i-class="split" :title="bookList.name" :extra="bookList.value" :thumb="bookList.webAddress">
    <view slot="content" >{{bookList.introduction}}</view>
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
      bookList: [],
      time: '2019年4月3日',
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
        {type:'文学',img:'static\images\bookFour.png',"url":'../counter/main?type=1'},
        {type:'文学',img:'static\images\bookFour.png',"url":'../counter/main?type=2'},
        {type:'文学',img:'static\images\bookFour.png',"url":'../counter/main?type=3'},
        {type:'文学',img:'static\images\bookFour.png',"url":'../counter/main?type=4'},
        {type:'文学',img:'static\images\bookFour.png',"url":'../counter/main?type=5'}
      ],
      recommand: top
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
div >>> .split {
  margin-bottom: 10pt;
}
</style>
