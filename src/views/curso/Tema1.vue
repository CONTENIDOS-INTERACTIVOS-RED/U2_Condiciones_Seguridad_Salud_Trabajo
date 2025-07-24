<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Identificación de riesgos laborales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #F7DBD5").mb-4
          .row
            .col-lg-auto
              img(src="@/assets/curso/temas/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La identificación de riesgos laborales y peligros, es un proceso fundamental en la gestión de contingencias, que ha evolucionado a lo largo del tiempo, a medida que las sociedades han tomado conciencia de la importancia de la seguridad, en diversos ámbitos. Desde los inicios de la Revolución Industrial, donde los accidentes laborales se volvieron comunes debido a la falta de regulaciones, surgió la necesidad de sistematizar la evaluación de riesgos. 
        p.mb-0 A medida que avanzaban los conocimientos en áreas como la medicina, la ingeniería y la psicología, comenzaron a desarrollarse metodologías más estructuradas para identificar y analizar peligros en el entorno laboral y cotidiano. En la década de los 60 y 70, se implementaron modelos de gestión de seguridad más complejos, incorporando enfoques como el análisis de fallos y la participación activa de los trabajadores. Esto marcó un cambio significativo en cómo las organizaciones comenzaban a entender su responsabilidad, no solo hacia la productividad, sino también hacia la salud y el bienestar de sus empleados.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/8.png', alt='')
    p.mb-4 Lo invitamos a ver el siguiente video, donde conoceremos más sobre algunas temáticas relacionadas con el tema que estamos abordando.
    .bg-slyder.mn.p-5.mb-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/tHOrHD6Q9tM?si=1K4l30H5UhjciSkt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Identificación de reisgos laborales
    #t_1_1.titulo-segundo(data-aos='fade-right')
      h2 #[span 1.1] Impacto en la productividad y el bienestar laboral
    .bg-color-4.mb-5(data-aos="fade-up" style="background-color: #FEF7E4 ")
      .row.justify-content-center.align-items-center
        .col-lg.order-2
          .p-4
            p.mb-0(data-aos="fade-up") La identificación de riesgos laborales, también impacta directamente en la productividad. Entornos de trabajo más seguros y saludables, disminuyen las ausencias laborales y aumentan la satisfacción del empleado. La retención de talento se ve favorecida en organizaciones que demuestran un compromiso sólido con la seguridad y la salud en el trabajo, generando un círculo virtuoso que beneficia, tanto a los empleados como a la empresa.
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/9.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-4 El propósito principal de identificar riesgos y evaluar peligros en el ámbito de la seguridad y salud en el trabajo, es entender las amenazas que pueden presentarse durante la ejecución de diversas actividades. Esto permite a las organizaciones instaurar controles adecuados para asegurar que los riesgos sean manejables. La evaluación de riesgos es fundamental para una gestión proactiva de la SST, promovida por la alta dirección y formando parte de un enfoque integral, que involucra a todos los niveles de la organización.
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #D7F8F4").mb-4
          .row
            .col-lg-auto
              img(src="@/assets/curso/temas/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La identificación de riesgos laborales en Colombia, es un proceso vital que requiere la colaboración activa y el compromiso de empleadores y trabajadores. Fortalecer este aspecto no solo es un imperativo legal, sino también una inversión en la salud y bienestar del personal.  
        p.mb-0 La creación de un sistema de gestión integral que fomente la cultura de la prevención, se traduce en un entorno de trabajo más seguro y eficiente. Esta guía se propone ser una herramienta útil para todos los actores involucrados, contribuyendo al desarrollo de prácticas seguras y responsables, que no solo cumplan con la normativa vigente, sino que, además, promuevan un futuro laboral más saludable y productivo para todos.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/11.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/11786?page=12" target="_blank" rel="noopener noreferrer") Ramos Ramos, P. (2012). Análisis de los riesgos psicosociales: el estrés y el síndrome de burnout. Editorial Id3.

            p.d-flex.mb-2
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'20px'}")
              a(href="https://www.youtube.com/watch?v=adNuoWxs9NI" target="_blank" rel="noopener noreferrer") CATP Consultor. (2022d, octubre 5). IDENTIFICACIÓN DE PELIGROS- EVALUACIÓN y VALORACIÓN DE RIESGOS.
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
