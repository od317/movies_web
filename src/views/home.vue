<script setup>

import {ref} from 'vue'
import flic from '../components/home/top_slider_sm.vue'
import flic2 from '../components/home/top_slider_sm2.vue'
import flicl from '../components/home/top_slider_sml.vue'
import flicl2 from '../components/home/top_slider_sml2.vue'
import newr from '../components/home/new_r.vue'
import movie_of from '../components/home/movie_of.vue'
import { useRouter } from 'vue-router';

let router = useRouter()

let films_grid = [
{
   title:'The Mandalorian',
   rate:'8.7',
   img:'https://external-preview.redd.it/the-mandalorian-season-3-ep-1-35-minutes-16-seconds-v0-zAsAQZFS9wDTTwRa42NWRjEZdqVEp12ptrI1ZPk48XY.jpg?width=640&crop=smart&auto=webp&s=f6e244a74485ddd93d8108d1281da6582f4a8771',
   c:'hidden lg:inline-block',
   id:'tt8111088'
},
{
   title:'Beef',
   rate:'8.3',
   img:'https://i.redd.it/e5vp77ku6lqa1.jpg',
   c:'hidden lg:inline-block',
   id:'tt14403178'
},
{
   title:'Succession',
   rate:'8.8',
   img:'https://m.media-amazon.com/images/M/MV5BZTY0YjU0NTUtMGRmNS00NDMyLWI2MzYtNjM2MmM1M2FkMjkyXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_FMjpg_UX1000_.jpg',
   c:'hidden md:inline-block',
   id:'tt7660850'
},
{
   title:'The Super Mario Bros. Movie',
   rate:'7.3',
   img:'https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_FMjpg_UX1000_.jpg',
   c:'hidden md:inline-block',
   id:'tt6718170'
},
{
   title:'The Night Agent',
   rate:'7.6',
   img:'https://m.media-amazon.com/images/M/MV5BODgzYmFkZjAtYjhmNC00NDdkLTk4NGYtNDdiODVlNmE3ODkyXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_FMjpg_UX1000_.jpg',
   c:'sm:inline-block',
   id:'tt13918776'
},
{
   title:' The Last Kingdom: Seven Kings',
   rate:'7',
   img:'https://m.media-amazon.com/images/M/MV5BOTlmNGE0ZGMtMzdkMC00MjQyLWI1ZjgtZTIxODAyNWJlZDFlXkEyXkFqcGdeQXVyNTQ4ODM2NjM@._V1_FMjpg_UX1000_.jpg',
   c:'sm:inline-block',
   id:'tt15767808'
},
{
   title:'Ted Lasso',
   rate:'8.8',
   img:'https://m.media-amazon.com/images/M/MV5BMTdmZjBjZjQtY2JiNS00Y2ZlLTg2NzgtMjUzMGY2OTVmOWJiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
   c:'sm:inline-block',
   id:'tt10986410'
},
{
   title:'Everything Everywhere All at Once',
   rate:'7.9',
   img:'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_FMjpg_UX1000_.jpg',
   c:'sm:inline-block',
   id:'tt6710474'
},]







let htm = ref([])

async function fetchapi() {


  let resp  = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_unodv9vg/inception%202010`)
  
  let data =  await resp.json()
  let res = data.results
  htm.value = res
  htm.value = htm.value.filter(e=>{
    return e.image !== 'https://imdb-api.com/images/original/nopicture.jpg'
  })
  



}

//fetchapi()

 

let rec_grid = ref([
[{img:'https://m.media-amazon.com/images/M/MV5BMzU3YWYwNTQtZTdiMC00NjY5LTlmMTMtZDFlYTEyODBjMTk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6757_AL_.jpg',
  title:'TENET',
  id:'',},
  {img:'https://m.media-amazon.com/images/M/MV5BMzU3YWYwNTQtZTdiMC00NjY5LTlmMTMtZDFlYTEyODBjMTk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6757_AL_.jpg',
  title:'TENET',
  id:'',},{img:'https://m.media-amazon.com/images/M/MV5BMzU3YWYwNTQtZTdiMC00NjY5LTlmMTMtZDFlYTEyODBjMTk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6757_AL_.jpg',
  title:'TENET',
  id:'',}]
])



let over = ref(false)


let l = ref(0)



let p = (r)=>{
  r = r.split('.')

  let res = r.length>1 ? parseInt(parseInt(parseInt((r[0]+r[1]))/2.0)/10):parseInt(parseInt(parseInt((r[0]))/2.0))
  
  let rem  = r.length>1 ? (parseInt(parseInt((r[0]+r[1]))/2.0)%10):(parseInt(parseInt((r[0]+'0'))/2.0)%10)
  let rem2 = 5-res

  rem2 = rem>0 ? rem2-1:rem2

  return [res,rem,rem2]
}

let view = (title)=>{
  router.push(`/movie/${title}`)
}

window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'instant',
});

</script>



<template>

<div class="md:hidden text-center pt-[3%] text-[120%]">movie</div>

<div class="md:hidden pt-[1%]">
<flic/>
</div>

<div class="hidden md:block pt-[6%]">
  
      <flicl/>

</div>

<div class=' px-[5%] md:px-[10%] mt-[10%]'>

  <label class="flex items-center md:text-[120%]" for=""><ion-icon class="text-[180%] md:text-[280%] text-c2 mr-[2%]" name="videocam-outline"></ion-icon>Spot Light This Month</label>

<div class="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4  justify-center items-center gap-x-[5%]">

  <div v-for="f in films_grid" :class="`mt-[10%]  flex flex-col ${f.c}`">
   <RouterLink :to="`/movie/${f.id}`">
   <div class="relative pb-[140.666667%]">
                        <div class=" h-[100%]  animate-pulse absolute   bg-slate-700 w-[100%]  z-[-1]  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  "></div>
                            <img    class="md:transition-all cursor-pointer lazy ease-in-out md:duration-300 rounded-md shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  md:hover:shadow-none md:hover:p-1 absolute h-full w-[100%]" :src="f.img"  alt="">
   </div>
</RouterLink>
     <label class="text-[110%] truncate w-[90%]" for="">{{f.title}}</label>
                <div class="flex flex-row stars" id="stars">
                            <div v-for="i in p(f.rate)[0]"  class=" star  w-[8%] pb-[8%] relative ">
                                            <div  :style="c1"  :class="` bg-[#FF9529] w-full h-full absolute `">
                                              
                                            </div>
                                            

                            </div>
                            <div v-if="p(f.rate)[1]!==0"   class=" star w-[8%] bg-[#FF9529]   pb-[8%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:${p(f.rate)[1]*10}%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                              
                              </div>

                            </div>

                            <div v-for="i in p(f.rate)[2]"   class=" star w-[8%] bg-[#FF9529]   pb-[8%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:0%`"  :class="` bg-white  h-full absolute `">
                                              
                              </div>

                            </div>                            
                   </div>
  </div>



</div>
</div>

<newr/>


<movie_of/>


<div class="flex w-full justify-center   pb-[2%]">
     <label class="text-[150%] " for="">recommended</label>
</div>

<div class="hidden md:block relative  ">
<flicl2/>

</div>
<div class="md:hidden pb-[20%] ">
<flic2/>
</div>






</template>

<style scoped>

.star{
   clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}
</style>