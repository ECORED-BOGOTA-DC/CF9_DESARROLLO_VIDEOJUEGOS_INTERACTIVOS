<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p(data-aos="fade-right") Los contenidos desarrollados en este componente formativo están enfocados en el diseño de interfaces de usuario y la programación de eventos y personajes para facilitar la interacción de las diferentes acciones que se dan en un videojuego.
    p.mb-5(data-aos="fade-right") Se invita a ver el video a continuación para conocer un poco más sobre los contenidos a desarrollar en este componente:
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/XdCk-JRFryg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
