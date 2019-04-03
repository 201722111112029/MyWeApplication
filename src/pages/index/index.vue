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
<i-grid i-class="no-border">
    <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="../../static/images/bookThree.png" />
        </i-grid-icon>
        <i-grid-label>诗歌</i-grid-label>
    </i-grid-item>
        <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="../../static/images/bookThree.png" />
        </i-grid-icon>
        <i-grid-label>散文</i-grid-label>
    </i-grid-item>
        <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="../../static/images/bookThree.png" />
        </i-grid-icon>
        <i-grid-label>解压</i-grid-label>
    </i-grid-item>
</i-grid>
<i-card i-class="top-padding" title="卡片标题" extra="额外内容" thumb="https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?cs=srgb&dl=blur-blurred-book-46274.jpg&fm=jpg">
    <view slot="content">为什么要读点哲学？这本书帮你摸到哲学的门。</view>
    <view slot="footer">入门级哲学经典</view>
</i-card>
<i-card i-class="top-padding" title="卡片标题" extra="额外内容" thumb="https://images.pexels.com/photos/1166657/pexels-photo-1166657.jpeg?cs=srgb&dl=book-bookcase-books-1166657.jpg&fm=jpg">
    <view slot="content">曾经落魄潦倒，后来名扬天下的文学大师。</view>
    <view slot="footer">文学家传记</view>
</i-card>
<i-card i-class="top-padding" title="卡片标题" extra="额外内容" thumb="https://images.pexels.com/photos/24576/pexels-photo.jpg?cs=srgb&dl=antique-book-encyclopedia-24576.jpg&fm=jpg">
    <view slot="content">大师的巅峰之作，好看的让你灵魂震颤！</view>
    <view slot="footer">精神养料</view>
</i-card>
<i-card i-class="top-padding" title="卡片标题" extra="额外内容" thumb="https://images.pexels.com/photos/545049/pexels-photo-545049.jpeg?cs=srgb&dl=blanket-bloom-blooming-545049.jpg&fm=jpg">
    <view slot="content">含金量超高的名家随笔，让你与自己的灵魂相遇。</view>
    <view slot="footer">随笔</view>
</i-card>
<i-card i-class="top-padding" title="卡片标题" extra="额外内容" thumb="https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?cs=srgb&dl=art-blank-blue-1765033.jpg&fm=jpg">
    <view slot="content">点燃对生活的熊熊热情。</view>
    <view slot="footer">诗歌</view>
</i-card>
  </div>
</template>

<script>
import card from '@/components/card'
export default {
  data () {
    return {
      motto: 'Hello miniprograme',
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
    // let app = getApp()
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
