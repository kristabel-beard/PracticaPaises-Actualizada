<template>
  <div class="row">
    <div align="left"><h5>¿Dónde estas en el mundo?</h5></div>
    <div v-for="pais in paises" :key="pais.name" class="col col-3">
      <table align="center"><img :src="pais.flag" :alt="pais.name" width="100" height="60" @click="VerDetalle(pais.alpha3Code)" />
      <p><b>Pais: </b>{{ pais.name }}</p>
      <p><b>Region: </b>{{ pais.region }}</p>
      <p><b>Capital: </b>{{ pais.capital }}</p>
      <p><b>Habitantes: </b>{{ pais.population }}</p></table>
     
     
    </div>
    
  </div>
  
       
</template>

<script>
import service from "../service.js";

export default {
  data() {
    return {
      paises: [],
    };
  },
  async mounted() {
    let response = await service.ObtenerPaises();
    this.paises = response.data;
  },
  methods: {
      VerDetalle(alpha3Code){
          this.$router.push({
              name: 'PaisDetalle',
              params: {
                  id: alpha3Code
              }
          })
      }
  },
};
</script>

<style lang="css" scoped>
table {
   width: 80%;
   border: 1px solid rgb(99, 97, 97);
}
th, td {
   width: 12%;
   text-align: left;
   vertical-align: top;
   border: 1px solid rgb(83, 81, 81);
}
h5{
 font-size: 15px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", "Arial, sans-serif";
  margin-bottom: 3;   
}
p {
  font-size: 10px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", "Arial, sans-serif";
  margin-bottom: 0;
}
</style>