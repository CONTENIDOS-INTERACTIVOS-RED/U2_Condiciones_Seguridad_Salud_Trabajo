<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Tipos de riesgos y peligros laborales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .bg-color-4.mb-5(data-aos="fade-up" style="background-color: #F7DBD5 ")
      .row.justify-content-center.align-items-center
        .col-lg.order-2
          .p-4
            p.mb-0(data-aos="fade-up") Vamos a realizar un recorrido por los diferentes tipos de riesgos y peligros laborales que existen dentro del mundo del trabajo. Comprender estos riesgos es fundamental para garantizar la seguridad y el bienestar de todos los trabajadores. Es importante señalar que las regulaciones y denominaciones de riesgos laborales, pueden variar significativamente de un país a otro, lo que puede llevar a confusiones si no se tiene un conocimiento claro de lo que implica cada tipo de riesgo.
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/12.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-4 Para abordar estos riesgos y peligros, llevaremos a cabo definiciones establecidas dentro de la Guía Técnica Colombiana GTC 45  (guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional). Este documento presenta una guía integral que establece principios, prácticas y criterios, para llevar a cabo la mejor práctica en la identificación de peligros y la evaluación de riesgos, dentro de la gestión de la seguridad y salud ocupacional. Proporciona un esquema coherente y claro, para abordar este tipo de riesgos, incluyendo su proceso y elementos esenciales.
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #D7F8F4").mb-4
          .row
            .col-lg-auto
              img(src="@/assets/curso/temas/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La guía se fundamenta en los principios básicos de la norma NTC-OHSAS 18001 y se apoya en el enfoque de gestión del riesgo establecido por la norma BS 8800 (British Standard) y la NTP 330 del Instituto Nacional de Seguridad e Higiene en el Trabajo de España (INSHT), así como en la NTC ISO 31000, que trata sobre los principios y directrices de la gestión del riesgo.
        p.mb-0.fw-bold A continuación, enmarcaremos los diferentes tipos de riesgos existentes, a nivel laboral.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/14.png', alt='')
    #t_2_1.titulo-segundo(data-aos='fade-right')
      h2 #[span 2.1] Riesgos físicos
    .bg-color-4.mb-5(data-aos="fade-up" style="background-color: #FEF7E4 ")
      .row.justify-content-center.align-items-center
        .col-lg.order-2
          .p-4
            p.mb-0(data-aos="fade-up") Los riesgos físicos se refieren a aquellos factores del entorno laboral que pueden causar lesiones o enfermedades a los trabajadores, debido a su naturaleza física.
              br
              br
              |Algunos de los elementos que se consideran dentro de los riesgos físicos, incluyen:
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/15.png', alt='')
    h3 Ruidos
    p.mb-0 Se refiere a la exposición a niveles de sonido que pueden causar efectos adversos en la salud auditiva y en el bienestar general de una persona. El ruido se clasifica en diferentes tipos, según su naturaleza y patrón de emisión, siendo los más comunes los siguientes:
    .bg-slyder.mn.p-5.mb-5
      SlyderA(tipo='b').bg-white
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Ruido de impacto
            p Este tipo de ruido se produce por la colisión de objetos, generando ondas sonoras de alta intensidad y corta duración. Ejemplos incluyen el golpeo de herramientas, el uso de maquinaria pesada o la caída de objetos. El ruido de impacto puede ser especialmente perjudicial para la audición, dado que puede causar daño inmediato a las células sensoriales en el oído.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/16.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Ruido intermitente
            p Este ruido se caracteriza por no ser constante y variar en intensidad y duración. Se presenta en episodios o ráfagas, lo que puede dificultar la adaptación del sistema auditivo de la persona expuesta. Ejemplos incluyen el sonido de disparos, alarmas o maquinarias que operan por ciclos. La exposición a ruido intermitente, también puede resultar en un estrés adicional y afectar la concentración y el rendimiento.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/17.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Ruido continuo
            p Este tipo de ruido es constante y se presenta sin interrupciones durante un período prolongado. Ejemplos incluyen el ruido de tráfico, maquinaria en fábricas o sistemas de ventilación. La exposición prolongada a ruido continuo, especialmente a niveles elevados, puede llevar a la pérdida auditiva gradual, trastornos del sueño, dificultades de comunicación y otros problemas de salud.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/18.png', alt='Texto que describa la imagen')
    h3 Temperaturas extremas
    p.mb-4 Se refiere a las condiciones climáticas que pueden afectar la salud y seguridad de las personas en diferentes contextos laborales y ambientales. A continuación, se presentan definiciones específicas para ambos tipos de riesgos:
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/19.png', alt='')
      .col-lg-8
        LineaTiempoD.color-secundario
          div.text-small(numero="1" titulo="Riesgo por calor")
            p.mb-3 El riesgo por calor se produce cuando una persona está expuesta a temperaturas elevadas, que pueden superar su capacidad de regulación térmica, llevando a diversas condiciones adversas. Esto incluye:
            .row.justify-content-center.align-items-center(data-aos="fade-up").mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/icon1.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Golpe de calor:] un estado crítico en el que el cuerpo se sobrecalienta y no puede enfriarse adecuadamente, lo que puede causar daño a órganos o incluso la muerte.

            .row.justify-content-center.align-items-center(data-aos="fade-up").mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/icon1.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Deshidratación:] pérdida excesiva de líquidos corporales, lo que puede llevar a problemas graves de salud.

            .row.justify-content-center.align-items-center(data-aos="fade-up").mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/icon1.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Fatiga por calor:] agotamiento físico y mental, debido a la exposición prolongada al calor.

            .row.justify-content-center.align-items-center(data-aos="fade-up").mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/icon1.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Calambres por calor:] contracciones musculares dolorosas que se producen durante o después de la actividad física, en condiciones de calor.
          div.text-small(numero="2" titulo="Riesgo por frío")
            p.mb-3 El riesgo por frío se produce cuando una persona está expuesta a temperaturas bajas, lo que puede dar lugar a diversas condiciones físicas que afectan la salud. Algunos de estos riesgos incluyen:
            .row.justify-content-center.align-items-center(data-aos="fade-up").mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/icon1.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Hipotermia:] una condición en la que la temperatura corporal desciende por debajo de lo normal, lo que puede llevar a la pérdida de la función corporal y, en casos severos, a la muerte.
            .row.justify-content-center.align-items-center(data-aos="fade-up").mb-1
              .col-auto
                figure
                  img(src='@/assets/curso/temas/icon1.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 #[b Congelación:] daño a la piel y a los tejidos subyacentes, debido a la exposición prolongada a temperaturas bajo cero, que puede generar la pérdida de extremidades.
    h3 Vibraciones
    p.mb-4 Se refiere a la exposición de los trabajadores a vibraciones generadas por maquinaria, herramientas o superficies en su entorno laboral. Estas vibraciones pueden clasificarse en dos tipos principales:
    TabsB.color-secundario.mb-5
      .py-4.py-md-5(titulo="Vibración de cuerpo entero" :icono="require('@/assets/curso/temas/icon2.svg')")
        .row
          .col-lg-5.col-7.mb-4.mb-lg-0: img(src='@/assets/curso/temas/20.png', alt='')
          .col-md-7
            h4 Vibración de cuerpo entero
            p Este tipo de vibración afecta a todo el cuerpo del trabajador. Generalmente, se produce al operar maquinaria pesada o vehículos, como excavadoras, tractores o cualquier equipo que genere oscilaciones a través del suelo. La exposición prolongada a este tipo de vibración, puede provocar problemas en el sistema músculo -esquelético, trastornos de la circulación sanguínea y afecciones en el sistema nervioso, entre otros efectos adversos para la salud.
      .py-4.py-md-5(titulo="Vibración segmentaria" :icono="require('@/assets/curso/temas/icon2.svg')")
        .row
          .col-lg-5.col-7.mb-4.mb-lg-0: img(src='@/assets/curso/temas/21.png', alt='')
          .col-md-7
            h4 Vibración segmentaria
            p Se refiere a la exposición de partes específicas del cuerpo, como las manos y los brazos, a vibraciones producidas por herramientas manuales, como taladros, sierras eléctricas o martillos neumáticos. La vibración segmentaria puede resultar en condiciones como el Síndrome de Raynaud o la "mano de vibración", que se caracteriza por la pérdida de sensibilidad, dolor, debilidad muscular y, en casos graves, daños permanentes en los tejidos.
    p.mb-4 Otros riesgos físicos son:
    .bg-slyder.mn.p-5.mb-5
      SlyderA(tipo='b').bg-white
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Fatiga y disminución de la capacidad cognitiva
            p Condiciones adversas que afectan el rendimiento y la toma de decisiones, incrementando el riesgo de accidentes laborales.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/22.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Radiaciones
            p Exposición a diferentes tipos de radiaciones, ya sean ionizantes (como rayos X) o no ionizantes (como luz ultravioleta).
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/23.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Presiones
            p Cambios de presión en ambientes laborales, que pueden afectar la salud, que pueden surgir debido a la variación de esta, tanto en sus niveles normales como en sus ajustes, especialmente en determinadas actividades como la aviación, la exploración subacuática o en ambientes de alta montaña.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/24.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Iluminación
            p Se refiere a la posibilidad que la luz, en sus diferentes formas (ya sea por exceso o deficiencia), pueda causar efectos adversos en la salud y seguridad de los trabajadores.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/25.png', alt='Texto que describa la imagen')
    #t_2_2.titulo-segundo(data-aos='fade-right')
      h2 #[span 2.2] Riesgos químicos
    p.mb-4 Se refiere a la posibilidad que los trabajadores sufran daños a su salud o seguridad, debido a la exposición a sustancias químicas en su lugar de trabajo. Estos riesgos pueden provenir de:
    
    .bg-full-width.bg-color-2.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            ImagenInfografica.color-acento-contenido.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/temas/info1.png', style="max-width: 765px;").mx-auto
              .bg-color-white.box-shadow.p-3(x="50%" y="1%" numero="+")
                .h5.mb-2 Polvos orgánicos e inorgánicos
                p Se refiere a la posibilidad que la exposición a estos materiales en forma de partículas en suspensión en el aire, pueda provocar efectos adversos en la salud humana o en el medio ambiente.
              .bg-color-white.box-shadow.p-3(x="84%" y="23%" numero="+")
                .h5.mb-2 Fibras
                p Pueden surgir en un entorno laboral o de exposición, debido a la manipulación, procesamiento o uso de materiales fibrosos. Este riesgo puede incluir diversas sustancias químicas que se utilizan en la producción de fibras (como productos químicos para el tratamiento de fibras, colorantes, adhesivos, entre otros), o que son liberadas durante su manipulación. Existen diferentes tipos de fibras, tanto naturales (como algodón, lana, y seda), como sintéticas (como poliéster, nylon y acrílicos).
              .bg-color-white.box-shadow.p-3(x="95%" y="50%" numero="+")
                .h5.mb-2 Nieblas y rocíos
                p Las nieblas son aerosoles que consisten en pequeñas gotas de líquido suspendidas en el aire. Los rocíos son similares, pero generalmente se refieren a gotas que se depositan en superficies. Ambos pueden ser generados por procesos industriales, productos de limpieza, pulverización de pesticidas, entre otros.
              .bg-color-white.box-shadow.p-3(x="84%" y="78%" numero="+")
                .h5.mb-2 Gases
                p Son sustancias que se encuentran en estado gaseoso a temperatura y presión ambiente. Pueden ser tóxicos, corrosivos, inflamables o asfixiantes.
              .bg-color-white.box-shadow.p-3(x="50%" y="99%" numero="+")
                .h5.mb-2 Vapores
                p Son la fase gaseosa de una sustancia que es líquida o sólida, a temperatura ambiente. Se generan cuando una sustancia se evapora. Los vapores pueden ser igualmente peligrosos, incluso en concentraciones bajas.
              .bg-color-white.box-shadow.p-3(x="16%" y="78%" numero="+")
                .h5.mb-2 Humos metálicos
                p Los humos metálicos son partículas microscópicas que se generan durante procesos como la soldadura, la fundición y la fusión de metales. Estos humos pueden contener metales pesados, como plomo, mercurio, cadmio y manganeso, entre otros. La inhalación de estos humos puede resultar en una serie de problemas de salud, incluidos trastornos respiratorios, neurotoxicidad y otros efectos agudos o crónicos asociados con la exposición a metales pesados.
              .bg-color-white.box-shadow.p-3(x="5%" y="50%" numero="+")
                .h5.mb-2 Humos no metálicos
                p Los humos no metálicos, por otro lado, incluyen partículas generadas por la combustión de materiales orgánicos o inorgánicos, como el carbón, el plástico y otros compuestos. Estos humos pueden contener una variedad de sustancias químicas tóxicas, como hidrocarburos aromáticos policíclicos (HAP), dioxinas y furanos, y también pueden contribuir a problemas respiratorios, irritación de las mucosas y efectos más graves en la salud a largo plazo, como el cáncer.
              .bg-color-white.box-shadow.p-3(x="15%" y="23%" numero="+")
                .h5.mb-2 Material particulado
                p Se refiere a la posibilidad que la exposición a partículas sólidas o líquidas en suspensión en el aire, provoque efectos adversos para la salud humana o el medio ambiente. El material particulado puede incluir una variedad de sustancias, como polvo, hollín, fibras, aerosoles y otras partículas generadas por actividades industriales, construcción, tráfico vehicular, y procesos naturales.
    #t_2_3.titulo-segundo(data-aos='fade-right')
      h2 #[span 2.3] Riesgos biomecánicos
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3 
        p.mb-4 El riesgo biomecánico, según la normatividad colombiana, se refiere a las condiciones de trabajo que pueden afectar la salud y el bienestar de los trabajadores, debido a movimientos repetitivos, posturas inadecuadas, manipulación de cargas y otras actividades que pueden generar lesiones músculo esqueléticas.
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #F7DBD5").mb-4
          .row
            .col-lg-auto
              img(src="@/assets/curso/temas/27.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La normatividad en Colombia, especialmente la Resolución 2400 de 1979 y otras normativas relacionadas con la seguridad y salud en el trabajo, establece lineamientos para la identificación, evaluación y control de estos riesgos.  
        p.mb-0 Para profundizar en este riesgo, revisaremos las diferentes definiciones de cada una de estas condiciones:
      .col-lg-5.col-7: img(src='@/assets/curso/temas/28.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/29.png', alt='')
      .col-lg-8 
        LineaTiempoD.color-secundario
          div.text-small(numero="1" titulo="Movimientos repetitivos")
            p.mb-0 Se refiere a la posibilidad que la realización frecuente y continuada de ciertos patrones de movimiento en el cuerpo humano, pueda causar lesiones o trastornos musculoesqueléticos. Estos movimientos repetitivos pueden generar tensiones en músculos, tendones, ligamentos y articulaciones, lo que a largo plazo puede resultar en dolor, inflamación y deterioro funcional. Los riesgos biomecánicos, vinculados a movimientos repetitivos, son comunes en diversas actividades laborales, como aquellos que implican trabajo manual, uso prolongado de computadoras, ensamblaje en líneas de producción, entre otros. Factores como la duración, la intensidad y la postura adoptada durante la ejecución de estos movimientos, son determinantes en la magnitud del riesgo.
          div.text-small(numero="2" titulo="Postura prolongada")
            p.mb-0 Se refiere a mantener una posición específica durante un tiempo extenso. Esto puede llevar a la fatiga muscular, mala circulación y problemas articulares.
          div.text-small(numero="3" titulo="Postura mantenida")
            p.mb-0 Similar a la postura prolongada, se refiere a sostener una misma posición durante un periodo considerable, lo que puede causar rigidez y desbalance en la tensión muscular.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        LineaTiempoD.color-secundario
          div.text-small(numero="4" titulo="Postura forzada")
            p.mb-0 Ocurre cuando el cuerpo se coloca en una posición que no es natural o ergonómicamente adecuada. Por ejemplo, inclinarse hacia delante o torcerse de manera incómoda puede generar tensiones musculares y aumentar el riesgo de lesiones.
          div.text-small(numero="5" titulo="Postura antigravitacional")
            p.mb-0 Se refiere a mantener la postura en contra de la gravedad, lo que puede requerir un esfuerzo adicional de los músculos para sostener el cuerpo. Esto puede dar lugar a fatiga y, a largo plazo, a alteraciones en la biomecánica del cuerpo.
          div.text-small(numero="6" titulo="Manipulación manual de carga")
            p.mb-0 Se refiere a la probabilidad que un trabajador sufra lesiones o trastornos músculo -esqueléticos, debido a las demandas físicas a las que está expuesto al mover, levantar, empujar, tirar o transportar objetos.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/30.png', alt='')
    #t_2_4.titulo-segundo(data-aos='fade-right')
      h2 #[span 2.4] Riesgos psicosociales
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/31.svg', alt='')
      .col-lg-8
        p.mb-4 Según el informe del Comité Mixto de la Organización Internacional del Trabajo y de la Organización Mundial de la Salud (OIT/OMS), de Medicina del Trabajo, en su novena reunión (Ginebra 18-24 de septiembre, 1984), los fenómenos psicosociales en el trabajo, se refieren a:
        .bloque-texto-c.color-secundario.p-4(style="background-color: #EAF2FB")
          i.fas.fa-quote-left.mb-3
          h4.mb-2 Interacciones entre el trabajo, medio ambiente, la satisfacción en el trabajo, las condiciones de organización y capacidades del trabajador, necesidades, cultura, consideraciones personales fuera del trabajo que, a través de percepciones y experiencias pueden influir en la salud y el rendimiento y la satisfacción en el trabajo.
          span (Ramos Ramos, P. 2012)  
    p.mb-4  Ahora bien, vamos a conocer la definición un poco más cercana a la realidad colombiana, referente a los riesgos psicosociales, dado que este tema ha tomado relevancia por incidir constantemente en todos los puestos de trabajo, sin importar la profesión u oficio; es por tanto que se definen como aquellos factores o condiciones del entorno laboral, que pueden afectar la salud mental y el bienestar de los trabajadores; dentro de estos, se destacan los siguientes:
    .bg-slyder.mn.p-5.mb-5
      SlyderA(tipo='b').bg-white
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Gestión organizacional
            p Se refiere a la posibilidad que se produzcan efectos negativos sobre la salud mental y el bienestar de los empleados, como resultado de condiciones laborales desfavorables (estilo de mando, pago, contratación, participación, inducción y capacitación, bienestar social, evaluación del desempeño, manejo de cambios).
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/32.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Características de la organización del trabajo
            p Surge de la interacción entre el trabajo y el entorno laboral, así como de las condiciones en las que se desarrollan las actividades laborales, tales como comunicación, tecnología, organización del trabajo, demandas, cualitativas y cuantitativas de la labor.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/33.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Condiciones de la tarea
            p Este riesgo puede surgir de varios elementos relacionados con la forma en que se organiza y lleva a cabo el trabajo, tales como carga mental, contenido de la tarea, demandas emocionales, sistemas de control, definición de roles, monotonía, entre otros.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/34.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Interfase persona-tarea
            p Este riesgo puede surgir de una serie de factores relacionados, tanto con las características del trabajador como con las demandas y condiciones de la tarea que realiza, tales como conocimientos, habilidades en relación con la demanda de la tarea, iniciativa, autonomía y reconocimiento, identificación de la persona con la tarea y la organización.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/35.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-lg-7.mb-4.mb-lg-0
            h4 Jornadas
            p Pausas, trabajo nocturno, rotación, horas extras, descansos.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/36.png', alt='Texto que describa la imagen')
    #t_2_5.titulo-segundo(data-aos='fade-right')
      h2 #[span 2.5] Condiciones de seguridad
    p.mb-4 Los riesgos por condiciones de seguridad, se refieren a los factores materiales que pueden dar lugar a accidentes en el trabajo. Entre los riesgos de seguridad más comunes se encuentran las caídas, golpes, atrapamientos, cortes, incendios y explosiones, dentro de los cuales, destacaremos los siguientes: 
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/37.png', alt='')
      .col-lg-8 
        LineaTiempoD.color-secundario
          div.text-small(numero="1" titulo="Mecánico")
            p.mb-0 Se refiere a la posibilidad que una persona sufra un daño o accidente debido a la interacción con elementos mecánicos, en el entorno industrial o laboral. Este tipo de riesgo puede surgir de diversas fuentes, como: elementos o partes de máquinas, herramientas, equipos, piezas a trabajar, materiales proyectados sólidos o fluidos.
          div.text-small(numero="2" titulo="Eléctrico")
            p.mb-0 Se refiere a la posibilidad de sufrir daños o lesiones, debido a la presencia de electricidad, en un entorno determinado. Este riesgo puede clasificarse en alta y baja tensión.
          div.text-small(numero="3" titulo="Locativo")
            p.mb-0 Se refiere a los peligros o situaciones de inseguridad que pueden presentarse en un lugar de trabajo, ya sea por condiciones físicas, estructuras inadecuadas, falta de mantenimiento o la disposición de los espacios sistemas y medios de almacenamiento, superficies de trabajo irregulares, deslizantes, con diferencia del nivel, condiciones de orden y aseo, caídas de objetos.
          div.text-small(numero="4" titulo="Tecnológico")
            p.mb-0 Se refiere a la posibilidad que se presenten accidentes o fallas en sistemas y procesos relacionados con la tecnología, que pueden tener consecuencias adversas para las personas, el medio ambiente o la infraestructura, tales como explosión, fuga, derrame, incendio.
          div.text-small(numero="5" titulo="Accidente de tránsito")
            p.mb-0 Se refiere a la probabilidad que ocurran eventos adversos relacionados con el movimiento de vehículos y personas en las vías.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        LineaTiempoD.color-secundario
          div.text-small(numero="6" titulo="Público")
            p.mb-0 Se refiere a la posibilidad que los trabajadores, especialmente aquellos que desempeñan funciones en el ámbito de la seguridad, el orden público o áreas de alto contacto social, enfrenten situaciones que pongan en peligro su integridad física o mental, debido a varios actos de violencia o delitos; dentro de estos se encuentran robos, atracos, asaltos, atentados, de orden público, etc.
          div.text-small(numero="7" titulo="Trabajo en alturas")
            p.mb-0 Se refiere a la probabilidad que un trabajador sufra lesiones o accidentes al realizar actividades en lugares elevados, generalmente por encima de los dos metros de altura.
          div.text-small(numero="8" titulo="Espacios confinados")
            p.mb-0 Se refiere a las amenazas y peligros que pueden surgir al trabajar en lugares limitados y no diseñados para la ocupación humana permanente. Estos espacios pueden incluir tanques, silos, alcantarillas, tuberías, cámaras de inspección, y cualquier área que tenga aberturas limitadas para la entrada y salida de personas.
          div.text-small(numero="9" titulo="Biológico")
            p.mb-0 Se refiere a la posibilidad de  que un trabajador se exponga a varios agentes biológicos que puedan causar enfermedades o afectaciones a la salud. Estos agentes pueden incluir bacterias, virus, hongos, parásitos y otros microbios que se encuentran en el entorno laboral. Los riesgos biológicos son comunes en ciertos sectores como la salud, la agricultura, la industria alimentaria y la investigación científica, entre otros. Las enfermedades que pueden derivar de la exposición a estos agentes, incluyen, por ejemplo, infecciones, intoxicaciones y enfermedades alérgicas.
          div.text-small(numero="10" titulo="Fenómenos naturales")
            p.mb-0 Se refiere a eventos como terremotos, inundaciones, tormentas, deslizamientos de tierra, incendios forestales, entre otros, que pueden impactar el entorno laboral y poner en peligro la seguridad y salud de los trabajadores. Estos fenómenos pueden causar daños a la infraestructura, interrumpir operaciones y generar situaciones de riesgo para la vida y bienestar de los empleados.
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/38.png', alt='')
    .bg-color-1.p-4(data-aos="fade-left" style="background-color: #F7DBD5").mb-5
          .row
            .col-lg-auto
              img(src="@/assets/curso/temas/39.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Es fundamental considerar que las definiciones y denominaciones relacionadas con los riesgos y peligros pueden variar, significativamente, dependiendo de la ubicación geográfica en la que se encuentren. Cada país posee su propio marco legal y normativo que influye directamente en cómo se clasifican, interpretan y gestionan estos riesgos. Por lo tanto, es esencial tener en cuenta estas particularidades, al momento de abordar y analizar aspectos relacionados con la seguridad y la prevención de riesgos, garantizando así una comprensión más integral y adaptada a cada circunstancia específica. 




    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.bogotajuridica.gov.co/sisjur/normas/Norma1.jsp?i=53565" target="_blank" rel="noopener noreferrer") Ministerio de Trabajo y Seguridad Social. (1979). Resolución 2400 de 1979: Por el cual se establecen disposiciones sobre vivienda, higiene y seguridad industrial en los establecimientos de trabajo.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://scielo.isciii.es/scielo.php?script=sci_arttext&pid=S1578-25492020000100003" target="_blank" rel="noopener noreferrer") Valero-Pacheco, Ivonne Constanza, & Riaño-Casallas, Martha I. (2020). Teletrabajo: Gestión de la Seguridad y Salud en el Trabajo en Colombia.
            p.d-flex.mb-2
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'20px'}")
              a(href="https://www.youtube.com/watch?v=et2wfVSKQhg" target="_blank" rel="noopener noreferrer") IMQ Prevención. (2022b, abril 5). Webinar. Análisis y aplicación de las metodologías de evaluación de factores psicosociales.
            p.d-flex.mb-2
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'20px'}")
              a(href="https://www.youtube.com/watch?v=7JnO9bJw2mk" target="_blank" rel="noopener noreferrer") Andrea Bibiana Perez Villescas. (2022, 10 octubre). Introducción a métodos de evaluación ergonómica.
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')





</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
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

<style lang="sass"></style>
