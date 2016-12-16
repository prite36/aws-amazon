<template>
  <div id="EC2" style="height: 100vu">
    <!-- Drop Down List Location  -->
    <!-- <a class="button"> -->
        <!-- <div class="testbutton"><img src="https://firebasestorage.googleapis.com/v0/b/aws-amazon-fe7a5.appspot.com/o/United-States-of-America.png?alt=media&token=76b363de-b3bc-4a4e-bd54-b5d859ffd69e" placeholder="First name" alt="">
            <br>{{ dropdownLocations[0].text }}
        </div> -->

    <!-- </a> -->
      <!-- <option v-for="dropdownLocations in dropdownLocations" v-bind:value="dropdownLocations.value">
          <a class="button">{{ dropdownLocations.text }}</a>
      </option> -->
     <div class ="box02" >
      <div class="buttonchoice" v-for="boxLocation in boxLocations" @click="queryLocation(boxLocation.value)" >
        <img :src="boxLocation.img" alt="">
        <br>{{ boxLocation.text}}
      </div>
    </div>

     <span>Selected Location : {{ getLocation }}</span><br><br>

     <!-- Drop Down List OS  -->

      <select :disabled="switchOS" v-model="getOS" @click="queryOS()">
       <option v-for="boxOS in boxOS " v-bind:value="boxOS.value" v-show = "boxOS.value.status !== 0">
           {{ boxOS.value.text  }}
       </option>
      </select>
      <span>Selected OS : {{ getOS.text  }}</span><br><br>

    <!-- Drop Down List vCPU  -->
    <div class ="box02" >
    <div class="deploy_block">
    <div class="deploy_block_step">1</div>
    <h3>vCPU Size</h3>
    </div>
    <div class="tab_dropdown">
      <div class="box_icon"><img src="http://upic.me/i/dr/electronics.png" alt=""></div>
      <span class="select" style="height: 120px;">
      <select :disabled="switchCPU" v-model="getCPU" style="width: 250px;height: 40px;margin-top: 40px;margin-left: 40px;" @click="queryCPU()" >
        <option v-for="dropdownCPU in dropdownCPU " v-bind:value="dropdownCPU.newvCPU" >
           {{ dropdownCPU.newvCPU }}
        </option>
      </select>
    <div class="tab_text">
      <span>Selected vCPU : {{ getCPU }} Core</span><br><br>
    </div>
    </div>
    </div>
    <!-- ++++++++++++++++++++++ -->
    <!-- Drop Down List RAM  -->
    <div class ="box02" >
    <div class="deploy_block">
    <div class="deploy_block_step">2</div>
    <h3>Memory Size</h3>
    </div>
    <div class="tab_dropdown">
      <div class="box_icon"><img src="http://upic.me/i/pg/memoryslot.png" alt=""></div>
      <span class="select" style="height: 120px;">
      <select :disabled="switchRAM" v-model="getRAM" style="width: 250px;height: 40px;margin-top: 40px;margin-left: 40px;" @click="queryRAM()" >
        <option v-for="dropdownRAM in dropdownRAM" v-bind:value="dropdownRAM.newRAM" >
           {{ dropdownRAM.newRAM }}
        </option>
      </select>
    <div class="tab_text">
      <span>Selected Memory : {{ getRAM }} </span><br><br>
    </div>
    </div>
    </div>
    <!-- ++++++++++++++++++++++ -->
    <!-- Drop Down List Hdd  -->
    <div class ="box02" >
    <div class="deploy_block">
    <div class="deploy_block_step">3</div>
    <h3>Memory Size</h3>
    </div>
    <div class="tab_dropdown">
      <div class="box_icon"><img src="http://upic.me/i/s6/r3hdd.png" alt=""></div>
      <span class="select" style="height: 120px;">
      <select :disabled="switchHDD" v-model="getHDD" style="width: 250px;height: 40px;margin-top: 40px;margin-left: 40px;" @click="queryHDD()" >
        <option v-for="dropdownHDD in dropdownHDD " v-bind:value="dropdownHDD.newHdd" >
           {{ dropdownHDD.newHdd }}
        </option>
      </select>
    <div class="tab_text">
      <span>Selected Storage : {{ getHDD }} </span><br><br>
    </div>
    </div>
    </div>
    <!-- ++++++++++++++++++++++ -->


      <button @click="priceSum()">GET DATA</button><br>
    <br>{{priceEc2}}<br><br>


     <!-- <option v-for="dataQLocation in dataQLocation">
        {{ dataQLocation |JSON }}
    </option> -->
  </div>
