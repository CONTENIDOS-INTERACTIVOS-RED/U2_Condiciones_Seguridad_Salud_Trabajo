<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Métodos de identificación y evaluación de riesgos laborales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .bg-color-4.mb-5(data-aos="fade-up" style="background-color: #F7DBD5 ")
      .row.justify-content-center.align-items-center
        .col-lg.order-2
          .p-4
            p.mb-0(data-aos="fade-up") La gestión de riesgos laborales es un componente esencial en el ámbito de la seguridad y la salud en el trabajo. La identificación y evaluación de estos riesgos son pasos cruciales para garantizar un entorno laboral seguro y saludable. En un mundo donde las demandas laborales y la complejidad de las tareas han aumentado, se hace imprescindible contar con métodos eficaces que permitan detectar y analizar los riesgos que pueden afectar a los trabajadores. Existen diferentes enfoques y herramientas para llevar a cabo esta labor, cada uno con sus propias características, ventajas y limitaciones. 
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/40.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-4 Vamos a explorar los métodos más utilizados en la identificación y evaluación de riesgos laborales, analizando su aplicación práctica, su efectividad y su relevancia en la creación de políticas de prevención que promuevan el bienestar de los empleados y la productividad de las organizaciones. 
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #D7F8F4").mb-4
          .row
            .col-lg-auto
              img(src="@/assets/curso/temas/41.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Con un enfoque proactivo hacia la gestión de riesgos, podremos, no solo proteger a los trabajadores, sino también fomentar una cultura de prevención y mejora continua en el entorno laboral.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/42.png', alt='')
    p.mb-4 La evaluación de riesgos laborales es un proceso fundamental para garantizar la seguridad y la salud en el trabajo. Existen varios métodos que las organizaciones pueden utilizar para identificar, analizar y evaluar los riesgos en el entorno laboral. Algunos de los métodos más comunes son:
    .bg-slyder.mn.p-5.mb-5
      SlyderA(tipo='b').bg-white
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Método de la lista de verificación (Checklist)
            p Consiste en utilizar listas predefinidas de aspectos a evaluar, en el lugar de trabajo. Estas listas permiten identificar riesgos conocidos y verificar el cumplimiento de normativas.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/43.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Análisis de puestos de trabajo
            p Se centra en examinar detalladamente las tareas específicas que realizan los empleados, identificando los riesgos asociados a cada actividad. Este método puede incluir observaciones directas y entrevistas con los trabajadores.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/44.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Análisis de riesgos por matrices
            p Se utiliza una matriz para cruzar la probabilidad de ocurrencia de un riesgo, con la severidad de sus consecuencias. Esto permite priorizar los riesgos en función de su nivel de gravedad. En este riesgo, haremos una profundización más adelante.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/45.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Análisis cualitativo
            p Se basa en descripciones y categorizaciones de riesgos sin asignar valores numéricos.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/46.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Análisis cuantitativo
            p Implica la utilización de datos estadísticos y métodos matemáticos, para calcular la probabilidad de ocurrencia y el impacto de los riesgos.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/47.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Árbol de fallos
            p Este método utiliza diagramas que representan gráficamente las posibles causas de un fallo o accidente, permitiendo identificar los factores contribuyentes y sus interrelaciones.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/48.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 HIPER (Hazard Identification and Risk Evaluation)
            p Es un enfoque sistemático que permite identificar peligros y evaluar riesgos, facilitando la implementación de medidas de control.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/49.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Análisis de incidentes previos
            p Revisar y analizar accidentes e incidentes anteriores, puede proporcionar información valiosa sobre los riesgos existentes y las fallas en los controles.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/50.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Evaluación ergonómica
            p Se concentra en la adaptación del trabajo a las capacidades y limitaciones del trabajador, examinando posturas, movimientos repetitivos y otros factores que pueden causar trastornos musculoesqueléticos.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/51.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Método del Hazard and Operability Study (HAZOP)
            p Se utiliza principalmente en industrias químicas y de procesos para identificar riesgos a través de la revisión sistemática de cada etapa del proceso y sus posibles desviaciones.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/52.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Evaluación por expertos
            p Involucra a un grupo de expertos en seguridad y salud laboral, para evaluar riesgos y proponer mejoras.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/53.png', alt='Texto que describa la imagen')
    .bg-color-1.p-4(data-aos="fade-left" style="background-color: #FAECE9").mb-5
      .row
        .col-lg-auto
          img(src="@/assets/curso/temas/54.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 Es fundamental elegir el método adecuado en función de la naturaleza de la empresa, el sector y las características de los puestos de trabajo. La combinación de varios métodos también puede ser una estrategia efectiva para obtener una evaluación más completa y precisa de los riesgos laborales.    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5.material-complementario
        h2.mb-5 MATERIAL COMPLEMENTARIO
        
        .row.mb-0
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S1991-93952024000100013&lng=es&tlng=es" target="_blank" rel="noopener noreferrer") Acosta Pérez, Idalmis, Marrero Delgado, Fernando, Espinosa Acosta, José Ángel, Rivero Rodríguez, Luis Darién, & Ramírez Lara, Dayana. (2024). Gestión estratégica de los riesgos de Seguridad y Salud en el Trabajo. Revista Cubana de Salud y Trabajo, 25(1), . Epub 01 de abril de 2024.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://132.255.23.82/sipnvo/normatividad/GTC_45_DE_2012.pdf" target="_blank" rel="noopener noreferrer") Ministerio de Trabajo. (2012). GTC 45: Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')   
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
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
