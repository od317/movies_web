<template>
  <div class="flex flex-row mt-[20%]">
    <label  class="px-[1.5%] mb-[3%] text-[100%]" for="">{{ type }} :
    </label>
    <div class="flex items-center justify-end px-[1.5%] mb-[3%] text-[100%] flex-grow pr-[2%]" for="">view more </div>
  </div>
    <Carousel  :settings="settings" :breakpoints="breakpoints" :wrap-around="true">
      <Slide class=" px-[2%] " v-for="f in films" :key="f">
        <div class="carousel__item ">
            <div class="">
                <img :src="f.img" class="" alt="">
            </div>
        </div>
      </Slide>

    </Carousel>
  </template>
  
  <script setup>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  
  let props = defineProps({
      type:String,
      films:Array
  })

  let  breakpoints = {
      // 700px and up
      700: {
        itemsToShow: 2.5,
        snapAlign: 'start',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    }
  let settings =  {
      itemsToShow: 2.5,
      snapAlign: 'start',
    }

  let films = props.films
  let type = props.type
  </script>

<style scoped>
.carousel__item {
  width: 100%;
}



.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>