<template>
  <div class="">
    <h1>{{ msg }}</h1>
    {{getLocation}}
    <!-- Drop Down List Location  -->
      <select :disabled="switchLocation" v-model="getLocation5" @click="queryLocation()">
      <option v-for="dropdownLocations in dropdownLocations" v-bind:value="dropdownLocations.value">
          {{ dropdownLocations.text }}
      </option>
     </select>
     <span>Selected Location : {{ getLocation5 }}</span><br><br>
     <!-- Drop Down DB engine  -->
      <div  v-show="showDBengine">
      <select v-model="getDBengine" @click="queryDBengine()">
       <option v-for="dropdownDBengine in dropdownDBengine " v-bind:value="dropdownDBengine.value" v-show = "dropdownDBengine.value.status !== 0">
           {{ dropdownDBengine.value.text  }}
       </option>
      </select>
      <span>Selected DB engine : {{ getDBengine.text   }}</span><br><br>
      <!-- Drop Down Class of DB  -->
       <div  v-show="showClassDB" @click="queryClassDeploy()">
       <select v-model="getClassDB" >
        <option v-for="dropdownClassDB in dropdownClassDB " v-bind:value="dropdownClassDB.newClass">
            {{ dropdownClassDB.newClass  }}
        </option>
       </select>
       <span>Selected Class of DB : {{ getClassDB }}</span><br><br>
     </div>
     <!-- Drop Down Deployment type of DB  -->
      <div  v-show="showDeploy" @click="queryClassDeploy()">
      <select v-model="getDeploy" >
          <option>Single-AZ</option>
          <option>Multi-AZ</option>
      </select>
      <span>Selected Deployment type of DB : {{ getDeploy   }}</span><br><br>
    </div>

     {{dataQLocation.length}}
     {{dataQClassDeploy}}
  </div>
</template>

