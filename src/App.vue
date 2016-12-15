<template>
  <div id="app">
      <!-- <button @click="Test()">GET DATA</button>
       {{dropdownrds}} -->
       <nav class="nav_has-shadow"></nav>
       <EC2 :get-location="getLocation" :fu-location="fuLocation"></EC2>
       <br><br> RDS Calculator
       <RDS :get-location="getLocation" ></RDS>

      <transition name="slide-fade" mode="out-in">
      </transition>
  </div>
</template>

<script>
import EC2 from './components/EC2.vue'
import RDS from './components/RDS.vue'
export default {
  name: 'app',
  components: {
    EC2,
    RDS
  },
  data () {
    return {
      getLocation: '-',
      dropdownrds: []
    }
  },
  methods: {
    Test: function () {
      this.$http.get('https://aws-amazon-fe7a5.firebaseio.com/RDS/products.json').then(function (res) {
        var arrData = Object.keys(res.body).map(key => res.body[key])
        arrData.forEach(item => {
          let CPUExist = this.dropdownrds.find(function (vCPU) {
            return vCPU.newvCPU === item.attributes.deploymentOption
          })
          if (!CPUExist) {
            let newvCPU = item.attributes.deploymentOption
            newvCPU = { newvCPU }
            this.dropdownrds.push(newvCPU)
          }
        })
      })
    },
    fuLocation: function (getLocation) {
      this.getLocation = getLocation
    }
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #FFFFFF;
  margin:0px 0px 100px 110px;color:#616366;font-family:"Raleway", Helvetica, Arial, sans-serif;font-size:15px;font-weight:300;line-height:25px;
}
#app {
  color: #2c3e50;
  /*max-width:1170px;
  min-width:360px;*/
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;

}
#app a {
  color: #42b983;
  text-decoration: none;
}
.nav {
  border-bottom: 2px solid #00d1b2;
  margin-bottom: 5vh;
}
.nav_has-shadow {
  width: 100%;
  background-color: #00d1b2;
  height: 7%;
}
</style>
