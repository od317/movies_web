<template>
    <Carousel class=""  :items-to-show="1.3" :wrap-around="true" ref="myCarousel">
      <Slide  :class="` `" v-for="slide in 5" :key="slide">
        <div  class="carousel__item w-full rounded-md">
            <img :src="films[slide-1].img" alt="">
        </div>
      </Slide>
  

    </Carousel>
  </template>
  
  <script setup>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'

  import { ref } from 'vue';
  let films = [{
    img:'https://wallpapercave.com/wp/wp1817975.jpg',
  },{
    img:'https://wallpapercave.com/wp/wp1817975.jpg',
  },{
    img:'https://wallpapercave.com/wp/wp1817975.jpg',
  },{
    img:'https://wallpapercave.com/wp/wp1817975.jpg',
  },{
    img:'https://wallpapercave.com/wp/wp1817975.jpg',
  }]

  </script>
  
  <style scoped>
  .carousel__slide {
  padding: 5px;
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