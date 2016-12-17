<template>
  <div id="app">
      <!-- <button @click="Test()">GET DATA</button>
       {{dropdownrds}} -->

      <div class="price9">Amazon</div>
      <EC2 :get-location="getLocation" :fu-location="fuLocation" :fu-priceec2="fuPriceec2":price-ec2="priceEc2"></EC2>
      <RDS :get-location="getLocation" :fu-pricerds="fuPricerds" :price-rds="priceRds"></RDS>



    <div class="radio01">
       <input type="radio" id="Hour" value="Hour" v-model="typePrice">
      <label for="one">Hour</label>
      &nbsp;&nbsp;
      <input type="radio" id="Day" value="Day" v-model="typePrice">
      <label for="two">Day</label>
      &nbsp;&nbsp;
      <input type="radio" id="Month" value="Month" v-model="typePrice">
      <label for="two">Month</label>
      <br><br>
      <input type="radio" id="usd" value="usd" v-model="currency">
      <label for="two">$</label>
      &nbsp;&nbsp;
      <input type="radio" id="thb" value="thb" v-model="currency">
      <label for="two">฿</label>
    </div>

   <!-- ********************** -->

   <div class="Showsum">
  <div style= "float: left;">
  </div>

   <p class="inset"> {{totalPrice}}</p>
   </div>
   <br>
     <div class="signup-form--container">
   <div class="signup-form--container--inner">
             <div class="herounit__signup">
               <div class="herounit__title">
                 <div class="herounit__title-heading">Thanks for watching</div>
                 <p class="signup-form__text">EC2 & RDS : Calculate</p>
                 <a href="#" class="btn btn-hero btn-hero--white">Home</a>
               </div>
             </div>
           </div>
           </div>


   <a rel="nofollow" style="display:scroll;position:fixed;bottom:10px;right:5px;" href="#" title="Back to Top"><img src="http://2.bp.blogspot.com/-BkNGUImcIV4/USDcBMHYjqI/AAAAAAAAAig/qEtwRO4pH6Q/s1600/back+to+top.png "/></a><!--mybloggersworld.com-->






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
      typePrice: 'Day',
      currency: 'usd'
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
      let cer = 0
      let icon = ' $ '
      console.log(cer + icon)
      if (this.currency === 'thb') {
        cer = 35.8
        icon = ' ฿ '
      } else {
        cer = 1
        icon = '$'
      }
      if (type === 'Hour') {
        this.totalPrice = icon + ((parseInt(ec2)) + (parseInt(rds)) * cer).toFixed(2) + '/ Hr'
      } else if (type === 'Day') {
        this.totalPrice = icon + ((ec2 * 24) + (rds * 24) * cer).toFixed(2) + '/ Day'
      } else if (type === 'Month') {
        this.totalPrice = icon + ((ec2 * 24 * 30) + (rds * 24 * 30) * cer).toFixed(2) + '/ Month'
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
    },
    currency: function (val, oldVal) {
      this.calPrice(this.priceEc2, this.priceRds, this.typePrice)
    }
  },
  computed: {

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


  /*********************************/
  .Showsum{
/*border-style: groove;*/
padding-left: 40%;
padding-right: 38%;
text-align: center;
}
.inset{
       width: 100%;
       padding: 5% 10% 5% 10%;
       box-sizing: border-box;
       outline: none;
       text-align: center;
       font-size:17px;
       border: 3px solid #FF8F00;
background-color: #FFD54F;
       font-family: fantasy;
       letter-spacing: 2.5pt;
   }
div{
align-content: center;
}
h1{
  align-content: center;
}
h3{
  text-align: left;
}
.signup-form--container--inner {
    height: 100%;
     transition: opacity .2s;
      background: linear-gradient(to bottom,#010101 0,#003197 60%,#5540cb 100%);
}
.herounit__signup {
    font-size: 18px;
    color: #8abfff;
    margin: 0 auto;
    padding: 80px 0 70px;
    width: 38%;
    min-width: 600px;
    transition: all .4s;
}
.herounit__title {
    margin: 0 auto 40px;
    line-height: 1.45;
    transition: all .4s;
}
.herounit__title-heading {
    font-size: 30px;
    color: #fff;
}
.herounit__signup a {
    padding: .4em 1.5em;
}
.btn-hero--play, .btn-hero--white {
    color: #006dfe;
    background-color: #fff;
}
.btn-hero {
    font-size: 17px;
    box-sizing: border-box;
    height: 2.4em;
    border-radius: 1.2em;
    padding: .6em 1.5em;
}
.btn {
    font-size: 100%;
    text-decoration: none;
    font-family: inherit;
    white-space: nowrap;
    vertical-align: middle;
    border: none;
    display: inline-block;
    cursor: pointer;
}
.price9{
  width: 300px;
  padding: 1% 200% 1% 17%;



  background-color: #FFB300;
  letter-spacing: 1.5pt;

  color: #ffffff;
  font-size: 500%;
  letter-spacing: 7pt;
  font-weight: 900;
  font-family:Engravers MT;
}
.radio01 {
  font-size: 1.5em;
}

o{
color: red;

}


  /*********************************/

</style>
