export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Identificación de riesgos laborales',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Identificación de riesgos laborales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Impacto en la productividad y el bienestar laboral',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de riesgos y peligros laborales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Riesgos físicos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Riesgos químicos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Riesgos biomecánicos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Riesgos psicosociales',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Condiciones de seguridad',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Métodos de identificación y evaluación de riesgos laborales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Matriz de identificación de peligros, valoración de riesgos y determinación de controles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Aspectos para tener en cuenta al desarrollar la identificación de los peligros y la valoración de los riesgos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Actividades para la identificación de peligros y evaluación de riesgo',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) - España',
      link: 'https://www.insst.es/',
    },
    {
      referencia:
        'Occupational Safety and Health Administration (OSHA) - EE. UU.',
      link: 'https://www.osha.gov/',
    },
  ],
  glosario: [
    {
      termino: 'Accidente de trabajo',
      significado:
        'es un suceso repentino que provoca una lesión, perturbación funcional o psiquiátrica, invalidez o muerte en un trabajador, y que se produce por causa o con ocasión del trabajo',
    },
    {
      termino: 'Análisis de Riesgos',
      significado:
        'Proceso sistemático para identificar y evaluar los riesgos que pueden afectar la seguridad y salud en el trabajo.',
    },
    {
      termino: 'Controles',
      significado:
        'Medidas implementadas para mitigar o eliminar riesgos laborales, que pueden ser de tipo administrativo, ingeniería o equipos de protección personal.',
    },
    {
      termino: 'Emergencia',
      significado:
        'Situación que representa una amenaza inminente para la salud, la seguridad o el medio ambiente, que requiere una respuesta inmediata.',
    },
    {
      termino: 'Evaluación de Riesgos',
      significado:
        'Proceso de determinar la naturaleza y el grado de riesgo asociado a un peligro identificado, considerando la probabilidad de que ocurra un accidente y sus consecuencias.',
    },
    {
      termino: 'Factor de Riesgo',
      significado:
        'Cualquier aspecto del entorno laboral, la organización del trabajo o las condiciones de trabajo que puede provocar un daño al trabajador.',
    },
    {
      termino: 'Inspección de Seguridad',
      significado:
        'Evaluación física y sistemática de los lugares de trabajo para identificar condiciones peligrosas y asegurar el cumplimiento de las normativas de seguridad y salud.',
    },
    {
      termino: 'Medidas Preventivas',
      significado:
        'Acciones o estrategias diseñadas para evitar o reducir la probabilidad de que ocurran accidentes y enfermedades laborales.',
    },
    {
      termino: 'Normativa de Seguridad y Salud en el Trabajo',
      significado:
        'Conjunto de leyes, reglamentos y directrices destinadas a proteger la salud y seguridad de los trabajadores.',
    },
    {
      termino: 'Peligro',
      significado:
        'Cualquier cosa que pueda causar daño o enfermedad, como un material, una situación o una práctica laboral.',
    },
    {
      termino: 'Plan de Emergencia',
      significado:
        'Conjunto de procedimientos establecidos para hacer frente a situaciones de emergencia en el lugar de trabajo.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Probabilidad de que un peligro cause daño o lesión, que implica tanto la posibilidad de que ocurra un evento dañino como la severidad de sus consecuencias.',
    },
    {
      termino: 'Trabajo Seguro',
      significado:
        'Actividades y procedimientos que se realizan de forma que se minimicen los riesgos para la seguridad y salud de los trabajadores.',
    },
    {
      termino: 'Investigación de Accidentes',
      significado:
        'proceso de análisis de un accidente laboral para identificar sus causas y evitar que se repita en el futuro.',
    },
  ],
}