</template>

<script>
export default {
  name: 'EC2',
  props: ['getLocation', 'fuLocation'],
  data () {
    return {
      allDataEC2: [],
      dataQLocation: [],
      dataQOS: [],
      dataQCPU: [],
      dataQRAM: [],
      dataQHDD: [],
      // -------------------

      getOS: '-',
      getOS2: '',
      getCPU: '-',
      getCPU2: '',
      getRAM: '-',
      getRAM2: '',
      getHDD: '-',
      getHDD2: '',
      // -------------------
      boxLocations: [
       { text: 'US-East / US Standard (Virginia)', value: 'US East (N* Virginia)', img: 'http://upic.me/i/yf/united-states-of-america.png' },
       { text: 'US-West-2 (Oregon)', value: 'US West (Oregon)', img: 'http://upic.me/i/yf/united-states-of-america.png' },
       { text: 'US-West (Northern California)', value: 'US West (N* California)', img: 'http://upic.me/i/yf/united-states-of-america.png' },
       { text: 'Europe (Ireland)', value: 'EU (Ireland)', img: 'http://upic.me/i/p0/ireland.png' },
       { text: 'Europe Central (Frankfurt)', value: 'EU (Frankfurt)', img: 'http://upic.me/i/57/germany.png' },
       { text: 'Asia Pacific (Singapore)', value: 'Asia Pacific (Singapore)', img: 'http://upic.me/i/79/singapore.png' },
       { text: 'Asia Pacific (Japan)', value: 'Asia Pacific (Tokyo)', img: 'http://upic.me/i/o9/japan.png' },
       { text: 'Asia Pacific (Sydney)', value: 'Asia Pacific (Sydney)', img: 'http://upic.me/i/on/australia.png' },
       { text: 'Asia Pacific (Seoul)', value: 'Asia Pacific (Seoul)', img: 'http://upic.me/i/4h/korea-south.png' },
       { text: 'Asia Pacific (Mumbai)', value: 'Asia Pacific (Mumbai)', img: 'http://upic.me/i/x9/india.png' },
       { text: 'South America (Sao Paulo)', value: 'South America (Sao Paulo)', img: 'http://upic.me/i/db/brazil.png' }],
      nameOS: [
       { value: {text: 'Windows', os: 'Windows', preInstall: 'NA', status: 1} },
       { value: {text: 'Windows and Std. SQL Server', os: 'Windows', preInstall: 'SQL Std', status: 1} },
       { value: {text: 'Windows and Web SQL Server', os: 'Windows', preInstall: 'SQL Web', status: 1} },
       { value: {text: 'Windows and Enterprise SQL Server', os: 'Windows', preInstall: 'SQL Server Enterprise', status: 0} },
       { value: {text: 'Linux', os: 'Linux', preInstall: 'NA', status: 1} },
       { value: {text: 'Red Hat Enterprise Linux', os: 'RHEL', preInstall: 'NA', status: 1} },
       { value: {text: 'SUSE Linux Enterprise Server', os: 'SUSE', preInstall: 'NA', status: 1} }
      ],
      boxOS: [],
      dropdownCPU: [],
      dropdownRAM: [],
      dropdownHDD: [],
      priceEc2: []
    }
  },
  computed: {
    switchOS: function () {
      if (this.dataQLocation.length !== 0) {
        return false
      } else {
        return true
      }
    },
    switchCPU: function () {
      if (this.dataQOS.length !== 0) {
        return false
      } else {
        return true
      }
    },
    switchRAM: function () {
      if (this.dataQCPU.length !== 0) {
        return false
      } else {
        return true
      }
    },
    switchHDD: function () {
      if (this.dataQRAM.length !== 0) {
        return false
      } else {
        return true
      }
    }
    // priceSum2: function () {
    //   if (this.dataQRAM.length !== 0) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }
  },
  watch: {
    getHDD: function (val, oldVal) {
      this.priceSum()
    }
  },
  components: {},
  methods: {
    queryLocation: function (boxLocation) {
      var vm = this
      vm.getLocation = boxLocation
      if (this.getLocation !== '-' && this.getLocation !== this.getLocation2) {
        // Clear Data -----------
        this.getOS = '-'
        // --- DATA -------
        this.dataQLocation = []
        this.dataQOS = []
        this.dataQCPU = []
        this.dataQRAM = []
        this.dataQHdd = []
        // --- Drop down -------
        this.boxOS = []
        this.boxOS = JSON.parse(JSON.stringify(this.nameOS))
        //  ---------------------
        this.fuLocation(this.getLocation)
        this.getLocation2 = this.getLocation
        var arrData = {}
        if (Object.keys(this.allDataEC2).length === 0) {
          this.$http.get('https://aws-amazon-fe7a5.firebaseio.com/products.json').then(function (res) {
            this.allDataEC2 = JSON.parse(JSON.stringify(res.body))
            arrData = Object.keys(res.body).map(key => res.body[key])
            arrData.forEach(item => {
              if (item.attributes.tenancy === 'Shared' && item.attributes.location === this.getLocation) {
                this.dataQLocation.push(item)
                this.banOS(item.attributes.location)
              }
            })
          })
        } else {
          arrData = Object.keys(this.allDataEC2).map(key => this.allDataEC2[key])
          arrData.forEach(item => {
            if (item.attributes.tenancy === 'Shared' && item.attributes.location === this.getLocation) {
              this.dataQLocation.push(item)
              this.banOS(item.attributes.location)
            }
          })
        }
      }
    },
    banOS: function (location) {
      if (location === 'US East (N* Virginia)') this.boxOS[3].value.status = 1
      // ******************
      else if (location === 'US West (Oregon)') this.boxOS[3].value.status = 1
      else if (location === 'EU (Ireland)') this.boxOS[3].value.status = 1
    },
    queryOS: function () {
      if (this.getOS !== '-' && this.getOS !== this.getOS2) {
        // Clear Data -----------
        this.getCPU = '-'
        // --- DATA -------
        this.dataQOS = []
        this.dataQCPU = []
        this.dataQRAM = []
        this.dataQHdd = []
        // --- Drop down -------
        this.dropdownCPU = []
        // ---------------------
        this.getOS2 = this.getOS
        var arrData = Object.keys(this.dataQLocation).map(key => this.dataQLocation[key])
        arrData.forEach(item => {
          if (item.attributes.operatingSystem === this.getOS.os && item.attributes.preInstalledSw === this.getOS.preInstall) {
            this.dataQOS.push(item)
            // แยก vCPU ลงใน  dropdownCPU
            let CPUExist = this.dropdownCPU.find(function (vCPU) {
              return vCPU.newvCPU === item.attributes.vcpu
            })
            if (!CPUExist) {
              let newvCPU = item.attributes.vcpu
              newvCPU = { newvCPU }
              this.dropdownCPU.push(newvCPU)
            }
            // --------------------------
          }
        })
        // this.dropdownCPU.sort(function (a) {
        //   return a.newvCPU
        // })
      }
    },
    queryCPU: function () {
      if (this.getCPU !== '-' && this.getCPU !== this.getCPU2) {
        // Clear Data -----------
        this.getRAM = '-'
        // --- DATA -------
        this.dataQCPU = []
        this.dataQRAM = []
        this.dataQHdd = []
        // --- Drop down -------
        this.dropdownRAM = []
        //  --------------------
        this.getCPU2 = this.getCPU
        var arrData = Object.keys(this.dataQOS).map(key => this.dataQOS[key])
        arrData.forEach(item => {
          if (item.attributes.vcpu === this.getCPU) {
            this.dataQCPU.push(item)
            // แยก RAM ลงใน  dropdownRAM
            let RAMExist = this.dropdownRAM.find(function (ram) {
              return ram.newRAM === item.attributes.memory
            })
            if (!RAMExist) {
              let newRAM = item.attributes.memory.replace('*', '.') // สลับตัว * เป็น .
              newRAM = { newRAM }
              this.dropdownRAM.push(newRAM)
            }
            // --------------------------
          }
        })
        // this.dropdownRAM.sort(function (a) {
        //   return a.newRAM
        // })
      }
    },
    queryRAM: function () {
      if (this.getRAM !== '-' && this.getRAM !== this.getRAM2) {
        // Clear Data -----------
        this.getHdd = '-'
        // --- DATA -------
        this.dataQRAM = []
        this.dataQHdd = []
        // --- Drop down -------
        this.dropdownHDD = []
        // ---------------------
        this.getRAM2 = this.getRAM
        var arrData = Object.keys(this.dataQCPU).map(key => this.dataQCPU[key])
        arrData.forEach(item => {
          if (item.attributes.memory === this.getRAM.replace('.', '*')) {  // สลับกลับจากตัว . เป็น *  เพื่อเอาไปหาใน Json
            this.dataQRAM.push(item)
            // แยก Hdd ลงใน  dropdownHDD
            let HddExist = this.dropdownHDD.find(function (Hdd) {
              return Hdd.newHdd === item.attributes.storage
            })
            if (!HddExist) {
              let newHdd = item.attributes.storage
              newHdd = { newHdd }
              this.dropdownHDD.push(newHdd)
            }
            // --------------------------
          }
        })
      }
    },
    queryHDD: function () {
      var vm = this
      if (this.getHDD !== '-' && this.getHDD !== this.getHDD2) {
        // Clear Data -----------
        // --- DATA -------
        this.dataQHDD = []
        // ---------------------
        this.getHDD2 = this.getHDD
        var arrData = Object.keys(this.dataQRAM).map(key => this.dataQRAM[key])
        arrData.forEach(item => {
          if (item.attributes.storage === this.getHDD) {  // สลับกลับจากตัว . เป็น *  เพื่อเอาไปหาใน Json
            vm.dataQHDD.push(item)
          }
          console.log(vm.dataQHDD[0])
        })
      }
    },
    priceSum: function () {
      let sku = this.dataQHDD[0].sku
      let text = 'https://aws-amazon-fe7a5.firebaseio.com/terms/OnDemand/' + sku + '/' + sku + '*JRTCKXETXF/priceDimensions/' + sku + '*JRTCKXETXF*6YS6EN2CT7/pricePerUnit/USD.json'
      this.$http.get(text).then(function (res) {
        this.priceEc2 = res.body
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
#EC2{
    background-color: #FFFFFF;
    width:  100vu;
}
*		{box-sizing:border-box;}
.buttonchoice {
  width: 40vh;
  height: 20%;
  border: 1px solid #e6e9eb;
  border-style: solid;
  border-width: 2px;
  border-radius: 3px;
  display: inline-block;
  cursor: pointer;

}
.buttonchoice:hover {
  border: 1px solid #1e88e5;
}
.box02 {
  max-width:1170px;
  min-width:360px;
  position:relative;
  padding-left:60px;
  margin-bottom:30px;
  margin:0px auto 50px auto;
  padding:0px 30px;
  overflow: auto;
}
.deploy_block	{
  position:relative;
  padding-left:60px;
  margin-bottom:30px;
}
.deploy_block_step {
  position:absolute;
  top:30px;
  left:0px;margin-top:-21px;
  height:42px;
  width:42px;
  border:1px solid #D2D8DC;
  color:#8a9399;
  font-size:16px;
  font-weight:500;
  text-align:center;
  line-height:40px;
  border-radius:26px;
}
.box_icon {
  width: 200px;
  height: 200px;
  margin-top: 40px;
  padding: 50px 50px 50px 50px;
  border: 1px solid #e6e9eb;
  border-style: solid;
  border-width: 2px;
  border-radius: 3px;
  display: inline-block;
  float: left;
  background-color: #ECEFF1;

}
.tab_dropdown{
  float: left;
  margin-left: -7em;
  margin-bottom: 40px;
}
.tab_text{
  margin-left: 40px;
  margin-top: 40px;
  font-size:20px;
  letter-spacing: 1px;
  text-align: left;
}
h3 {
  font-size:20px;
  line-height:28px;
  margin:15px 10px 30px 10px;
  color:#363B40;
  font-weight:500;
  float: left;
}
/*--------------------------------------------------*/



</style>
