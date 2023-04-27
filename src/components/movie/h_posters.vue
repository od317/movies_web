<script setup>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'

  import { ref,watch } from 'vue';
  const props = defineProps({
      items : Array
  });

  let items = ref(props.items)
  items.value = items.value.slice(0,4)
  let trans = ref('-51')
  let on_trans = ref(false)
  let t = ref(false)

  let back = ()=>{
    trans.value = '-0'
    t.value = true
    on_trans.value=true
    let s = setTimeout(()=>{
            let m1 = items.value.pop()
            items.value = [m1].concat(items.value)
            on_trans.value=false
            t.value=false
            trans.value='-51'
    },210)

  }

  let forw = ()=>{
    trans.value = '-102'
    t.value = true
    on_trans.value=true
    let s = setTimeout(()=>{
            let m1 = items.value[0]
            items.value = items.value.slice(1)
            items.value.push(m1)
            on_trans.value=false
            t.value=false
            trans.value='-51'
    },210)
  }





  </script>
  
<template>

<div class="flex flex-row justify-between items-center">
      <label class="text-[130%] mb-[1%]" for="">Posters</label>
      <div class="flex flex-row mr-[5%] gap-[10%]">

        <button :disabled="on_trans" @click="back()" class=" relative disabled:cursor-pointer bg-neutral-800 bg-opacity-40 w-[70%] p-[10%]  rounded-full ">
          <div class="  w-full h-full flex justify-center items-center">
             <ion-icon name="chevron-back-outline"></ion-icon>
          </div>
        </button>  
        <button :disabled="on_trans" @click="forw()" class=" relative disabled:cursor-pointer bg-neutral-800 bg-opacity-40 w-[70%]  p-[10%] rounded-full ">
          <div class="  w-full h-full flex justify-center items-center">
             <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>   
        </button>

      </div>
</div>
<div class=" overflow-hidden">
    <div :style="`transform:translateX(${trans}%)`" :class="`w-full   p-[0%] m-[0%]  whitespace-nowrap relative ${t?' transition-all duration-200':''}`">  
        <div :style="` background-image:url(${i.link})`" class="  w-[50%]  pb-[25%] mr-[1%] inline-block bg-center bg-cover    " v-for="i in items">
          

        </div>
    </div>
</div>

</template>
    