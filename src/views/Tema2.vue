<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Programación de eventos de interfaz HUD
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 La interfaz de usuario es uno de los principales elementos de los niveles de juego ya que por medio de esta, los usuarios pueden monitorear el comportamiento del nivel de juegos. Por ejemplo, pueden conocer cuánto tiempo les queda de juego, cuánto nivel de salud les queda, etc.
    .row.align-items-center.mb-4(data-aos="fade-down")
      .col-auto.pe-0
        img(src='@/assets/curso/tema1/ico.svg', style='width: 50px').m-auto
      .col
        h4.mb-0 Canvas
    p.mt-4(data-aos="fade-right") Unity 3D en su conjunto de GameObject posee uno llamado Canvas que es un lienzo que permite organizar de forma detallada la interfaz de usuario. El Canvas trabaja con un componente adicional llamado el EventSystem el cual permite detectar los eventos que se ejecutan cuando el usuario interactúa con los elementos de la UI.
    p Para agregar el Canvas a la escena hacer clic derecho sobre el panel de jerarquía y seleccionar la opción UI -> Canvas.
    .row.justify-content-center.mt-4.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b #[i Figura 8]]
          p.mb-0 Canvas
        img(src='@/assets/curso/tema2/2.png', alt='Texto que describa la imagen')   
    p.mt-4.mb-5(data-aos="fade-right") Para manipular y crear interfaces de usuario con Canvas, se invita a ver este video:
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/oBSwxXbYiWU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador     
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Componentes Canvas
    p(data-aos="fade-right") Los componentes del Canvas son los elementos usados para realizar el diseño de la interfaz de usuario. Los principales componentes de la clase UI son los siguientes:
    .row.justify-content-center.mt-5(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b #[i Figura 9]]
          p.mb-0 Componentes Canvas
        img(src='@/assets/curso/tema2/3.png', alt='Texto que describa la imagen')   
    p.mt-5.mb-5(data-aos="fade-right") En el siguiente video se analizan cada uno de los componentes del Canvas.
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/IXHDyjP-Nio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador     
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Interfaces de usuario responsivas 
    p(data-aos="fade-right") Las interfaces responsivas son aquellas que se ajustan de forma automática a cualquier resolución de pantalla. Unity 3D tiene una serie de elementos que permiten realizar este tipo de configuraciones en las interfaces de usuario, a saber:
    h5(data-aos="fade-right") Elementos Rect Transform:
    p(data-aos="fade-right") Unity 3D tiene una serie de elementos que permiten realizar este tipo de configuraciones en las interfaces de usuario:
    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-left")
      SlyderA(tipo="b")
        .row.justify-content-center 
          .col-lg-11
            .row.mt-5.mb-5
              .col-md-5.mb-4.mb-md-0
                h4 Elementos Rect Transform
                p <strong>A. Pivot:</strong> controla el punto de origen el cual se usa como referencia para rotar, escalar y mover el control.
                p <strong>B. Manipuladores:</strong> redimensionan el control seleccionado.
                p <strong>C. Anchor:</strong> elemento usado para anclar el punto de creación de los controles de la UI.
              .col-md-7
                figure
                  img(src='@/assets/curso/tema2/4.png', alt='Texto que describa la imagen')   
                  figcaption Manipuladores
        .row.justify-content-center 
          .col-lg-11
            .row 
              .col-md-9.mb-4.mb-md-0
                h4 Elementos Rect Transform
                p Los manipuladores del punto de anclaje permiten cambiar de posición de forma automática el Anchor de cada uno de los controles de la UI.
              .col-md-3
                figure
                  img(src='@/assets/curso/tema2/5.png', alt='Texto que describa la imagen')   
                  figcaption Anclajes
    p.my-5(data-aos="fade-right") En este video se observa cómo funciona el componente Rect Transform para manipular cada uno de los elementos del Canvas.
    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/4dA8RhClf2o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador     
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Eventos  
    p(data-aos="fade-right") Los eventos en la programación son acciones que se ejecutan cuando los usuarios interactúan con los diferentes elementos de la interfaz de usuario. En la siguiente tabla se describe cada uno de esos elementos.
    .tabla-b.color-acento-contenido.mb-5(data-aos="fade-left")
      .tabla-b__header
        .row 
          .col-lg-2
            h4.mb-0.text-white Evento

          .col-lg-2
            h4.mb-0.text-white Elemento UI

          .col-lg-8
            h4.mb-0.text-white Descripción
      table
        tr
          th OnClic
          th Button

          td Permite ejecutar una acción cuando el usuario interactúa con algún botón de la UI.
        tr
          th OnValueChange
          th DropDown

          td Ejecuta una acción cuando el jugador selecciona un elemento de la lista desplegable.
        tr
          th OnValueChange
          <th rowspan="4">InputField</th> 

          td Ejecuta una acción cuando cambia el valor de la caja de texto.
        tr
          th OnEndEdit

          td Ejecuta una acción cuan se finaliza el proceso de edición del texto del elemento.
        tr
          th OnSelect

          td Ejecuta una acción cuando se selecciona la caja de texto.
        tr
          th OnDeselect

          td Ejecuta una acción cuando de deselecciona la caja de texto.
        tr
          th OnValueChanged
          th Slider
          td Ejecuta una acción cuando el valor del slider ha cambiado.
        tr
          th OnChangeValue
          th Toggle
          td Ejecuta una acción cuando el valor del elemento ha cambiado. Retorna un valor booleano (#[i true] o #[i false])
    p.my-5(data-aos="fade-right") En el siguiente video se explica cada uno de los elementos de la interfaz de usuario, que componen la UI.
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/nWSUgXfTkMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-8
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/z.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Material complementario Unity Learn
                  p.text-small Para ampliar el tema sobre la programación de eventos de interfaz HUD, se sugiere consultar en el material complementario la página Unity Learn el tema de IU Components. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://learn.unity.com/tutorial/ui-components" target="_blank")
                    span Enlace web
                    i.fas.fa-file-download
          

</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass">
.tarjeta.color-primario *
  color: #12263F
.tarjeta.color-primario
  background-color: #C0EBF6
</style>
