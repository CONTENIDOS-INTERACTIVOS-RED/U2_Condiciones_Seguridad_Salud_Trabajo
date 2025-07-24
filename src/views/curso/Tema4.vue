<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Matriz de identificación de peligros, valoración de riesgos y determinación de controles'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5
    .mn(style="background-color: #E2E9F3").mb-4
      .px-5.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8.mb-lg-0.mb-3
              p.mb-4(data-aos="fade-right") En el PDF Matriz, se estudiará la matriz de peligros, valoración de riesgos y controles, basada en la Guía Técnica Colombiana GTC 45, una herramienta fundamental en el ámbito de la seguridad y salud ocupacional. Este documento abordará cómo este marco permite a empleadores y trabajadores identificar peligros, evaluar riesgos y aplicar controles efectivos, fomentando una cultura de prevención y garantizando condiciones laborales seguras. Su aplicación, más allá del cumplimiento legal, busca proteger la salud de los trabajadores y promover prácticas sostenibles en diversos sectores.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Matriz.

            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/55.png', alt='')
    #t_4_1.titulo-segundo(data-aos='fade-right')
      h2 #[span 4.1] Aspectos para tener en cuenta al desarrollar la identificación de los peligros y la valoración de los riesgos 
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
    #t_4_2.titulo-segundo(data-aos='fade-right')
      h2 #[span 4.2] Actividades para la identificación de peligros y evaluación de riesgos
    .mn(style="background-color: #FAECE9")
      .px-5.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-lg-0.mb-3
              h2.mb-4(data-aos="flip-up") Actividades para la identificación de peligros y evaluación de riesgos
              p.mb-4(data-aos="fade-right") Se estudiarán las actividades esenciales para la construcción y gestión de la matriz de identificación de peligros, valoración de riesgos y determinación de controles, según los lineamientos de la GTC 45. Estas actividades incluyen desde la clasificación de procesos laborales y la identificación de peligros, hasta la evaluación de riesgos y el diseño de planes de acción para su mitigación. Este enfoque sistemático no solo permite garantizar la seguridad y salud en el trabajo, sino también fomentar una cultura organizacional basada en la prevención y la mejora continua.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
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

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> GTC 45.
    
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S1991-93952024000100013&lng=es&tlng=es" target="_blank" rel="noopener noreferrer") Acosta Pérez, I., Marrero Delgado, F., Espinosa Acosta, J. Á., Rivero Rodríguez, L. D., & Ramírez Lara, D. (2024). Gestión estratégica de los riesgos de Seguridad y Salud en el Trabajo. Revista Cubana de Salud y Trabajo, 25(1).

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=KdbIvWxGj8M" target="_blank" rel="noopener noreferrer") Centro para la Excelencia en el Aprendizaje. (2017, 4 diciembre). Matriz IPEVRIC.


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    BannerInterno,
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Matemática financiera',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿qué combinación es esencial para la identificación de riesgos? ',
            imagen: require('@/assets/actividad/imagen1.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Prácticas normativas y complacencia ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Teoría y práctica ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'La observación y el silencio ',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Recursos limitados y tecnología avanzada',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: 'La sensibilización sobre la autoprotección debe ser: ',
            imagen: require('@/assets/actividad/imagen2.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Opcional para los empleados ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Parte integral de la cultura organizacional ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Solo promovida en nuevos empleados',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Descartada en favor de técnicas avanzadas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'Interpretando la GTC 45, el proceso de identificación de riesgos debe ser: ',
            imagen: require('@/assets/actividad/imagen3.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Unidireccional ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Abierto y participativo ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Controlado solo por la alta dirección ',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Exclusivo para la gerencia',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'Pablo se encuentra manipulando una caldera, al abrir la llave, siente que se encuentra caliente y tiene una quemadura de segundo grado. Este riesgo se puede clasificar como: ',
            imagen: require('@/assets/actividad/imagen4.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Riesgo Químico ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Condición de seguridad ',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Riesgo físico',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Riesgo psicosocial',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: 'La legislación colombiana exige a los empleadores:',
            imagen: require('@/assets/actividad/imagen1.png'),
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Ignorar los informes de riesgo ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Cumplir con la evaluación de riesgos ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Realizar despidos masivos ',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Solo cumplir con la normativa internacional',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
