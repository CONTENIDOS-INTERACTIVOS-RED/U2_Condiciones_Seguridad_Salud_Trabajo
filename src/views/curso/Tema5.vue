<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'SINTESIS'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5
    p.mb-4 La Unidad 2: Identificación de riesgos laborales, aborda la identificación de riesgos laborales como un elemento esencial para garantizar la protección de la salud y el bienestar de los trabajadores. En esta unidad, se estudian normativas nacionales e internacionales, métodos de evaluación y estrategias de mitigación de riesgos, proporcionando un enfoque integral para prevenir accidentes y fomentar una cultura organizacional basada en la seguridad. Este conocimiento es clave para que los estudiantes se conviertan en agentes de cambio en la creación de entornos laborales más seguros y productivos, fortaleciendo el compromiso ético y la responsabilidad social de las organizaciones.

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema4',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
