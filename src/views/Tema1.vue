<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Programación de comportamientos de personajes controlados por el usuario
    p Son un conjunto de métodos y técnicas con el objetivo de organizar los equipos de trabajo para diseñar soluciones y desarrollar las funciones de un programa de una manera organizada y eficiente.
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 La programación de los comportamientos de los personajes permitirá definir las diferentes acciones que serán ejecutadas por el personaje cuando el jugador interactúe con los diferentes dispositivos de juego (joystick, teclado, mouse).
    p.mt-4 Son un conjunto de métodos y técnicas con el objetivo de organizar los equipos de trabajo para diseñar soluciones y desarrollar las funciones de un programa de una manera organizada y eficiente.
    .row.mt-4
      .col-2
        .row.align-items-center
          .col-3
            img(src='@/assets/curso/tema1/ico.svg', alt='Texto que describa la imagen')
          .col-9
            h4.mb-0 Input manager
    p.mt-4 El input manager es una ventana especializada en el motor de desarrollo Unity3D que permite definir los diferentes ejes (axes) que se encuentren asociados a las diferentes acciones del juego y/o personaje.
    p El input manager en Unity3D utiliza los siguientes tipos de controles:
    .tabla-b.color-acento-contenido.mb-5
    .tabla-b__header
      h4.mb-0 Controles Unity3D
    table
      tr
        th Key
        td Hace referencia a cualquier tecla (key) que se encuentre en teclado físico, como por ejemplo X, Ctrl, Shift.
      tr
        th Button
        td Hace referencia a cualquier tipo de botón que se encuentre en un control físico como un gamepad, joystick.
      tr
        th Virtual Axis
        td Permite realizar el mapeo de los ejes de un control físico. Por ejemplo, cuando el jugador mueve las palancas de un gamepad.
    p.mt-4 En la siguiente figura se puede observar el mapeo de controles de Unity:
    .row.justify-content-center.mt-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 1 
          span Mapeados controles de juego
        img(src='@/assets/curso/tema1/2.png', alt='Texto que describa la imagen')
        figcaption.mt-3 Nota. Tomada de Vegas (s. f.). http://www.jvunity.weebly.com/uploads/4/7/6/0/47606749/controlmap.png
    p.mt-4 Para acceder a la ventana Input Manager dar clic en el menú Edit > Project Settings como se muestra en la siguiente imagen:
    .row.justify-content-center.mt-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 2 
          span  Input Manager Unity3D
        img(src='@/assets/curso/tema1/3.png', alt='Texto que describa la imagen')
    p.mt-4 En el siguiente video tutorial se observa la programación de personajes controlados por el usuario y la creación de un nuevo proyecto.
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador     
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Configuración de animaciones de los personajes
    p El motor de desarrollo Unity 3D posee diferentes herramientas en su editor que permiten manipular las animaciones de los personajes importados. Las animaciones de los personajes pueden encontrarse embebidas en el personaje o externas al personaje.
    .row.justify-content-center.mt-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 3 
          span   Editor Unity 3D       
        img(src='@/assets/curso/tema1/4.png', alt='Texto que describa la imagen')
    .row.mt-4.bg1.align-items-center
      .col-lg-6
        img(src='@/assets/curso/tema1/5.png', alt='Texto que describa la imagen')
      .col-lg-6
        .bloque-texto-b.color-acento-contenido.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 En la web existen un gran número de recursos que facilitan los procesos de animación de personajes si no se tienen las habilidades o no se tienen las animaciones para llevar a cabo este proceso. Para este componente se va a trabajar con la página Mixamo <cm>(www.mixamo.com)</cm>, que permite realizar las animaciones de personajes de un juego.
            i.fas.fa-quote-right
    .tarjeta.tarjeta--gris.p-4.mt-4
      PasosB.color-acento-botones

        .row.justify-content-center(titulo="")
          .col-lg-11
            .row
              .col-md-6.mb-4.mb-md-0
                h5 Ingreso Mixamo
                p Para lograr trabajar con este sitio web se debe hacer el registro en la página Web de Mixamo: www.mixamo.com. Iniciar sesión se debe hacer clic en el botón Log In.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/6.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="")
          .col-lg-11
            .row
              .col-md-6.mb-4.mb-md-0
                h5 Inicio de sesión
                p Una de las opciones de inicio de sesión que da la página web es ingresar con una cuenta de Google, Facebook, Apple o la de Adobe Cloud.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/7.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="")
          .col-lg-11
            .row
              .col-md-6.mb-4.mb-md-0
                h5 Panel principal
                p El panel principal cuenta con diferentes acciones que permiten realizar cambios de personajes y así tener el flujo de animaciones correcta para lograr programar los comportamientos de los personajes.
                p.mb-0 1.	Explorador de personajes: Permite cambiar el personaje en el proceso de animación.
                p.mb-0 2.	Explorador de animaciones: Permite ingresar a la galería de animaciones.
                p.mb-0 3.	Previsualizador de personaje.
                p.mb-0 4.	Botones de acción: Permite realizar descarga de los modelos personalizados.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/8.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="")
          .col-lg-11
            .row
              .col-md-6.mb-4.mb-md-0
                h5 Animando el personaje
                p Seleccione el personaje a su gusto. Seleccione la opción Character En el explorador de personajes seleccione el personaje que se ajuste a su criterio. Cuando seleccione el personaje se visualizará el siguiente mensaje.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/9.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="")
          .col-lg-11
            .row
              .col-md-6.mb-4.mb-md-0
                h5 Asignación de animaciones
                p El proceso de asignación de las animaciones consiste en seleccionar las animaciones adecuadas teniendo en cuenta los comportamientos que se deseen generar.
                p Seleccione la opción <strong>Animations</strong> para asignar las animaciones al personaje.
              .col-md-6
                .tabla-b.color-acento-contenido.mb-5
                  .tabla-b__header
                    h4.mb-0 Tipos de animaciones
                  table
                    tr.colort2 
                      th Idle
                      td Animación que representa el estado de reposo del personaje.
                    tr.colort1
                      th walk
                      td Animación que representa el estado de caminar.
                    tr.colort2
                      th run
                      td Animación que representa el estado de correr.                      
                    tr.colort1
                      th jump
                      td Animación que representa el estado de salto.               
        .row.justify-content-center(titulo="")
          .col-lg-11
            .row
              .col-md-6.mb-4.mb-md-0
                h5 Descargue el modelo
                p Una vez asignadas las animaciones al personaje, descargue el modelo en Download.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/10.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="")
          .col-lg-11
            .row
              .col-md-6.mb-4.mb-md-0
                h5 Configuración de descarga
                p En la opción de formato, Format, seleccione FBX For Unity  y en la opción Pose seleccione la opción T-Pose
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/11.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="")
          .col-lg-11
            .row
              .col-md-6.mb-4.mb-md-0
                h5 Guardar animaciones
                p Se recomienda que el personaje y las animaciones se encuentren en la misma carpeta de almacenamiento. Cree una carpeta y llámela personaje para efectos de la guía instruccional.
                p Renombrar el archivo a Soldado.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/12.png', alt='Texto que describa la imagen')
    p.mt-4 En los siguientes videos tutoriales se explica cómo se pueden generar personajes y darles diferentes animaciones.
    h4.text-center.mt-4 Obtener modelo 3D en MIxamo
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    h4.text-center.mt-4 Importar personaje
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      h4.text-center.mt-4 Asignar animaciones
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador     
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.2 Máquina de estado finito (Animator Controller)
    p El Animator Controller es un panel del editor de Unity3D que permite organizar y mantener un conjunto de clips de animación y asociar estas animaciones por medio de transiciones. En la gran mayoría de los casos, el Animator Controller puede contener varias animaciones y cambiar entre cada una de ellas dependiendo de las condiciones que ocurran en el juego, como se puede observar en el siguiente video.
    h4.text-center.mt-4 Animator Controller
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mt-5
      .col-3
        .row.align-items-center
          .col-3
            img(src='@/assets/curso/tema1/ico.svg', alt='Texto que describa la imagen')
          .col-9
            h4.mb-0 Estados de animación         
    p Los estados en la máquina de estados finito (Animator Controller) son la representación de los comportamientos que el personaje va a tener (reposo, caminar, correr y saltar).
    .row.justify-content-center.mt-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 4
          span Estados de la FMS
        img(src='@/assets/curso/tema1/13.png', alt='Texto que describa la imagen')    
    .row.mt-5
      .col-2
        .row.align-items-center
          .col-3
            img(src='@/assets/curso/tema1/ico.svg', alt='Texto que describa la imagen')
          .col-9
            h4.mb-0 Parámetros  
    p.mt-3 Los parámetros en la máquina de estados finito representan una variable que permite controlar el cambio de un estado a otro haciendo uso de una transición. Los parámetros cuentan con cuatro tipos:
    .row.justify-content-center 
      .col-lg-2
        .row.coloras.p-2
          h5.text-center.mb-0 Float
      .col-lg-2
        .row.coloras.p-2
          h5.text-center.mb-0 Int
      .col-lg-2
        .row.coloras.p-2
          h5.text-center.mb-0 Bool
      .col-lg-2
        .row.coloras.p-2
          h5.text-center.mb-0 Trigger
    .row.justify-content-center.mt-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 5
          span  Parámetros FMS
        img(src='@/assets/curso/tema1/14.png', alt='Texto que describa la imagen')    
    .row.mt-5
      .col-2
        .row.align-items-center
          .col-3
            img(src='@/assets/curso/tema1/ico.svg', alt='Texto que describa la imagen')
          .col-9
            h4.mb-0 Transiciones
    p.mt-3 Las State Machine Transitions existen para simplificar el proceso de transición entre los diferentes estados del Animator Controller. Las transiciones permiten tener un mayor nivel de complejidad sobre la lógica de la máquina de estados; y las transiciones poseen condiciones que permiten controlar el proceso de cambio de un estado a otro.
    .row.justify-content-center.mt-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 6
          span   Transiciones FMS
        img(src='@/assets/curso/tema1/15.png', alt='Texto que describa la imagen')        
    .row.mt-5
      .col-4
        .row.align-items-center
          .col-2
            img(src='@/assets/curso/tema1/ico.svg', alt='Texto que describa la imagen')
          .col-10
            h4.mb-0 Árboles de mezclado (Blend Tree)
    p.mt-3 El Blend Tree permite realizar combinaciones entre los diferentes clips de animaciones y así generar comportamientos complejos.
    .row.justify-content-center.mt-5
      .col-lg-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 7
          span   Blend Tree Unity
        img(src='@/assets/curso/tema1/16.png', alt='Texto que describa la imagen')   
    p.mt-5 En el video que sigue a continuación se observa cómo se trabaja con el árbol de mezclado o Blend Tree.
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
             
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>