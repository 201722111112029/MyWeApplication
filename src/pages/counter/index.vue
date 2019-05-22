<template>
  <div>
    <i-panel title="分类推荐">
      <view>
        <i-card i-class="split" v-for="item in recommand" :key="item" :title="item.name" :extra="item.price" :thumb="item.img">
            <view slot="content">推荐理由：{{item.remark}}</view>
            <view slot="footer">作者：{{item.address}}</view>
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
      recommand: [
    {"id":1,"name":"我们仨","address":"杨绛","remark":"《我们仨》是钱钟书夫人杨绛撰写的家庭生活回忆录。","img":"cloud://book-a8926e.626f-book-a8926e/我们三.jpg","type":1,"price":"￥50"},
    {"id":2,"name":"苏菲的世界","address":"乔斯坦·贾德著","remark":"《苏菲的世界》既是小说又是哲学史，因此哲学是其贯穿始终的主题也就不奇怪了。哲学并非以那种无事可做的人进行深奥思考的面目出现，而是作为与生活相统一的事物而出现。","img":"cloud://book-a8926e.626f-book-a8926e/苏菲的世界.jpg","type":2,"price":"￥50"},
    {"id":3,"name":"目送","address":"龙应台","remark":"这些作品中温情的语言，如一剂醒脑益智的良药，使我们深陷尘世羁绊的心灵，一次次得到解脱和自省。","img":"cloud://book-a8926e.626f-book-a8926e/目送.jpg","type":3,"price":"￥50"},
    {"id":4,"name":"三体","address":"刘慈欣","remark":"讲述了地球人类文明和三体文明的信息交流、生死搏杀及两个文明在宇宙中的兴衰历程。其第一部经过刘宇昆翻译后获得了第73届雨果奖最佳长篇小说奖。","img":"cloud://book-a8926e.626f-book-a8926e/三体.jpg","type":4,"price":"￥50"},
    {"id":5,"name":"明朝那些事儿","address":"当年明月","remark":"语言幽默风趣。对明朝十七帝和其他王公权贵和小人物的命运进行全景展示，尤其对官场政治、战争、帝王心术着墨最多，并加入对当时政治经济制度、人伦道德的演义。","img":"cloud://book-a8926e.626f-book-a8926e/明朝那些事.jpg","type":5,"price":"￥50"}
    ]
    }
  },

  onLoad (option){
    console.log(option.type)
    this.recommand = require('@/data/' + option.type + '.json')
  },

  created () {
  }
}
</script>

<style scoped>
div >>> .split {
  margin-bottom: 10pt;
}
</style>