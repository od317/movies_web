<template>
    <Carousel class=""  :items-to-show="1.6" :wrap-around="true" ref="myCarousel">
      <Slide  :class="` `" v-for="slide in 5" :key="slide">
        <div  class="carousel__item w-full px-[5%] rounded-md">
            <div class="w-full  pb-[135%]  relative flex  justify-center ">
               <div class=" absolute w-full h-full bg-neutral-800 animate-pulse"></div>
              <div class=" absolute h-full w-full rounded-md transition-all bg-cover bg-center   " :src="films[slide-1].img" alt="" :style="` background-image:url(${films[slide-1].img})`"></div>
            </div>
        </div>
      </Slide>
  

    </Carousel>
  </template>
  
  <script setup>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'

  import { ref } from 'vue';
  let films = ref([{
    img:'https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
    load:false
  },{
    img:'https://m.media-amazon.com/images/M/MV5BZjYzNTMzZTAtNzMzOS00ZWRhLTg3MWMtM2NjYmJmZjU4NmFhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzI3NjY2ODc@._V1_.jpg',
    load:false
  },{
    img:'https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
    load:false
  },{
    img:'https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg',
    load:false
  },{
    img:'https://m.media-amazon.com/images/M/MV5BZDA4YmE0OTYtMmRmNS00Mzk2LTlhM2MtNjk4NzBjZGE1MmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg',
    load:false
  }])

  let loads = (img)=>{
    img.load=true
  }

  </script>
  
  <style scoped>
  .carousel__slide {
         opacity: 1;
  }
  .carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide--prev {
  opacity: 1;

}
.carousel__slide--next {
  opacity: 1;

}

.carousel__slide--active {
  opacity: 1;
  padding: 0;
}

</style>