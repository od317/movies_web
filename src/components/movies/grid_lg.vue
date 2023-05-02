<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router'
import VLazyImage from "v-lazy-image"




let router = useRouter()

const props = defineProps({
      grid : Array,
      title : String,
      type:String,
      filt:String
});

let title = props.title
let type =  props.type
let filt = props.filt



let router_to =  filt.length>0 ? `/search?type=${type}&${filt}` : `/search?type=${type}`



let films =  props.grid

let p = (r)=>{
  r = r.split('.')

  let res = r.length>1 ? parseInt(parseInt(parseInt((r[0]+r[1]))/2.0)/10):parseInt(parseInt(parseInt((r[0]))/2.0))
  
  let rem  = r.length>1 ? (parseInt(parseInt((r[0]+r[1]))/2.0)%10):(parseInt(parseInt((r[0]+'0'))/2.0)%10)
  
  let rem2 = 5-res

  rem2 = rem>0 ? rem2-1:rem2

  return [res,rem,rem2]
}

</script>
<template>

   <div class="w-full mb-[1rem] capitalize text-[120%]" for="">
     {{ title }} 
   </div>
   <div class="bg-gradient-to-r from-c2 to-c1 h-[.5rem] w-full mb-[1rem]"></div>
   <div class="grid grid-cols-4  lg:grid-cols-6 gap-y-[5%] gap-x-[3%] mb-[3%]">
               <div v-for="f in films" :class="`${f.class ? f.class:'block'} flex flex-col break-words` ">
                <RouterLink :to="`/movie/${f.id}`" class=" shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] relative w-[100%] pb-[150%]">
                    <div class="w-full h-full absolute bg-neutral-800 rounded-md animate-pulse"></div>  
                    <VLazyImage   class=" absolute  w-full cursor-pointer rounded-md h-full lazy" :src="f.img" alt=""/>
                  </RouterLink>
                   <label class="break-words truncate capitalize" for="">{{ f.title }}</label>
                   <div class="flex flex-row stars" id="stars">
                            <div v-for="i in p(f.rate)[0]"  class=" star  w-[12%] pb-[12%] relative ">
                                            <div  :style="c1"  :class="` bg-[#FF9529] w-full h-full absolute `">
                                              
                                            </div>
                                            

                            </div>
                            <div v-if="p(f.rate)[1]!==0"   class=" star w-[12%] bg-[#FF9529]   pb-[12%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:${p(f.rate)[1]*10}%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                              
                              </div>

                            </div>
                            
                            <div v-for="i in p(f.rate)[2]"   class=" star w-[12%] bg-[#FF9529]   pb-[12%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:0%`"  :class="` bg-white  h-full absolute `">
                                              
                              </div>

                            </div>

                   </div>

               </div>     
   </div>
   
   <div  class=" items-center  justify-end lg:mt-[5%] mt-[15%] hidden md:flex  pr-[1%] mb-[5%] ">
         <RouterLink class="hover:text-c3 transition-all duration-200" :to="router_to">
         <button  class=" inline-block cursor-pointer  text-end" >view more</button>
         </RouterLink>
   </div>
</template>

<style scoped>

.star{
   clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

</style>