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
      // -----------------------
      dropdownLocations: [
       { text: 'US-East / US Standard (Virginia)', value: 'US East (N* Virginia)' },
       { text: 'US-West-2 (Oregon)', value: 'US West (Oregon)' },
       { text: 'US-West (Northern California)', value: 'US West (N* California)' },
       { text: 'Europe (Ireland)', value: 'EU (Ireland)' },
       { text: 'Europe Central (Frankfurt)', value: 'EU (Frankfurt)' },
       { text: 'Asia Pacific (Singapore)', value: 'Asia Pacific (Singapore)' },
       { text: 'Asia Pacific (Sydney)', value: 'Asia Pacific (Sydney)' },
       { text: 'Asia Pacific (Seoul)', value: 'Asia Pacific (Seoul)' },
       { text: 'Asia Pacific (Mumbai)', value: 'Asia Pacific (Mumbai)' },
       { text: 'South America (Sao Paulo)', value: 'South America (Sao Paulo)' }]
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
