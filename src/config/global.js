export default {
  global: {
    componenteFormativo: 'Programación de eventos de personajes y entornos',
    descripcionCurso:
      'El componente formativo se enfoca en el diseño de interfaces de usuario y eventos para facilitar la interacción de las diferentes acciones que ocurrirán en los niveles de juego.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
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
        titulo:
          'Programación de comportamientos de personajes controlados por el usuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Configuración de animaciones de los personajes',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Máquina de estado finito',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Programación de eventos de interfaz HUD',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Componentes del Canvas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Interfaces de usuario responsivas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Eventos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Programación de eventos disparadores (interacción con el entorno)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Programación de comportamientos relativos a la mecánica de videojuego',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Programación de inteligencia artificial',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Programación de eventos de interfaz HUD',
      referencia:
        'Unity Technologies. (2022). <em>UI Components. Unity Learn<em>.',
      tipo: 'Página web',
      link: 'https://learn.unity.com/tutorial/ui-components',
    },
    {
      tema: 'Programación de eventos disparadores (interacción con el entorno)',
      referencia:
        'Unity Technologies. <em>(2022) Catapult Physics; Forces, and Energy. Unity Learn<em>.',
      tipo: 'Página web',
      link:
        'https://learn.unity.com/project/catapult-physics-forces-and-energy',
    },
    {
      tema: 'Programación de inteligencia artificial',
      referencia: 'De Byl, P. (2022). <em>Navigation Meshes Unity Learn</em>.',
      tipo: 'Página web',
      link: 'https://learn.unity.com/project/navigation-meshes',
    },
  ],
  glosario: [
    {
      termino: 'FMS',
      significado:
        'acrónimo usado en Unity para referenciar la máquina de estado finito.',
    },
    {
      termino: '<em>Input</em>',
      significado:
        'clase de Unity usado para detectar cuando el jugador interactúa con un dispositivo de entrada (teclado, <i>mouse</i>, <i>joystick</i>).',
    },
    {
      termino: 'Parámetro',
      significado:
        'variable definida en una máquina de estado para controlar las transiciones entre los estados.',
    },
    {
      termino: '<em>Public</em>',
      significado:
        'modificador de acceso que permite dar accesibilidad a las variables y métodos en un programa.',
    },
    {
      termino: 'Transición',
      significado:
        'relación que existe entre cada estado en una máquina de estados finitos.',
    },
    {
      termino: '<em>Using</em>',
      significado:
        'palabra reservada en .net que permite importar referencias a clases.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acerenza, N., Coopes, A., Mesa, G., Viera, A., Fernández, E., Laurenzo, T., y Vallespisr, D. (2009). <em>Una metodología para desarrollo de videojuegos. 38º JAIIO - Simposio Argentino de Ingeniería de Software, pp. 171-176. </em>',
      link:
        'https://www.fing.edu.uy/sites/default/files/biblio/22811/asse_2009_16.pdf',
    },
    {
      referencia:
        'Colombiaaprende.edu.co (s. f). <em>Lección 1: ¿Qué es un algoritmo?</em> ',
      link:
        'https://aprende.colombiaaprende.edu.co/sites/default/files/naspublic/curriculos_ex/n1g10_fproy/nivel1/programacion/unidad1/leccion1.html',
    },
    {
      referencia: 'GameDevTraum. (2021). <em>Scripts en programación.</em> ',
      link:
        'https://gamedevtraum.com/es/programacion-informatica/introduccion-a-la-programacion/que-es-script-programacion/',
    },
    {
      referencia:
        'Lenguajes de programador.net. (s. f). <em>¿Qué es una variable en programación?</em> ',
      link:
        'https://lenguajesdeprogramacion.net/diccionario/que-es-una-variable-en-programacion/',
    },
    {
      referencia:
        'Lenguajes de programador.net. (s. f). <em>¿Qué es una función (o un método) en programación?</em> ',
      link:
        'https://lenguajesdeprogramacion.net/diccionario/que-es-una-funcion-o-metodo-en-programacion/',
    },
    {
      referencia: 'Unity Technologies. (2022). <em>Unity Learn.</em> ',
      link: 'https://learn.unity.com/',
    },
    {
      referencia:
        'Unity Technologies. (2016). <em>Unity Documentation. Manual Unity.</em> ',
      link: 'https://docs.unity3d.com/es/530/Manual/UnityManual.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricía Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Johlver José Pardo García',
          cargo: 'Experto temático',
          centro:
            'Centro Industrial de Mantenimiento Integral - Regional Santander',
        },
        {
          nombre: 'Luz Aída Quintero Velásquez',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable equipo de desarrollo curricular',
          centro:
            'Centro industrial del diseño y la manufactura - Regional Santander',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesora metodológica y pedagógica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuadora instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodólogo para la formación virtual - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñador de contenidos digitales - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animador y productor multimedia - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Jorge Enrique Haylock Calderín',
          cargo: 'Desarrollo front-end',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador full-stack - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validadora de recursos digitales - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Validador de recursos digitales - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
