<template>
  <div>
    @你的专属书单！
    <i-cell-group>
    <i-cell title="只显示箭头" is-link>只显示箭头</i-cell>
    <i-cell title="跳转到首页" is-link url="../../../src/pages/dashboard/index">跳转到首页</i-cell>
    <i-cell title="只有 footer 点击有效" is-link url="/pages/dashboard/index" only-tap-footer>这个只有footer点击有效</i-cell>
    <i-cell title="开关">
        <switch slot="footer" checked />
    </i-cell>
</i-cell-group>
  </div>
</template>

<script>
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
