<template>
    <Carousel class=" pt-[5%]"  :items-to-show="1.3" :wrap-around="true" ref="myCarousel">
      <Slide  :class="` `" v-for="slide in 5" :key="slide">
        <RouterLink :to="`/movie/${films[slide-1].id}`"  class="carousel__item pb-[70%] w-full relative rounded-md">
        
            <div class=" absolute bg-neutral-800 animate-pulse w-full h-full z-[5]"></div>
            <div class=" absolute  w-full h-full bg-cover bg-center z-[10]" alt="" :style="` background-image:url(${films[slide-1].img})`"></div>
            
            
        </RouterLink>
      </Slide>
  

    </Carousel>
  </template>
  
  <script setup>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'

  import { ref } from 'vue';
  let films = ref([{
    img:'https://wallpapercave.com/wp/wp1817975.jpg',
    id:'tt0816692',
    load:false
  },{
    img:'https://images8.alphacoders.com/100/thumb-1920-1003220.png',
    id:'tt4154796',
    load:false
  },{
    img:'https://images.hdqwalls.com/wallpapers/john-wick-chapter-4-cast-poster-5k-dc.jpg',
    id:'tt10366206',
    load:false
  },{
    img:'https://ntvb.tmsimg.com/assets/p16645155_v_h8_ae.jpg?w=1280&h=720',
    id:'tt1160419',
    load:false
  },{
    img:'https://wallpapercave.com/wp/wp3319155.jpg',
    id:'tt0468569',
    load:false
  }])



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