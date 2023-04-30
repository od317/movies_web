<template>
    <div class="flex flex-row mt-[20%]">
      <label  class="px-[1.5%] mb-[3%] text-[150%]" for="">{{ title }} :
      </label>
    </div>
      <Carousel  :settings="settings" :breakpoints="breakpoints" :wrap-around="true">
        <Slide class="px-[1%] w-[70%]" v-for="f in films" :key="f">
          <div class="carousel__item w-full">
            <RouterLink :to="`/movie/${f.id}`">
             <div class=" pb-[150%] w-full  relative">
                <div class="w-full h-full absolute animate-pulse bg-neutral-800"></div>
                <img :src="f.img" class=" absolute w-full h-full" alt="">
              </div>
            </RouterLink>  
          </div>
        </Slide>
  
      </Carousel>
      <div class="flex items-center justify-start  px-[1.5%] mb-[3%] mt-[2%] text-[130%] flex-grow pr-[2%]" for="">
          <button class="inline-block ">view more</button>
      </div>

    </template>
    
    <script setup>
    import { defineComponent } from 'vue'
    import { Carousel, Navigation, Slide } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'
    
    let props = defineProps({
        title:String,
        films:Array
    })
  
    let  breakpoints = {
        // 700px and up
        700: {
          itemsToShow: 2.1,
          snapAlign: 'start',
        },
        // 1024 and up
        1024: {
          itemsToShow: 5,
          snapAlign: 'start',
        },
      }
    let settings =  {
        itemsToShow: 2.1,
        snapAlign: 'start',
      }
  
    let films = props.films
    let type = props.title
    </script>