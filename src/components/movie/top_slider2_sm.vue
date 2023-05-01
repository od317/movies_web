<template>
    <Carousel class=""  :items-to-show="1.1" :wrap-around="false" ref="myCarousel">
      <Slide  :class="` `" v-for="slide in 10" :key="slide">
        <div  class="carousel__item relative w-full  rounded-md ">
            <img v-if="items[slide-1]&&items[slide-1].link" class=" absolute h-full w-full " :src="items[slide-1].link" alt="" >
            <div class=" h-[100%]  animate-pulse absolute   bg-slate-700 w-[100%]  z-[-1]  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  "></div>
        </div>
      </Slide>
  

    </Carousel>
  </template>
  
  <script setup>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'

  import { ref,watch } from 'vue';
  const props = defineProps({
      items : Array
  });

  let items = props.items
  

  </script>
  
  <style scoped>
  .carousel__item{
    position: relative;
    padding-bottom: 60%;
    margin-right:10%;
    outline: none;
    border:none;
  }
  .carousel__item img{
    position:absolute;
    width: 100%;
    height: 100%;
  }
  .carousel__item div{
    position:absolute;
    width: 100%;
    height: 100%;
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