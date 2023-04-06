<script setup>

import { ref } from 'vue';

const props = defineProps({
      grid : Array
});

let films =  props.grid



</script>
<template>

   <div class="w-full mb-[1rem] text-[120%]" for="">
     Top New Movies
   </div>
   <div class="bg-gradient-to-r from-c2 to-c1 h-[.5rem] w-full mb-[1rem]"></div>
   <div class="grid grid-cols-4  lg:grid-cols-6 gap-y-[5%] gap-x-[3%] mb-[5%]">
               <div v-for="f in films" :class="`${f.class ? f.class:'block'} flex flex-col`">
                   <img class=" rounded-md" :src="f.img" alt="">  
                   <label for="">{{ f.title }}</label>
                   <label for="">2022/1/1</label>

               </div>     
   </div>
   <div class="flex items-center justify-end pr-[1%] ">view more</div>

</template>