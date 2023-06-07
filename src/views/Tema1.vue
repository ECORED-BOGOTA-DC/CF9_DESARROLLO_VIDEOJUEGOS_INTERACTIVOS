<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Programación de comportamientos de personajes controlados por el usuario
    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 La programación de los comportamientos de los personajes permitirá definir las diferentes acciones que serán ejecutadas por el personaje cuando el jugador interactúe con los diferentes dispositivos de juego (#[i joystick], teclado, mouse).
    .row.align-items-center.mt-4(data-aos="fade-right")
      .col-auto.pe-0
        img(src='@/assets/curso/tema1/ico.svg', style='width: 50px').m-auto
      .col
        h4.mb-0 Input Manager
    p.mt-4(data-aos="fade-down") El Input Manager es una ventana especializada en el motor de desarrollo Unity 3D que permite definir los diferentes ejes (#[i axes]) que se encuentren asociados a las diferentes acciones del juego o personaje.
    p.mb-5 El Input Manager en Unity 3D utiliza los siguientes tipos de controles:
    .tabla-b.color-acento-contenido.mb-5(data-aos="fade-left")
      .tabla-b__header
        h4.mb-0 Controles Unity 3D
      table
        tr
          th #[i Key]
          td Hace referencia a cualquier tecla (#[i key]) que se encuentre en teclado físico, como por ejemplo X, Ctrl, Shift.
        tr
          th Button
          td Hace referencia a cualquier tipo de botón que se encuentre en un control físico como un #[i gamepad], #[i joystick].
        tr
          th Virtual Axis
          td Permite realizar el mapeo de los ejes de un control físico. Por ejemplo, cuando el jugador mueve las palancas de un #[i gamepad].
    p.mt-4(data-aos="fade-right") En la siguiente figura se puede observar el mapeo de controles de Unity:
    .row.justify-content-center.mt-5(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b #[i Figura 1]]
          p.mb-0 Mapeados controles de juego
        img(src='@/assets/curso/tema1/2.png', alt='Texto que describa la imagen')
        figcaption.mt-3 Nota. Tomada de Vegas (s. f.). http://www.jvunity.weebly.com/uploads/4/7/6/0/47606749/controlmap.png
    p.mt-4(data-aos="fade-right") Para acceder a la ventana Input Manager dar clic en el menú Edit > Project Settings como se muestra en la siguiente imagen:
    .row.justify-content-center.mt-5(data-aos="fade-right")
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b #[i Figura 2]]
          p.mb-0  Input Manager Unity 3D
        img(src='@/assets/curso/tema1/3.png', alt='Texto que describa la imagen')
    p.mt-4.mb-5(data-aos="fade-down") En el siguiente video tutorial se observa la programación de personajes controlados por el usuario y la creación de un nuevo proyecto.
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/H9k9C9TbwWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador     
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Configuración de animaciones de los personajes
    p(data-aos="fade-right") El motor de desarrollo Unity 3D posee diferentes herramientas en su editor que permiten manipular las animaciones de los personajes importados. Las animaciones de los personajes pueden encontrarse embebidas en el personaje o externas al personaje.
    .row.justify-content-center.mt-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b #[i Figura 3]]
          p.mb-0 Editor Unity 3D       
        img(src='@/assets/curso/tema1/4.png', alt='Texto que describa la imagen')
    .row.mt-4.bg1.align-items-center(data-aos="fade-down").mb-4
      .col-lg-6
        img(src='@/assets/curso/tema1/5.png', alt='Texto que describa la imagen')
      .col-lg-6
        .bloque-texto-b.color-acento-contenido.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 En la web existen un gran número de recursos que facilitan los procesos de animación de personajes si no se tienen las habilidades o no se tienen las animaciones para llevar a cabo este proceso. Para este componente se va a trabajar con la página Mixamo #[em (www.mixamo.com)], que permite realizar las animaciones de personajes de un juego.
            i.fas.fa-quote-right
    p Para acceder a la página de Mixamo y comenzar a hacer las animaciones se deben seguir estos pasos.
    .tarjeta.tarjeta--gris.p-4.mt-4(data-aos="fade-right")
      PasosB.color-acento-botones
        .row.justify-content-center(titulo="")
          .col-lg-11
            .row
              .col-md-6.mb-4.mb-md-0
                h5 Ingreso Mixamo
                p Para lograr trabajar con este sitio web se debe hacer el registro en la página Web de Mixamo: #[em www.mixamo.com]. Iniciar sesión se debe hacer clic en el botón Log In.
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
                p.mb-0 1.	Explorador de personajes: permite cambiar el personaje en el proceso de animación.
                p.mb-0 2.	Explorador de animaciones: permite ingresar a la galería de animaciones.
                p.mb-0 3.	Previsualizador de personaje.
                p.mb-0 4.	Botones de acción: permite realizar descarga de los modelos personalizados.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/8.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="")
          .col-lg-11
            .row
              .col-md-6.mb-4.mb-md-0
                h5 Animando el personaje
                p Seleccione el personaje a su gusto. Seleccione la opción Character. En el explorador de personajes seleccione el personaje que se ajuste a su criterio. Cuando seleccione el personaje se visualizará el siguiente mensaje.
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/9.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="")
          .col-lg-11
            .row
              .col-lg-4.mb-4.mb-md-0
                h5 Asignación de animaciones
                p El proceso de asignación de las animaciones consiste en seleccionar las animaciones adecuadas teniendo en cuenta los comportamientos que se deseen generar.
                p Seleccione la opción <strong>Animations</strong> para asignar las animaciones al personaje.
              .col-lg-8
                .tabla-b.color-acento-contenido.mb-5
                  .tabla-b__header
                    h4.mb-0 Tipos de animaciones
                  table
                    tr.colort2 
                      th #[i Idle]
                      td Animación que representa el estado de reposo del personaje.
                    tr.colort1
                      th #[i Walk]
                      td Animación que representa el estado de caminar.
                    tr.colort2
                      th #[i Run]
                      td Animación que representa el estado de correr.                      
                    tr.colort1
                      th #[i Jump]
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
    p.mt-4.mb-5(data-aos="fade-right") En los siguientes videos tutoriales se explica cómo se pueden generar personajes y darles diferentes animaciones.
    h4.text-center(data-aos="fade-down") Obtener modelo 3D en Mixamo
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/rJt6_XLpwYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    h4.text-center(data-aos="fade-down") Importar personaje
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/daOcpEpahTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    h4.text-center(data-aos="fade-down") Asignar animaciones
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/KkTGqV7ZxQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador     
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Máquina de estado finito (Animator Controller)
    p.mb-5(data-aos="fade-right") El Animator Controller es un panel del editor de Unity 3D que permite organizar y mantener un conjunto de clips de animación y asociar estas animaciones por medio de transiciones. En la gran mayoría de los casos, el Animator Controller puede contener varias animaciones y cambiar entre cada una de ellas dependiendo de las condiciones que ocurran en el juego, como se puede observar en el siguiente video.
    h4.text-center.mt-4(data-aos="fade-down") Animator Controller
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/IPe-Dvn5VBw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.align-items-center.my-4(data-aos="fade-right")
      .col-auto.pe-0
        img(src='@/assets/curso/tema1/ico.svg', style='width: 50px').m-auto
      .col
        h4.mb-0 Estados de animación         
    p(data-aos="fade-down") Los estados en la máquina de estados finito (Animator Controller) son la representación de los comportamientos que el personaje va a tener (reposo, caminar, correr y saltar).
    .row.justify-content-center.my-5(data-aos="fade-right")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b #[i Figura 4]]
          p.mb-0 Estados de la FMS
        img(src='@/assets/curso/tema1/13.png', alt='Texto que describa la imagen')    
    .row.align-items-center.mb-4(data-aos="fade-down")
      .col-auto.pe-0
        img(src='@/assets/curso/tema1/ico.svg', style='width: 50px').m-auto
      .col
        h4.mb-0 Parámetros  
    p.mt-3.mb-5(data-aos="fade-right") Los parámetros en la máquina de estados finito representan una variable que permite controlar el cambio de un estado a otro haciendo uso de una transición. Los parámetros cuentan con cuatro tipos:
    .row.justify-content-center(data-aos="fade-left")
      .col-auto.mb-4.mb-lg-0
        .row.coloras.p-2
          h5.text-center.mb-0 Float
      .col-auto.mb-4.mb-lg-0
        .row.coloras.p-2
          h5.text-center.mb-0 Int
      .col-auto.mb-4.mb-lg-0
        .row.coloras.p-2
          h5.text-center.mb-0 Bool
      .col-auto
        .row.coloras.p-2
          h5.text-center.mb-0 Trigger
    .row.justify-content-center.my-5(data-aos="fade-right")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b #[i Figura 5]]
          p.mb-0 Parámetros FMS
        img(src='@/assets/curso/tema1/14.png', alt='Texto que describa la imagen')    
    .row.align-items-center.mb-4(data-aos="fade-down")
      .col-auto.pe-0
        img(src='@/assets/curso/tema1/ico.svg', style='width: 50px').m-auto
      .col
        h4.mb-0 Transiciones
    p.mt-3(data-aos="fade-right") Las State Machine Transitions existen para simplificar el proceso de transición entre los diferentes estados del Animator Controller. Las transiciones permiten tener un mayor nivel de complejidad sobre la lógica de la máquina de estados; y las transiciones poseen condiciones que permiten controlar el proceso de cambio de un estado a otro.
    .row.justify-content-center.my-5(data-aos="fade-right")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b #[i Figura 6]]
          p.mb-0 Transiciones FMS
        img(src='@/assets/curso/tema1/15.png', alt='Texto que describa la imagen')        
    .row.align-items-center.mb-4(data-aos="fade-down")
      .col-auto.pe-0
        img(src='@/assets/curso/tema1/ico.svg', style='width: 50px').m-auto
      .col
        h4.mb-0 Árboles de mezclado (Blend Tree)
    p.mt-3(data-aos="fade-right") El Blend Tree permite realizar combinaciones entre los diferentes clips de animaciones y así generar comportamientos complejos.
    .row.justify-content-center.mt-5(data-aos="fade-left")
      .col-lg-4
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b #[i Figura 7]]
          p.mb-0 Blend Tree Unity
        img(src='@/assets/curso/tema1/16.png', alt='Texto que describa la imagen')   
    p.mt-4.mb-5(data-aos="fade-right") En el video que sigue a continuación se observa cómo se trabaja con el árbol de mezclado o Blend Tree.
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/wqYKMcW3WtE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
             
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
