<template>
  <div id="EC2" style="height: 100vu">



<div class="choicezone">
    <div class ="box02" >
    <div class="deploy_block">
    <div class="deploy_block_step">1</div>
    <h3>Server Location</h3>
    </div>
    </div>


       <div  class="buttonchoice" @click="queryLocation(boxLocations[0].value,1)" :style="{'border-color': bgcolor }" >
           <img src="http://upic.me/i/yf/united-states-of-america.png" alt="" align="center">
           <br><br>US-East / US Standard <br>(Virginia)
     </div>

       <div  class="buttonchoice" @click="queryLocation(boxLocations[1].value,2)" :style="{'border-color': bgcolor2 }">
         <img src="http://upic.me/i/yf/united-states-of-america.png" alt="" align="center">
         <br><br>US-West-2 <br>(Oregon)
     </div>

     <div  class="buttonchoice" @click="queryLocation(boxLocations[2].value,3)" :style="{'border-color': bgcolor3 }">
       <img src="http://upic.me/i/yf/united-states-of-america.png" alt="" align="center">
       <br><br>US-West <br>(Northern California)
     </div>

     <div  class="buttonchoice" @click="queryLocation(boxLocations[3].value,4)" :style="{'border-color': bgcolor4 }">
       <img src="http://upic.me/i/p0/ireland.png" alt="" align="center">
       <br><br>Europe <br>(Ireland)
     </div>

     <div  class="buttonchoice" @click="queryLocation(boxLocations[4].value,5)" :style="{'border-color': bgcolor5 }">
       <img src="http://upic.me/i/57/germany.png" alt="" align="center">
       <br><br>Europe Central <br>(Frankfurt)
     </div>

     <div  class="buttonchoice" @click="queryLocation(boxLocations[5].value,6)" :style="{'border-color': bgcolor6 }">
       <img src="http://upic.me/i/79/singapore.png" alt="" align="center">
       <br><br>Asia Pacific <br>(Singapore)
     </div>

     <div  class="buttonchoice" @click="queryLocation(boxLocations[6].value,7)" :style="{'border-color': bgcolor7 }">
       <img src="http://upic.me/i/o9/japan.png" alt="" align="center">
       <br><br>Asia Pacific <br>(Japan)
     </div>

     <div  class="buttonchoice" @click="queryLocation(boxLocations[7].value,8)" :style="{'border-color': bgcolor8 }">
       <img src="http://upic.me/i/on/australia.png" alt="" align="center">
       <br><br>Asia Pacific <br>(Sydney)
     </div>
     <div  class="buttonchoice" @click="queryLocation(boxLocations[8].value,9)" :style="{'border-color': bgcolor9 }">
       <img src="http://upic.me/i/4h/korea-south.png" alt="" align="center">
       <br><br>Asia Pacific <br>(Seoul)
     </div>

     <div  class="buttonchoice" @click="queryLocation(boxLocations[9].value,10)" :style="{'border-color': bgcolor10 }">
       <img src="http://upic.me/i/x9/india.png" alt="" align="center">
       <br><br>Asia Pacific <br>(Mumbai)
     </div>


     <div class="buttonchoice" @click="queryLocation(boxLocations[9].value,11)" :style="{'border-color': bgcolor11 }">
       <img src="http://upic.me/i/db/brazil.png" alt="" align="center">
       <br><br>South America<br> (Sao Paulo)

     </div>
   </div>



