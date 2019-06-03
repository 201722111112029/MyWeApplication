<template>
  <div>
    <map
      id="map"
      longitude="114.335976"
      latitude="30.562152"
      scale="12"
      :controls="controls"
      @controltap="controltap($event)"
      :markers="markers"
      @markertap="markertap($event)"
      :polyline="polyline"
      @regionchange="regionchange($event)"
      show-location
      style="width: 100%; height: 100vh;"
    ></map>
  </div>
</template>

<script>
export default {
data () {
    return {
    markers: [{
      iconPath: '/static/images/location1.svg',
      id: 0,
      latitude: 30.562152,
      longitude: 114.335976,
      width: 25,
      height: 25
    }],
    polyline: [{
      points: [{
        longitude: 114.335976,
        latitude: 30.562152
      }, {
        longitude: 114.227812,
        latitude: 30.560539
      }],
      color: '#FF0000DD',
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/static/images/location2.svg',
      position: {
        left: 0,
        top: 300 - 50,
        width: 25,
        height: 25
      },
      clickable: true
    }]
    }
  },
  methods: {
      controltap(event) {
        console.log(event)
      },
      markertap(event) {
        console.log(event)
      },
      regionchange(event) {
        console.log(event)
      },
  }
}
</script>
<style>
</style>
