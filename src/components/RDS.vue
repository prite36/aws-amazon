<template>
  <div id="RDS">
<RDS :get-location="getLocation" :fu-pricerds="fuPricerds" :price-rds="priceRds"></RDS>
<div class="price5">RDS_CALCULAROT</div>
<div class ="b1" >
    <div class ="box02" >
    <div class="deploy_block">
    <div class="deploy_block_step">1</div>
    <h3>DataBase Engine</h3>
    </div>

    <div class="tab_dropdown">
     <div class="box_icon"><img src="http://upic.me/i/cr/acceptdatabase.png" alt=""></div>
     <span class="select" style="height: 120px;">
     <!-- Drop Down DB engine  -->
     <select :disabled="showDBengine"  v-model="getDBengine" style="width: 400px;height: 40px;margin-top: 40px;margin-left: 40px;" @click="queryDBengine()">
       <option v-for="dropdownDBengine in dropdownDBengine " v-bind:value="dropdownDBengine.value" v-show = "dropdownDBengine.value.status !== 0">
          {{ dropdownDBengine.value.text }}
       </option>
     </select>
     <div class="tab_text">
       <span>DB engine: {{ getDBengine.text }} </span><br><br>
     </div>
     <!-- ***************************************** -->
     <!-- Drop Down Class of DB  -->
     <span class="select" style="height: 120px;">
     <select :disabled="showClassDB"  v-model="getClassDB" style="width: 400px;height: 40px;margin-top: 40px;margin-left: 40px;" @click="queryClassDeploy()">
       <option v-for="dropdownClassDB in dropdownClassDB  " v-bind:value="dropdownClassDB.newClass" >
          {{ dropdownClassDB.newClass.replace('*', '.') }}
       </option>
     </select>
     <div class="tab_text">
       <span>DB class of engine: {{ getClassDB }} </span><br><br>
     </div>
     <!-- ***************************************** -->
     <!-- Drop Down Deployment type of DB  -->
    <span class="select" style="height: 120px;">
    <select :disabled="showDeploy" v-model="getDeploy" style="width: 400px;height: 40px;margin-top: 40px;margin-left: 40px;" @click="queryClassDeploy()" >
      <option>Single-AZ</option>
      <option>Multi-AZ</option>
    </select>
    <div class="tab_text">
      <span>Deployment type of DB : {{ getDeploy }} </span><br><br>
    </div>

     <div class="price"><br>RDS Price : <br>$ {{priceRds}}<br><br>  </div>
   </div>
 </div>
</div>





     <!-- Drop Down Deployment type of DB  -->
      <!-- <div  v-show="showDeploy" @click="queryClassDeploy()">
      <select v-model="getDeploy" >
          <option>Single-AZ</option>
          <option>Multi-AZ</option>
      </select>
      <span>Selected Deployment type of DB : {{ getDeploy   }}</span><br><br>
    </div> -->



  </div>
</template>

<script>
export default {
  props: ['getLocation', 'fuPricerds', 'priceRds'],
  data () {
    return {
      msg: 'RDS',
      allDataRDS: {},
      dataQLocation: [],
      dataQDBengine: [],
      dataQClassDeploy: [],
      // -----------------------
      // getLocation: '-',
      getLocation2: '',
      getDBengine: '-',
      getDBengine2: '',
      getClassDB: '-',
      getClassDB2: '',
      getDeploy: 'Single-AZ',
      getDeploy2: '',
      allData: {},
      // -----------------------
      dropdownDBengine: [
        { value: {text: 'Aurora', db: 'Amazon Aurora', status: 1} },
        { value: {text: 'MySQL', db: 'MySQL', status: 1} },
        { value: {text: 'MariaDB', db: 'MariaDB', status: 1} },
        { value: {text: 'PostgreSQL', db: 'PostgreSQL', status: 1} },
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
        return false
      } else {
        return true
      }
    },
    showClassDB: function () {
      if (this.dataQDBengine.length !== 0) {
        return false
      } else {
        return true
      }
    },
    showDeploy: function () {
      if (this.dataQDBengine.length !== 0) {
        return false
      } else {
        return true
      }
    }
  },
  watch: {
    getLocation: function (val, oldVal) {
      if (this.getLocation !== '-') {
        // Clear Data -----------
        this.getDBengine = '-'
        // --- DATA -------
        this.dataQLocation = []
        this.dataQDBengine = []
        this.dataQClassDeploy = []
        // --- Drop down -------
        //  ---------------------
        this.getLocation2 = this.getLocation
        // *****************************************
        var arrData = {}
        if (Object.keys(this.allDataRDS).length === 0) {
          this.$http.get('https://aws-amazon-fe7a5.firebaseio.com/RDS/products.json').then(function (res) {
            this.allDataRDS = JSON.parse(JSON.stringify(res.body))
            arrData = Object.keys(res.body).map(key => res.body[key])
            arrData.forEach(item => {
              if (item.attributes.location === this.getLocation) {
                this.dataQLocation.push(item)
              }
            })
          })
        } else {
          arrData = Object.keys(this.allDataRDS).map(key => this.allDataRDS[key])
          arrData.forEach(item => {
            if (item.attributes.location === this.getLocation) {
              this.dataQLocation.push(item)
            }
          })
        }
        // *****************************************
      }
    },
    getClassDB: function (val, oldVal) {
      this.priceSum()
    }
  },
  methods: {
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
            // if (item.attributes.databaseEngine === this.getDBengine.db && item.attributes.licenseModel === 'License included') {
            if (item.attributes.databaseEngine === this.getDBengine.db) {
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
            this.dataQClassDeploy.push(item)
          }
        })
      }
    },
    priceSum: function () {
      let sku = this.dataQClassDeploy[0].sku
      let text = 'https://aws-amazon-fe7a5.firebaseio.com/RDS/terms/OnDemand/' + sku + '/' + sku + '*JRTCKXETXF/priceDimensions/' + sku + '*JRTCKXETXF*6YS6EN2CT7/pricePerUnit/USD.json'
      this.$http.get(text).then(function (res) {
        this.priceRds = res.body.replace('*', '.')
        this.fuPricerds(this.priceRds)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1, h2 {
  font-weight: normal;
}*/
#RDS{
    /*background-color: #FFFFFF;
    /*height: 100%;*/
    width: 100%;
    /*border: 1px solid black;*/
    background-color: #FFFFFF;
    height: 100vh;
    width:  100%;
    margin: 0;
    padding: 0;
    font-size: 100%;
}
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
.price {


  width: 300px;
  padding: 0% 1% 0% 1%;
  box-sizing: border-box;
  position:relative;
  margin:0px auto 50px auto;
  outline: none;
  text-align: center;
  font-size:17px;
  border: 3px solid #FF8F00;
background-color: #FFD54F;
  font-family: fantasy;
  letter-spacing: 2.5pt;
}
h3 {
  font-size:20px;
  line-height:28px;
  margin:15px 10px 30px 10px;
  color:#363B40;
  font-weight:500;
  float: left;
}

gg{
  background-color: red;
border: 3px solid #4caf50;
}

.price5{
  width: 300px;
  padding: 1% 100% 1% 25%;


  text-align: center;
  font-size:30px;

  font-family: fantasy;
  letter-spacing: 1.5pt;
  border: 3px solid #FF8F00;

background-color: #FFD54F;

}

.b1{
  max-width:1170px;
  min-width:360px;
  position:relative;
  padding-left:60px;
  margin-bottom:30px;
  margin:0px auto 50px auto;
  padding:0px 30px;

}
</style>