<div class="choiceos">


   <div class ="box02" >
   <div class="deploy_block">
   <div class="deploy_block_step">1</div>
   <h3>Server Type</h3>
   </div>
   </div>

              <div class="buttonchoiceos"@click="queryOS(boxOS[0].value,0)" :style="{'border-color': num }">
               <img src="http://upic.me/i/nz/windows-8-icon-logo-vector-400x400.png" alt="" align="center" width="100px" >
               <br><br>{{nameOS[0].value.text}}
             </div>

             <div class="buttonchoiceos"@click="queryOS(boxOS[1].value,1)" :style="{'border-color': num2 }">
              <img src="http://upic.me/i/nz/windows-8-icon-logo-vector-400x400.png" alt="" align="center"  width="100px">
             <br> {{nameOS[1].value.text}}
            </div>

            <div class="buttonchoiceos"@click="queryOS(boxOS[2].value,2)" :style="{'border-color': num3 }">
             <img src="http://upic.me/i/nz/windows-8-icon-logo-vector-400x400.png" alt="" align="center" width="100px">
             <br>{{nameOS[2].value.text}}
           </div>

           <div class="buttonchoiceos" @click="queryOS(boxOS[3].value,3)" :style="{'border-color': num4 }">
            <img src="http://upic.me/i/nz/windows-8-icon-logo-vector-400x400.png" alt="" align="center" width="100px">
            <br>{{nameOS[3].value.text}}
          </div>

          <div class="buttonchoiceos"  @click="queryOS(boxOS[4].value,4)" :style="{'border-color': num5 }">
           <img src="http://upic.me/i/x5/linux1600.png" alt="" align="center" width="100px">
           <br><br>{{nameOS[4].value.text}}
         </div>

         <div class="buttonchoiceos" @click="queryOS(boxOS[5].value,5)" :style="{'border-color': num6 }">
          <img src="http://upic.me/i/8x/redhat.png" alt="" align="center" width="100px">
         <br> {{nameOS[5].value.text}}
        </div>

        <div class="buttonchoiceos" @click="queryOS(boxOS[6].value,6)" :style="{'border-color': num7 }">
         <img src="http://upic.me/i/nw/esuse.png" alt="" align="center" width="100px">
         <br>{{nameOS[6].value.text}}
       </div>

       </div>
<br>





     <!-- Drop Down List OS  -->

      <!-- <select :disabled="switchOS" v-model="getOS" @click="queryOS()">
       <option v-for="boxOS in boxOS " v-bind:value="boxOS.value" v-show = "boxOS.value.status !== 0">
           {{ boxOS.value.text  }}
       </option>
      </select>
      <span>Selected OS : {{ getOS.text  }}</span><br><br> -->

    <!-- Drop Down List vCPU  -->
<div class="tab">

    <div class ="box02" >
    <div class="deploy_block">
    <div class="deploy_block_step">2</div>
    <h3>vCPU Size</h3>
    </div>
<div class="tab_dropdown">
      <div class="box_icon"><img src="http://upic.me/i/dr/electronics.png" alt=""></div>
      <span class="select" style="height: 120px;">
      <select :disabled="switchCPU" v-model="getCPU" style="width: 300px;height: 40px;margin-top: 40px;margin-left: 40px;" @click="queryCPU()" >
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
    <div class="deploy_block_step">3</div>
    <h3>Memory Size</h3>
    </div>

  <div class="tab_dropdown">
      <div class="box_icon"><img src="http://upic.me/i/pg/memoryslot.png" alt=""></div>
      <span class="select" style="height: 120px;">
      <select :disabled="switchRAM" v-model="getRAM" style="width: 300px;height: 40px;margin-top: 40px;margin-left: 40px;" @click="queryRAM()" >
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
    <div class="deploy_block_step">4</div>
    <h3>Memory Size</h3>
    </div>

    <div class="tab_dropdown">
      <div class="box_icon"><img src="http://upic.me/i/s6/r3hdd.png" alt=""></div>
      <span class="select" style="height: 120px;">
      <select :disabled="switchHDD" v-model="getHDD" style="width: 300px;height: 40px;margin-top: 40px;margin-left: 40px;" @click="queryHDD()" >
        <option v-for="dropdownHDD in dropdownHDD " v-bind:value="dropdownHDD.newHdd" >
           {{ dropdownHDD.newHdd }}
        </option>
      </select>
    <div class="tab_text">
      <span>Selected Storage : {{ getHDD }} </span>
    </div>
    <br>Price : {{priceEc2}}<br><br>
  </div>
  </div>
    <!-- ++++++++++++++++++++++ -->



     <!-- <option v-for="dataQLocation in dataQLocation">
        {{ dataQLocation |JSON }}
    </option> -->
  </div>
</div>
</template>