<script>
export default {
  props: ['getLocation'],
  data () {
    return {
      msg: 'RDS',
      dataQLocation: [],
      dataQDBengine: [],
      dataQClassDeploy: [],
      // -----------------------
      getLocation5: '-',
      getLocation6: '',
      getDBengine: '-',
      getDBengine2: '',
      getClassDB: '-',
      getClassDB2: '',
      getDeploy: 'Single-AZ',
      getDeploy2: '',
      // -----------------------
      dropdownLocations: [
       { text: 'US-East / US Standard (Virginia)', value: 'US East (N* Virginia)' },
       { text: 'US-West-2 (Oregon)', value: 'US West (Oregon)' },
       { text: 'US-West (Northern California)', value: 'US West (N* California)' },
       { text: 'Europe (Ireland)', value: 'EU (Ireland)' },
       { text: 'Europe Central (Frankfurt)', value: 'EU (Frankfurt)' },
       { text: 'Asia Pacific (Singapore)', value: 'Asia Pacific (Singapore)' },
       { text: 'Asia Pacific (Japan)', value: 'Asia Pacific (Tokyo)' },
       { text: 'Asia Pacific (Sydney)', value: 'Asia Pacific (Sydney)' },
       { text: 'Asia Pacific (Seoul)', value: 'Asia Pacific (Seoul)' },
       { text: 'Asia Pacific (Mumbai)', value: 'Asia Pacific (Mumbai)' },
       { text: 'South America (Sao Paulo)', value: 'South America (Sao Paulo)' }],
      dropdownDBengine: [
        { value: {text: 'Aurora', db: 'Amazon Aurora', status: 1} },
        { value: {text: 'MySQL', db: 'MySQL', status: 1} },
        { value: {text: 'MariaDB', db: 'MariaDB', status: 1} },
        { value: {text: 'PostgreSQL', db: 'PostgreSQL', status: 1} },
        { value: {text: 'Oracle', db: 'Oracle', dbedit: 'Enterprise', status: 1} },
        { value: {text: 'Oracle', db: 'Oracle', dbedit: 'Standard One', status: 1} },
        // { value: {text: 'SQL Server (BYOL: EE, SE)', db: 'SQL Server', status: 1} },
        { value: {text: 'SQL Server (Enterprise Edition License Included)', db: 'SQL Server', dbedit: 'Enterprise', status: 1} },
        { value: {text: 'SQL Server (Express License Included)', db: 'SQL Server', dbedit: 'Express', status: 1} },
        { value: {text: 'SQL Server (Standard License Included)', db: 'SQL Server', dbedit: 'Standard', status: 1} },
        { value: {text: 'SQL Server (Web License Included)', db: 'SQL Server', dbedit: 'Web', status: 1} }
      ],
      dropdownClassDB: []
    }
  },
  computed: {
    showDBengine: function () {
      if (this.dataQLocation.length !== 0) {
        return true
      } else {
        return false
      }
    },
    showClassDB: function () {
      if (this.dataQDBengine.length !== 0) {
        return true
      } else {
        return false
      }
    },
    showDeploy: function () {
      if (this.dataQDBengine.length !== 0) {
        return true
      } else {
        return false
      }
    },
    switchLocation: function () {
      var vm = this
      if (vm.getLocation === '-') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    queryLocation: function () {
      if (this.getLocation5 !== '-' && this.getLocation5 !== this.getLocation6) {
        // Clear Data -----------
        this.getDBengine = '-'
        // --- DATA -------
        this.dataQLocation = []
        this.dataQDBengine = []
        this.dataQClassDeploy = []
        // --- Drop down -------
        //  ---------------------
        this.getLocation6 = this.getLocation5
        this.$http.get('https://aws-amazon-fe7a5.firebaseio.com/RDS/products.json').then(function (res) {
          var arrData = Object.keys(res.body).map(key => res.body[key])
          arrData.forEach(item => {
            if (item.attributes.location === this.getLocation) {
              this.dataQLocation.push(item)
            }
          })
        })
      }
    },
    queryDBengine: function () {
      if (this.getDBengine !== '-' && this.getDBengine !== this.getDBengine2) {
        // Clear Data -----------
        // --- DATA -------
        this.dataQDBengine = []
        // --- Drop down -------
        this.dropdownClassDB = []
        //  ---------------------
        this.getDBengine2 = this.getDBengine
        var arrData = Object.keys(this.dataQLocation).map(key => this.dataQLocation[key])
        arrData.forEach(item => {
          // if (this.getDBengine.text === 'SQL Server (BYOL: EE, SE)') {
          //   if (item.attributes.databaseEngine === this.getDBengine.db && item.attributes.licenseModel === 'Bring your own license') {
          //     this.dataQDBengine.push(item)
          //     this.getDropdownClass(item)
          //   }
          // }
          if (this.getDBengine.text === 'Aurora' || this.getDBengine.text === 'MySQL' || this.getDBengine.text === 'MariaDB' || this.getDBengine.text === 'PostgreSQL') {
            if (item.attributes.databaseEngine === this.getDBengine.db && item.attributes.licenseModel === 'License included') {
              this.dataQDBengine.push(item)
              this.getDropdownClass(item)
            }
          } else {
            if (item.attributes.databaseEngine === this.getDBengine.db && item.attributes.databaseEdition === this.getDBengine.dbedit && item.attributes.licenseModel === 'License included') {
              this.dataQDBengine.push(item)
              this.getDropdownClass(item)
            }
          }
        })
      }
    },
    getDropdownClass: function (item) {
      // แยก Class of DB ลงใน  dropdownRAM
      let ClassExist = this.dropdownClassDB.find(function (Class) {
        return Class.newClass === item.attributes.instanceType.replace('*', '.')
      })
      if (!ClassExist) {
        let newClass = item.attributes.instanceType.replace('*', '.') // สลับตัว * เป็น .
        newClass = { newClass }
        this.dropdownClassDB.push(newClass)
      }
      console.log('aa')
      this.dropdownClassDB.sort()
      // --------------------------
    },
    queryClassDeploy: function () {
      if (this.getClassDB !== '-' && this.getClassDB !== this.getClassDB2 || this.getDeploy !== this.getClassDB2) {
        // Clear Data -----------
        // --- DATA -------
        this.dataQClassDeploy = []
        // --- Drop down -------
        //  ---------------------
        this.getClassDB2 = this.getClassDB
        var arrData = Object.keys(this.dataQDBengine).map(key => this.dataQDBengine[key])
        arrData.forEach(item => {
          let splDeploy = item.attributes.deploymentOption.split(' ') // ใช้ตัดข้อความ Multi-AZ (SQL Server Mirror) ให้เหลือแต่ Multi-AZ
          if (item.attributes.instanceType === this.getClassDB.replace('.', '*') && splDeploy[0] === this.getDeploy) {
            this.dataQClassDeploy.push(item.sku)
          }
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
