<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Programación de inteligencia artificial
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/1.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Los desarrolladores de videojuegos viven preocupados por ofrecer juegos que contengan las mejores experiencias gráficas y una mayor inmersión en cada mecánica desarrollada. La inteligencia artificial en los videojuegos también juega un papel fundamental ya que permite tener grandes comportamientos de los jugadores NPC, haciendo que cada nivel de juego sea más atractivo.
    p.mb-5(data-aos="fade-down") Unity 3D, al igual que muchos motores de desarrollo de videojuegos, posee una estructura bastante robusta que permite integrar de forma sencilla la inteligencia artificial a nuestros juegos. Para tener una visión general de la navegación en Unity, son necesarios los siguientes elementos:
    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-left")
      SlyderA(tipo="b")
        .row.justify-content-center 
          .col-lg-11
            .row.mt-5.mb-5
              .col-md-4.mb-4.mb-md-0
                h4 Agente de Navegación (NavMeshAgent)
                p.mt-5 Los agentes de navegación permitirán crear personajes que tengan comportamientos autónomos mientras que se dirigen a su objetivo. Estos agentes de navegación utilizan el componente NavMesh para prevenir que los NPC no choquen entre ellos mientras que caminan en el nivel de juego.
              .col-md-8
                figure
                  img(src='@/assets/curso/tema5/2.png', alt='Texto que describa la imagen')   
                  figcaption Nota. Tomada de Unity Documentation. Manual Unity. Trabajos interiores del sistema de navegación. https://docs.unity3d.com/es/530/Manual/nav-InnerWorkings.html
        .row.justify-content-center 
          .col-lg-11
            .row.mt-5.mb-5
              .col-md-4.mb-4.mb-md-0
                h4 Áreas de camino
                p.mt-5 El sistema de navegación debe contener información que le permita representar las diferentes áreas por donde los personajes puedan caminar en la escena de juego.
              .col-md-8
                figure
                  img(src='@/assets/curso/tema5/3.png', alt='Texto que describa la imagen')   
                  figcaption Nota. Tomada de Unity Documentation. Manual de Unity. Sistema de navegación. https://docs.unity3d.com/es/530/Manual/nav-NavigationSystem.html
        .row.justify-content-center 
          .col-lg-11
            .row.mt-5.mb-5
              .col-md-4.mb-4.mb-md-0
                h4 Encontrar caminos
                p.mt-5 Para encontrar el camino entre dos puntos en el nivel de juego, primero se debe mapear las posiciones de inicio y fin; posteriormente, el algoritmo inicia el recorrido visitando cada uno de los puntos vecinos hasta lograr alcanzar el punto final.
              .col-md-8
                figure
                  img(src='@/assets/curso/tema5/4.png', alt='Texto que describa la imagen')   
                  figcaption Nota. Tomada de Unity Documentation. Manual Unity. Encontrando caminos. https://docs.unity3d.com/es/530/Manual/nav-InnerWorkings.html
    .row.align-items-center.mb-4(data-aos="fade-down")
      .col-auto.pe-0
        img(src='@/assets/curso/tema1/ico.svg', style='width: 50px').m-auto
      .col
        h4.mb-0 Agregar agente de navegación
    p.mt-4.mb-5(data-aos="fade-right") Estos son los pasos para agregar el agente de navegación:
    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-left")
      SlyderA(tipo="b")
        .row.justify-content-center 
          .col-lg-11
            .row
              .col-12.mb-4
                h4 Paso 1
                p.mt-5 Seleccione el GameObjet que se va a utilizar como superficie de navegación y marque la opción Static en el panel Inspector.
              .col-12
                figure
                  img(src='@/assets/curso/tema5/5.png', alt='Texto que describa la imagen')   
        .row.justify-content-center 
          .col-lg-11
            .row.align-items-center
              .col-lg-4
                h4 Paso 2
                p.mt-5 Ingrese al menú Windows>AI>Navigation.
              .col-lg-8
                figure
                  img(src='@/assets/curso/tema5/6.png', alt='Texto que describa la imagen', style="width: 380px").m-auto  
        .row.justify-content-center 
          .col-lg-11
            .row.align-items-center
              .col-lg-4.mb-4.mb-lg-0
                h4 Paso 3
                p.mt-5 Seleccione la pestaña Navigation y haga clic sobre la opción Bake y para finalizar haga clic sobre el botón Bake.
              .col-lg-8
                figure
                  img(src='@/assets/curso/tema5/7.png', alt='Texto que describa la imagen', style="width: 400px").m-auto  
    .row.justify-content-center.mt-5(data-aos="fade-right")
      .col-lg-8
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/z.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Programación de Inteligencia Artificial
                  p.text-small Para ampliar el tema sobre Programación de Inteligencia Artificial, consultar en el material complementario la página Unity Learn, el tema de Navigation Meshes.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://learn.unity.com/project/navigation-meshes" target="_blank")
                    span Enlace web
                    i.fas.fa-file-download                                          
</template>

<script>
export default {
  name: 'Tema5',
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