<script>
export default {
  name: 'EC2',
  props: ['getLocation', 'fuLocation', 'fuPriceec2', 'priceEc2'],
  data () {
    return {
      allDataEC2: {},
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
      bgcolor: '#bdbdbd',
      bgcolor2: '#bdbdbd',
      bgcolor3: '#bdbdbd',
      bgcolor4: '#bdbdbd',
      bgcolor5: '#bdbdbd',
      bgcolor6: '#bdbdbd',
      bgcolor7: '#bdbdbd',
      bgcolor8: '#bdbdbd',
      bgcolor9: '#bdbdbd',
      bgcolor10: '#bdbdbd',
      bgcolor11: '#bdbdbd',
      num: '#bdbdbd',
      num2: '#bdbdbd',
      num3: '#bdbdbd',
      num4: '#bdbdbd',
      num5: '#bdbdbd',
      num6: '#bdbdbd',
      num7: '#bdbdbd',
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
      dropdownHDD: []
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
    queryLocation: function (boxLocations, br) {
      console.log(br)
      if (br === 1) {
        this.bgcolor2 = '#bdbdbd'
        this.bgcolor = '#0d47a1'
        this.bgcolor3 = '#bdbdbd'
        this.bgcolor4 = '#bdbdbd'
        this.bgcolor5 = '#bdbdbd'
        this.bgcolor6 = '#bdbdbd'
        this.bgcolor7 = '#bdbdbd'
        this.bgcolor8 = '#bdbdbd'
        this.bgcolor9 = '#bdbdbd'
        this.bgcolor10 = '#bdbdbd'
        this.bgcolor11 = '#bdbdbd'
      }
      if (br === 2) {
        this.bgcolor = '#bdbdbd'
        this.bgcolor2 = '#0d47a1'
        this.bgcolor3 = '#bdbdbd'
        this.bgcolor4 = '#bdbdbd'
        this.bgcolor5 = '#bdbdbd'
        this.bgcolor6 = '#bdbdbd'
        this.bgcolor7 = '#bdbdbd'
        this.bgcolor8 = '#bdbdbd'
        this.bgcolor9 = '#bdbdbd'
        this.bgcolor10 = '#bdbdbd'
        this.bgcolor11 = '#bdbdbd'
      }
      if (br === 3) {
        this.bgcolor = '#bdbdbd'
        this.bgcolor2 = '#bdbdbd'
        this.bgcolor3 = '#0d47a1'
        this.bgcolor4 = '#bdbdbd'
        this.bgcolor5 = '#bdbdbd'
        this.bgcolor6 = '#bdbdbd'
        this.bgcolor7 = '#bdbdbd'
        this.bgcolor8 = '#bdbdbd'
        this.bgcolor9 = '#bdbdbd'
        this.bgcolor10 = '#bdbdbd'
        this.bgcolor11 = '#bdbdbd'
      }
      if (br === 4) {
        this.bgcolor = '#bdbdbd'
        this.bgcolor2 = '#bdbdbd'
        this.bgcolor3 = '#bdbdbd'
        this.bgcolor4 = '#0d47a1'
        this.bgcolor5 = '#bdbdbd'
        this.bgcolor6 = '#bdbdbd'
        this.bgcolor7 = '#bdbdbd'
        this.bgcolor8 = '#bdbdbd'
        this.bgcolor9 = '#bdbdbd'
        this.bgcolor10 = '#bdbdbd'
        this.bgcolor11 = '#bdbdbd'
      }
      if (br === 5) {
        this.bgcolor = '#bdbdbd'
        this.bgcolor2 = '#bdbdbd'
        this.bgcolor3 = '#bdbdbd'
        this.bgcolor4 = '#bdbdbd'
        this.bgcolor5 = '#0d47a1'
        this.bgcolor6 = '#bdbdbd'
        this.bgcolor7 = '#bdbdbd'
        this.bgcolor8 = '#bdbdbd'
        this.bgcolor9 = '#bdbdbd'
        this.bgcolor10 = '#bdbdbd'
        this.bgcolor11 = '#bdbdbd'
      }
      if (br === 6) {
        this.bgcolor = '#bdbdbd'
        this.bgcolor2 = '#bdbdbd'
        this.bgcolor3 = '#bdbdbd'
        this.bgcolor4 = '#bdbdbd'
        this.bgcolor5 = '#bdbdbd'
        this.bgcolor6 = '#0d47a1'
        this.bgcolor7 = '#bdbdbd'
        this.bgcolor8 = '#bdbdbd'
        this.bgcolor9 = '#bdbdbd'
        this.bgcolor10 = '#bdbdbd'
        this.bgcolor11 = '#bdbdbd'
      }
      if (br === 7) {
        this.bgcolor = '#bdbdbd'
        this.bgcolor2 = '#bdbdbd'
        this.bgcolor3 = '#bdbdbd'
        this.bgcolor4 = '#bdbdbd'
        this.bgcolor5 = '#bdbdbd'
        this.bgcolor6 = '#bdbdbd'
        this.bgcolor7 = '#0d47a1'
        this.bgcolor8 = '#bdbdbd'
        this.bgcolor9 = '#bdbdbd'
        this.bgcolor10 = '#bdbdbd'
        this.bgcolor11 = '#bdbdbd'
      }
      if (br === 8) {
        this.bgcolor = '#bdbdbd'
        this.bgcolor2 = '#bdbdbd'
        this.bgcolor3 = '#bdbdbd'
        this.bgcolor4 = '#bdbdbd'
        this.bgcolor5 = '#bdbdbd'
        this.bgcolor6 = '#bdbdbd'
        this.bgcolor7 = '#bdbdbd'
        this.bgcolor8 = '#0d47a1'
        this.bgcolor9 = '#bdbdbd'
        this.bgcolor10 = '#bdbdbd'
        this.bgcolor11 = '#bdbdbd'
      }
      if (br === 9) {
        this.bgcolor = '#bdbdbd'
        this.bgcolor2 = '#bdbdbd'
        this.bgcolor3 = '#bdbdbd'
        this.bgcolor4 = '#bdbdbd'
        this.bgcolor5 = '#bdbdbd'
        this.bgcolor6 = '#bdbdbd'
        this.bgcolor7 = '#bdbdbd'
        this.bgcolor8 = '#bdbdbd'
        this.bgcolor9 = '#0d47a1'
        this.bgcolor10 = '#bdbdbd'
        this.bgcolor11 = '#bdbdbd'
      }
      if (br === 10) {
        this.bgcolor = '#bdbdbd'
        this.bgcolor2 = '#bdbdbd'
        this.bgcolor3 = '#bdbdbd'
        this.bgcolor4 = '#bdbdbd'
        this.bgcolor5 = '#bdbdbd'
        this.bgcolor6 = '#bdbdbd'
        this.bgcolor7 = '#bdbdbd'
        this.bgcolor8 = '#bdbdbd'
        this.bgcolor9 = '#bdbdbd'
        this.bgcolor10 = '#0d47a1'
        this.bgcolor11 = '#bdbdbd'
      }
      if (br === 11) {
        this.bgcolor = '#bdbdbd'
        this.bgcolor2 = '#bdbdbd'
        this.bgcolor3 = '#bdbdbd'
        this.bgcolor4 = '#bdbdbd'
        this.bgcolor5 = '#bdbdbd'
        this.bgcolor6 = '#bdbdbd'
        this.bgcolor7 = '#bdbdbd'
        this.bgcolor8 = '#bdbdbd'
        this.bgcolor9 = '#bdbdbd'
        this.bgcolor10 = '#bdbdbd'
        this.bgcolor11 = '#0d47a1'
      }
      var vm = this
      vm.getLocation = boxLocations
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
    queryOS: function (getOS, num) {
      this.getOS = getOS
      if (num === 0) {
        this.num = '#0d47a1'
        this.num2 = '#bdbdbd'
        this.num3 = '#bdbdbd'
        this.num4 = '#bdbdbd'
        this.num5 = '#bdbdbd'
        this.num6 = '#bdbdbd'
        this.num7 = '#bdbdbd'
      }
      if (num === 1) {
        this.num = '#bdbdbd'
        this.num2 = '#0d47a1'
        this.num3 = '#bdbdbd'
        this.num4 = '#bdbdbd'
        this.num5 = '#bdbdbd'
        this.num6 = '#bdbdbd'
        this.num7 = '#bdbdbd'
      }
      if (num === 2) {
        this.num = '#bdbdbd'
        this.num2 = '#bdbdbd'
        this.num3 = '#0d47a1'
        this.num4 = '#bdbdbd'
        this.num5 = '#bdbdbd'
        this.num6 = '#bdbdbd'
        this.num7 = '#bdbdbd'
      }
      if (num === 3) {
        this.num = '#bdbdbd'
        this.num2 = '#bdbdbd'
        this.num3 = '#bdbdbd'
        this.num4 = '#0d47a1'
        this.num5 = '#bdbdbd'
        this.num6 = '#bdbdbd'
        this.num7 = '#bdbdbd'
      }
      if (num === 4) {
        this.num = '#bdbdbd'
        this.num2 = '#bdbdbd'
        this.num3 = '#bdbdbd'
        this.num4 = '#bdbdbd'
        this.num5 = '#0d47a1'
        this.num6 = '#bdbdbd'
        this.num7 = '#bdbdbd'
      }
      if (num === 5) {
        this.num = '#bdbdbd'
        this.num2 = '#bdbdbd'
        this.num3 = '#bdbdbd'
        this.num4 = '#bdbdbd'
        this.num5 = '#bdbdbd'
        this.num6 = '#0d47a1'
        this.num7 = '#bdbdbd'
      }
      if (num === 6) {
        this.num = '#bdbdbd'
        this.num2 = '#bdbdbd'
        this.num3 = '#bdbdbd'
        this.num4 = '#bdbdbd'
        this.num5 = '#bdbdbd'
        this.num6 = '#bdbdbd'
        this.num7 = '#0d47a1'
      }
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
        })
      }
    },
    priceSum: function () {
      let sku = this.dataQHDD[0].sku
      let text = 'https://aws-amazon-fe7a5.firebaseio.com/terms/OnDemand/' + sku + '/' + sku + '*JRTCKXETXF/priceDimensions/' + sku + '*JRTCKXETXF*6YS6EN2CT7/pricePerUnit/USD.json'
      this.$http.get(text).then(function (res) {
        this.priceEc2 = res.body.replace('*', '.')
        this.fuPriceec2(this.priceEc2)
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
    height: 100vu;
    width:  100%;
    margin: 0;
    padding: 0;
    font-size: 100%;


}
*		{box-sizing:border-box;}
.choicezone {
  padding-left: 17%;
  padding-right: 3%;
  text-align: left;

}
.buttonchoice {
  width: 12%;
    height: 18.2vh;
    border: 1px solid #bdbdbd;
    border-width: 2px;
    border-radius: 5%;
    display: inline-table;
      cursor: pointer;
     margin: 7px;
     padding: 17px;
     text-align: center;;
     background-color: #ffffff;



}
.buttonchoice:hover {
  border: 1px solid #1e88e5;
}
.buttonchoice:active{
  background-color: #bbdefb;
}
.choiceos {
  padding-left: 17%;
  padding-right: 3%;
  text-align: left;
}
.buttonchoiceos {
  width: 10vw ;
  height: 24.5vh;
  border: 1px solid #bdbdbd;
  border-width: 2px;
  border-radius: 5%;
  display: inline-table;
  cursor: pointer;
   margin: 7px;
   padding: 17px;
   text-align: center;;
   background-color: #ffffff;
}
.buttonchoiceos:hover {
  border: 2px solid #0d47a1;
  background-color: #e0f7fa;
}
.buttonchoiceos:active{
  background-color: #bbdefb;
}


.tab{

  height: 100%;
  width:  100vu;
  margin-top: -1%;
  padding: 0%;
  font-size: 100%;
}





.box02 {
  max-width:1170px;
  min-width:360px;
  position:relative;
  padding-left:60px;
  margin-bottom:30px;
  margin:0px auto 50px auto;
  padding:0px 30px;
  overflow: hidden;
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
