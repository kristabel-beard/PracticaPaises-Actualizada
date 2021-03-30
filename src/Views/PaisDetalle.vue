<template>
  <div>
    <div align="left">
      <button class="btn btn-dark" @click="VerListado">Regresar..</button>
    </div>
    <h5>Detalle de {{ id }}</h5>
    <img :src="pais.flag" :alt="pais.name" width="100" height="60" />

    <table align="center" border="1">
      <tr>
        <p><b>Pais: </b>{{ pais.name }}</p>
        <p><b>Region: </b>{{ pais.region }}</p>
        <p><b>Capital: </b>{{ pais.capital }}</p>
        <p><b>Habitantes: </b>{{ pais.population }}</p>
        <p>
          <button
            v-for="border in pais.borders"
            :key="border"
            @click="DetalleBorder(border)"
          >
            {{ border }}
          </button>
        </p>
      </tr>
    </table>
  </div>
</template>

<script>
import service from "../service";

export default {
  props: ["id"],
  data() {
    return { pais: {} };
  },
  async mounted() {
    let response = await service.ObtenerPais(this.id);
    this.pais = response.data;
  },
  async beforeRouteUpdate(to,from,next){
    let response =await service.ObtenerPais(to.params.id);
    this.pais =response.data;
    next();
    
  },
  methods: {
    VerListado() {
      this.$router.push({
        name: "Paises",
      });
    },
    DetalleBorder(border) {
      this.$router.push({
        name: "PaisDetalle",
        params: {
          id: border,
        },
      });
    },
  },
};
</script>

<style lang="css" scoped>
h5 {
  font-family: "Franklin Gothic Medium", "Arial Narrow", "Arial, sans-serif";
  margin-bottom: 0;
}
p {
  font-size: 10px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", "Arial, sans-serif";
  margin-bottom: 0;
}
</style>