<template>
  <div>
    <map
      id="map"
      longitude="114.347997"
      latitude="30.571331"
      scale="16"
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
      latitude: 30.571331,
      longitude: 114.347997,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: '#FF0000DD',
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/static/images/Location2.svg',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
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
