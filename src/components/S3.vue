<template>
  <div class="">
    <h1>{{ msg }}</h1>
    <!-- Drop Down List Location  -->
     <select v-model="getLocation" @click="queryLocation()">
      <option v-for="dropdownLocations in dropdownLocations" v-bind:value="dropdownLocations.value">
          {{ dropdownLocations.text }}
      </option>
     </select>
     <span>Selected Location : {{ getLocation }}</span><br><br>
     <!-- Drop Down List Location  -->
      <select v-model="getLocationt" @click="queryLocation()">
       <option v-for="dropdownLocations in dropdownLocations" v-bind:value="dropdownLocations.value">
           {{ dropdownLocations.text }}
       </option>
      </select>
      <span>Selected Location : {{ getLocationt }}</span><br><br>
     {{dataQLocation}}

  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'S3',
      dataQLocation: [],
      // -----------------------
      getLocation: '-',
      getLocation2: '',
      getLocationt: '-',
      getLocationt2: '',
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
       { text: 'South America (Sao Paulo)', value: 'South America (Sao Paulo)' }]
    }
  },
  methods: {
    queryLocation: function () {
      if ((this.getLocation !== '-' && this.getLocation !== this.getLocation2) && (this.getLocationt !== '-' && this.getLocationt !== this.getLocationt2)) {
        // Clear Data -----------
        // --- DATA -------
        this.dataQLocation = []
        // --- Drop down -------

        //  ---------------------
        this.getLocation2 = this.getLocation
        this.getLocationt2 = this.getLocationt
        this.$http.get('https://aws-amazon-fe7a5.firebaseio.com/S3/products.json').then(function (res) {
          var arrData = Object.keys(res.body).map(key => res.body[key])
          arrData.forEach(item => {
            if (item.attributes.fromLocation === this.getLocation && item.attributes.toLocation === this.getLocationt) {
              this.dataQLocation.push(item.sku)
            }
          })
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
