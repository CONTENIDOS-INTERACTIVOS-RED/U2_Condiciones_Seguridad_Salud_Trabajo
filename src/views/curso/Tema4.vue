<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Resolución 0312 del 2019'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5
    .mn(style="background-color: #E2E9F3").mb-4
      .px-5.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-lg-0.mb-3
              h2.mb-4(data-aos="flip-up") Teorías resolución de conflictos
              p.mb-4(data-aos="fade-right") El análisis de las teorías de conflicto, como la teoría de la escasez de recursos de Karl Marx, la teoría del poder de Max Weber, la teoría funcionalista de Lewis Coser y la teoría psicológica, proporciona un marco integral para comprender las tensiones sociales y económicas. Estas teorías permiten explorar desde la competencia por recursos limitados y las dinámicas de poder, hasta los aspectos funcionales y psicológicos de los conflictos, destacando cómo las interacciones entre clases, grupos e individuos pueden llevar a cambios significativos en la sociedad. A continuación, en el PDF Teorías resolución de conflictos, se profundizará en cada una de estas teorías, sus implicaciones y estrategias de resolución de conflictos para fomentar un entendimiento más amplio de las tensiones y su manejo.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Matriz.

            .col-lg-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/55.png', alt='')
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 Aspectos para tener en cuenta al desarrollar la identificación de los peligros y la valoración de los riesgos 
    p.mb-4 Para garantizar la eficacia de la identificación de peligros y la valoración de riesgos, las organizaciones deben tener en cuenta los siguientes aspectos:
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/56.png', alt='')
      .col-lg-8
        LineaTiempoD.color-secundario
          div.text-small(numero="1" titulo="Asignación de responsabilidades")
            p.mb-0 Designar a un miembro del equipo y proporcionar los recursos necesarios, para liderar y gestionar esta actividad.
          div.text-small(numero="2" titulo="Cumplimiento normativo")
            p.mb-0 Revisar y considerar la legislación vigente y otros requisitos aplicables.
          div.text-small(numero="3" titulo="Consulta y comunicación")
            p.mb-0 Involucrar a las partes interesadas relevantes, informándoles sobre los planes y solicitando su retroalimentación y compromiso.
          div.text-small(numero="4" titulo="Capacitación")
            p.mb-0 Evaluar las necesidades de formación del personal o grupos de trabajo relacionados con la identificación de peligros y valoración de riesgos, e implementar un programa adecuado para cubrir estas necesidades.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        LineaTiempoD.color-secundario
          div.text-small(numero="5" titulo="Documentación")
            p.mb-0 Registrar los resultados obtenidos de la valoración de riesgos.
          div.text-small(numero="6" titulo="Monitoreos especializados")
            p.mb-0 Realizar evaluaciones higiénicas y/o monitoreos biológicos cuando sea necesario.
          div.text-small(numero="7" titulo="Adaptación a cambios")
            p.mb-0 Estar atentos a cualquier modificación en procesos administrativos y productivos, procedimientos, personal, instalaciones, y requisitos legales, así como a otros aspectos relevantes.
          div.text-small(numero="8" titulo="Análisis de incidentes")
            p.mb-0 Tener en cuenta las estadísticas de incidentes previos y consultar información de gremios u organizaciones especializadas en el tema.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/57.png', alt='')
    .mn.p-5.mb-5(style="background-color:  #E8EEFD")
      .row.justify-content-center.mb-5
        .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/58.svg', alt='')
        .col-lg-7.px-4
          p.mb-4 Para identificar peligros y considerar riesgos, se sugiere considerar:
          ol.lista-ol--cuadro(data-aos="fade-up")
            li 
              .lista-ol--cuadro__vineta(style='background-color: #F2B71A; color: #212429')
                span 1
              | Las disposiciones de seguridad y salud en el lugar de trabajo que se está evaluando.
            li 
              .lista-ol--cuadro__vineta(style='background-color: #F2B71A; color: #212429')
                span 2
              | Establecer criterios internos que permitan a los evaluadores, emitir juicios objetivos e imparciales.
            li 
              .lista-ol--cuadro__vineta(style='background-color: #F2B71A; color: #212429')
                span 3
              | Verificar que las personas encargadas de la actividad, cuenten con la competencia necesaria.
            li 
              .lista-ol--cuadro__vineta(style='background-color: #F2B71A; color: #212429')
                span 4
              | Capacitar a los grupos involucrados en la identificación de peligros y valoración de riesgos, con el fin de fortalecer el proceso.
            li 
              .lista-ol--cuadro__vineta(style='background-color: #F2B71A; color: #212429')
                span 5
              | Utilizar la valoración de riesgos como punto de partida para la toma de decisiones, sobre las acciones correctivas a implementar.
            li 
              .lista-ol--cuadro__vineta(style='background-color: #F2B71A; color: #212429')
                span 6
              | Incluir todas las actividades, tanto rutinarias como no rutinarias, que puedan surgir durante el desarrollo de las actividades organizacionales.
            li 
              .lista-ol--cuadro__vineta(style='background-color: #F2B71A; color: #212429')
                span 7
              | Consultar a expertos en seguridad y salud ocupacional, cuando la organización lo considere pertinente.
    p.mb-4 Al seguir estas pautas, las organizaciones estarán mejor preparadas para identificar peligros y valorar riesgos de manera efectiva, contribuyendo así a un entorno de trabajo más seguro.
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2 Actividades para la identificación de peligros y evaluación de riesgos
    .mn(style="background-color: #FAECE9")
      .px-5.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-lg-0.mb-3
              h2.mb-4(data-aos="flip-up") Actividades para la identificación de peligros y evaluación de riesgos
              p.mb-4(data-aos="fade-right") Se estudiarán las actividades esenciales para la construcción y gestión de la matriz de identificación de peligros, valoración de riesgos y determinación de controles, según los lineamientos de la GTC 45. Estas actividades incluyen desde la clasificación de procesos laborales y la identificación de peligros, hasta la evaluación de riesgos y el diseño de planes de acción para su mitigación. Este enfoque sistemático no solo permite garantizar la seguridad y salud en el trabajo, sino también fomentar una cultura organizacional basada en la prevención y la mejora continua.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Actividades para la identificación de peligros y evaluación de riesgos.
            .col-lg-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/60.png', alt='')
    .mn(style="background-color: #E2E9F3 ;border-top: 5px solid orange")
      .px-5.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-lg-0.mb-3
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/61.png', alt='')
            .col-lg-7
              h2.mb-4(data-aos="flip-up") GTC 45: Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud  ocupacional.
              p.mb-4(data-aos="fade-right") Lectura recomendada: se invita a explorar la GTC 45, guía para la identificación de peligros y valoración de riesgos en seguridad y salud ocupacional. Este documento proporciona una perspectiva detallada sobre la creación de matrices para la identificación de peligros y la evaluación de riesgos. Profundizar en este enfoque teórico-práctico ayudará a desarrollar matrices aplicables en diversos sectores económicos.  
                br
                |Ministerio de Trabajo. (2012). GTC 45: Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud  ocupacional.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/anexo_3.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> GTC 45.
    


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
