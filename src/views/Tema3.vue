<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Programación de eventos disparadores (interacción con el entorno)
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 En el diseño de las mecánicas del videojuego es necesario crear interacciones con el entorno, es en este punto donde los eventos ocurridos por condiciones físicas permiten a los jugadores recoger ítems de los niveles de juego, sufrir daño por pasar sobre zonas no permitidas, etc.
    p.mb-5(data-aos="fade-down") Los motores de videojuegos permiten simular los comportamientos físicos del entorno real haciendo uso de diferentes componentes como rigibodies, materiales físicos, colisionadores etc., permitiendo que las mecánicas sean dinámicas y parecidas a la realidad.
    .row.align-items-center.mb-4(data-aos="fade-left")
      .col-auto.pe-0
        img(src='@/assets/curso/tema1/ico.svg', style='width: 50px').m-auto
      .col
        h4.mb-0 Triggers    
    p.mt-4(data-aos="fade-right") Los triggers son eventos que ocurren cuando los objetos de videojuego se entrelazan entre sí como se observa en la figura.
    .row.justify-content-center.my-5(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b #[i Figura 10]]
          p.mb-0 Trigger entre gameobjects
        img(src='@/assets/curso/tema3/2.png', alt='Texto que describa la imagen')   
    .row.align-items-center.mb-4(data-aos="fade-left")
      .col-auto.pe-0
        img(src='@/assets/curso/tema1/ico.svg', style='width: 50px').m-auto
      .col
        h4.mb-0 Collision
    p.mt-4(data-aos="fade-right") La colisión es un evento que ocurre cuando dos gameobjects se tocan entre sí, este evento es muy utilizado para provocar daño a los enemigos en un videojuego.    
    .row.justify-content-center.mt-5(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b #[i Figura 11]]
          p.mb-0 Collision
        img(src='@/assets/curso/tema3/3.png', alt='Texto que describa la imagen')
    p.mt-4(data-aos="fade-right") Los tipos de colliders son:
    .row.mb-5(data-aos="fade-left")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/1.svg' alt='AvatarTop')

          .tarjeta.color-acento-contenido
            .p-4
              h2.text-center Sphere Collider
              p.text-center Este tipo de collider es muy usado en formas redondas.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/2.svg' alt='AvatarTop')

          .tarjeta.color-acento-contenido
            .p-4
              h2.text-center Box Collider
              p.text-center Es empleado en formas cubicas, edificios, carretera, etc.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/3.svg' alt='AvatarTop')

          .tarjeta.color-acento-contenido
            .p-4
              h2.text-center Capsule Collider
              p.text-center Utilizado en los personajes para crear zonas de daño; es muy utilizado en los troncos de los árboles.
    p.mt-3.mb-5(data-aos="fade-right") En el siguiente video se estudian las físicas y colisiones en el motor de desarrollo.
    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/G6WXi5jgplA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.align-items-center.mb-4(data-aos="fade-left")
      .col-auto.pe-0
        img(src='@/assets/curso/tema1/ico.svg', style='width: 50px').m-auto
      .col
        h4.mb-0 OnControllerHit
    p.mt-3(data-aos="fade-right") Este tipo de colisión es característico en los personajes de los videojuegos, ya que permite detectar cuando el jugador recoge elementos del nivel de juego.
    .row.justify-content-center.mt-5(data-aos="fade-down")
      .col-lg-4
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b #[i Figura 12]]
          p.mb-0 Character controller
        img(src='@/assets/curso/tema3/4.png', alt='Texto que describa la imagen')         
    p.mt-4.mb-5(data-aos="fade-right") A través de los siguientes videos se explicará cómo controlar un personaje y aplicar animaciones:
    h4.text-center(data-aos="fade-right") Character controller para controlar el movimiento de un personaje.
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/J3sKKiGFcRM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    h4.text-center(data-aos="fade-down") Colisión con otros objetos de la escena.
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/7jY6trsIA1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    h4.text-center(data-aos="fade-down") Generación de cámara de seguimiento al personaje.
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/-tqS5VcgEt0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center.mt-4(data-aos="fade-right")
      .col-lg-8
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/z.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Material complementario Unity Learn
                  p.text-small Para ampliar el tema sobre la programación de eventos disparadores e interacción con el entorno, consultar en el material complementario la página Unity Learn el tema de Catapult Physics; Forces, and Energy.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://learn.unity.com/project/catapult-physics-forces-and-energy" target="_blank")
                    span Enlace web
                    i.fas.fa-file-download                        
</template>

<script>
export default {
  name: 'Tema3',
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
