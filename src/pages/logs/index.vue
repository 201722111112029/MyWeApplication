<template>
  <div>
    <map
      id="map"
      longitude="114.347997"
      latitude="30.571331"
      scale="14"
      :controls="controls"
      @controltap="controltap($event)"
      :markers="markers"
      @markertap="markertap($event)"
      :polyline="polyline"
      @regionchange="regionchange($event)"
      show-location
      style="width: 100%; height: 100%;"
    ></map>
  </div>
</template>

<script>
export default {
data () {
    return {
    markers: [{
      iconPath: '/static/images/home.png',
      id: 0,
      latitude: 30.571331,
      longitude: 114.347997,
      width: 50,
      height: 50
    }],
   }
  },
  methods: {
      regionchange(event) {
        console.log(event)
      },
      markertap(event) {
        console.log(event)
      },
      controltap(event) {
        console.log(event)
      }
  },
  created:{
  },
}
</script>
<style>
body,html{height:100%}
</style>
