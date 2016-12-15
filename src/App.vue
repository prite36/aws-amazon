<template>
  <div id="app">
      <!-- <button @click="Test()">GET DATA</button>
       {{dropdownrds}} -->
       <nav class="nav_has-shadow"></nav>
       <EC2 ></EC2>

      <transition name="slide-fade" mode="out-in">
      </transition>
  </div>
</template>

<script>
import EC2 from './components/EC2.vue'
export default {
  name: 'app',
  components: {
    EC2
  },
  data () {
    return {
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
}
#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
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
