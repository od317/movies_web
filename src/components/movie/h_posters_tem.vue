<script setup>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'

  import { ref,watch } from 'vue';
  const props = defineProps({
      items : Array
  });

  let items = ref([{},{},{}])
  items.value = items.value.slice(0,5)
  let trans = ref('-41')
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
            trans.value='-41'
    },210)

  }

  let forw = ()=>{
    trans.value = '-82'
    t.value = true
    on_trans.value=true
    let s = setTimeout(()=>{
            let m1 = items.value[0]
            items.value = items.value.slice(1)
            items.value.push(m1)
            on_trans.value=false
            t.value=false
            trans.value='-41'
    },210)
  }





  </script>
  
<template>

<div class="flex flex-row justify-between items-center">
      <label class="text-[130%] mb-[1%]" for="">Posters</label>
      <div class="flex flex-row mr-[5%] gap-[10%]">



      </div>
</div>
<div class=" overflow-hidden">
    <div :style="`transform:translateX(${trans}%)`" :class="`w-full   p-[0%] m-[0%]  whitespace-nowrap relative ${t?' transition-all duration-200':''}`">  
        <div  class=" relative   w-[40%]  pb-[20%] mr-[1%] inline-block bg-center bg-cover    " v-for="i in items">
                  <div class="w-full h-full absolute bg-neutral-800 animate-pulse"></div>
                  <div class="w-full h-full absolute bg-cover bg-center"></div>          
                </div>
    </div>
</div>

</template>
    