<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #F7DBD5").mb-4
          .row
            .col-lg-auto
              img(src="@/assets/curso/temas/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En un entorno laboral donde la dinamización de procesos y la innovación constante son esenciales, la identificación y evaluación de riesgos laborales, se han consolidado como aspectos cruciales para garantizar la seguridad de los trabajadores y la sostenibilidad de las organizaciones. Ante esta realidad, esta unidad se plantea como una herramienta clave en la capacitación de profesionales competentes en la detección y análisis de factores de riesgo en el trabajo, proporcionando un enfoque integral que combine teoría y práctica en el desarrollo de competencias específicas.
        p.mb-0 La relevancia de una formación sólida en identificación y evaluación de riesgos laborales, se manifiesta en un contexto laboral en el que la protección de la salud y el bienestar de los trabajadores impacta, de manera directa, no solo en su calidad de vida, sino también en la eficacia y productividad de las organizaciones. Un enfoque proactivo en la gestión de riesgos, no solo previene incidentes y enfermedades, sino que también refuerza el compromiso de la empresa con la responsabilidad social y la ética laboral, estableciendo así un estándar de calidad, que la distingue en su sector.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/2.png', alt='')
    .bg-color-4.mb-5(data-aos="fade-up" style="background-color: #FEF7E4 ")
      .row.justify-content-center.align-items-center
        .col-lg.order-2
          .p-4
            p.mb-0(data-aos="fade-up") En este marco, se promueve la creación de una cultura organizacional que priorice la prevención, implementando estrategias que no solo respondan a la normativa vigente, sino que también se integren al conjunto de la organización, en el proceso. 
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/3.png', alt='')
    p.mb-4 Esto implica trabajar de manera colaborativa con todos los niveles desde la alta dirección, hasta los empleados en su día a día, fomentando la participación activa en la identificación de peligros y la propuesta de soluciones efectivas. De este modo, el programa formativo actúa como un motor de cambio, capacitando al estudiante para que se convierta en agente de transformación, que propicie un entorno laboral más seguro.
      br
      br
      | #[b El diseño del proceso formativo abarca tres ejes fundamentales:] 
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Primero") Un análisis profundo de las normativas y estándares que rigen la identificación y evaluación de riesgos laborales, estableciendo las bases legales y técnicas que estructuran el contexto nacional e internacional. 
          p.text-small(numero="2" titulo="Segundo") Técnicas y métodos para la identificación y evaluación de riesgos, equipando a los estudiantes con herramientas prácticas para la detección precisa de peligros y la valoración del riesgo asociado.
          div.text-small(numero="3" titulo="Tercero") 
            p.mb-4 El desarrollo de estrategias de mitigación y control, que orientan a los participantes en la formulación de planes y programas que aseguren un ambiente de trabajo seguro y saludable. Dentro de este marco, se desarrollarán los siguientes temas: 
            .row.justify-content-center.align-items-center(data-aos="fade-up").mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/icon1.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Tipos de riesgos laborales (físicos, químicos, ergonómicos, biomecánicos, psicosociales, condiciones de seguridad, biológicos, fenómenos naturales). 

            .row.justify-content-center.align-items-center(data-aos="fade-up").mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/icon1.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Métodos de identificación y evaluación de riesgos.
            .row.justify-content-center.align-items-center(data-aos="fade-up").mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/icon1.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 Matriz de riesgos y control de peligros.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/4.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/5.png', alt='')
      .col-lg-8
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #D8F5F5").mb-4
          .row
            .col-lg-auto
              img(src="@/assets/curso/temas/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Al finalizar esta unidad, el estudiante estará preparado, no solo para cumplir con las exigencias normativas en identificación y evaluación de riesgos laborales, sino también para generar un impacto positivo en la cultura de seguridad, dentro de sus organizaciones. Será capaz de implementar programas de capacitación continua, que fomenten la concientización sobre la importancia de la identificación de riesgos y la promoción de prácticas seguras. Este enfoque integral minimiza el impacto de situaciones de riesgo y contribuye a la creación de organizaciones resilientes que, además de enfrentar los desafíos actuales, se alinean con la misión de promover el bienestar integral de sus empleados.

            
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
