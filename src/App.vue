<template>
  <div id="app">
      <!-- <button @click="Test()">GET DATA</button>
       {{dropdownrds}} -->
       <nav class="nav_has-shadow"></nav>
       <EC2 :get-location="getLocation" :fu-location="fuLocation" :fu-priceec2="fuPriceec2":price-ec2="priceEc2"></EC2>
       <RDS :get-location="getLocation" :fu-pricerds="fuPricerds" :price-rds="priceRds"></RDS><br>
       <input type="radio" id="Hour" value="Hour" v-model="typePrice">
      <label for="one">Hour</label>
      <br>
      <input type="radio" id="Day" value="Day" v-model="typePrice">
      <label for="two">Day</label>
      <br>
      <input type="radio" id="Month" value="Month" v-model="typePrice">
      <label for="two">Month</label>
      <br>
      <span>Type: {{ typePrice }}</span>
      <br><br>{{totalPrice}}
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
      dropdownrds: [],
      priceEc2: 0,
      priceRds: 0,
      totalPrice: 0,
      typePrice: 'Day'
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
    },
    fuPriceec2: function (ec2) {
      this.priceEc2 = ec2
    },
    fuPricerds: function (rds) {
      this.priceRds = rds
    },
    calPrice: function (ec2, rds, type) {
      if (type === 'Hour') {
        this.totalPrice = (parseInt(ec2)) + (parseInt(rds))
      } else if (type === 'Day') {
        this.totalPrice = (ec2 * 24) + (rds * 24)
      } else if (type === 'Month') {
        this.totalPrice = (ec2 * 24 * 30) + (rds * 24 * 30)
      }
    }
  },
  watch: {
    priceEc2: function (val, oldVal) {
      this.calPrice(this.priceEc2, this.priceRds, this.typePrice)
    },
    priceRds: function (val, oldVal) {
      this.calPrice(this.priceEc2, this.priceRds, this.typePrice)
    },
    typePrice: function (val, oldVal) {
      this.calPrice(this.priceEc2, this.priceRds, this.typePrice)
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
  padding: 0% 0% 0% 0%;
  margin:0px 0px 100px 110px;color:#616366;font-family:"Raleway", Helvetica, Arial, sans-serif;font-size:15px;font-weight:300;line-height:25px;
}
#app {
  color: #2c3e50;
  /*max-width:1170px;
  min-width:900px;*/
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
  height: 100%;
  width: 100%;
  background-color: #FFFFFF;

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
.header {
  height: 10%;
  }

</style>
