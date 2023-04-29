<script setup>

import {ref} from 'vue'
import flic from '../components/home/top_slider_sm.vue'
import flic2 from '../components/home/top_slider_sm2.vue'
import flicl from '../components/home/top_slider_sml.vue'
import flicl2 from '../components/home/top_slider_sml2.vue'
import newr from '../components/home/new_r.vue'
import movie_of from '../components/home/movie_of.vue'

let films_grid = [
{
   title:'The Mandalorian',
   rate:'8.7',
   img:'https://external-preview.redd.it/the-mandalorian-season-3-ep-1-35-minutes-16-seconds-v0-zAsAQZFS9wDTTwRa42NWRjEZdqVEp12ptrI1ZPk48XY.jpg?width=640&crop=smart&auto=webp&s=f6e244a74485ddd93d8108d1281da6582f4a8771',
   c:'hidden lg:inline-block'
},
{
   title:'Beef',
   rate:'8.3',
   img:'https://i.redd.it/e5vp77ku6lqa1.jpg',
   c:'hidden lg:inline-block'
},
{
   title:'Succession',
   rate:'8.8',
   img:'https://m.media-amazon.com/images/M/MV5BZTY0YjU0NTUtMGRmNS00NDMyLWI2MzYtNjM2MmM1M2FkMjkyXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_FMjpg_UX1000_.jpg',
   c:'hidden md:inline-block'
},
{
   title:'The Super Mario Bros. Movie',
   rate:'7.3',
   img:'https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_FMjpg_UX1000_.jpg',
   c:'hidden md:inline-block'
},
{
   title:'The Night Agent',
   rate:'7.6',
   img:'https://m.media-amazon.com/images/M/MV5BODgzYmFkZjAtYjhmNC00NDdkLTk4NGYtNDdiODVlNmE3ODkyXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_FMjpg_UX1000_.jpg',
   c:'sm:inline-block'
},
{
   title:' The Last Kingdom: Seven Kings',
   rate:'7',
   img:'https://m.media-amazon.com/images/M/MV5BOTlmNGE0ZGMtMzdkMC00MjQyLWI1ZjgtZTIxODAyNWJlZDFlXkEyXkFqcGdeQXVyNTQ4ODM2NjM@._V1_FMjpg_UX1000_.jpg',
   c:'sm:inline-block'
},
{
   title:'Ted Lasso',
   rate:'8.8',
   img:'https://m.media-amazon.com/images/M/MV5BMTdmZjBjZjQtY2JiNS00Y2ZlLTg2NzgtMjUzMGY2OTVmOWJiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
   c:'sm:inline-block'
},
{
   title:'Everything Everywhere All at Once',
   rate:'7.9',
   img:'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_FMjpg_UX1000_.jpg',
   c:'sm:inline-block'
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

window.scrollTo({top:0})

let l = ref(0)



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

<div class="md:hidden pt-[7%]">
<flic/>
</div>

<div class="hidden md:block pt-[6%]">
  
      <flicl/>

</div>

<div class=' px-[5%] md:px-[10%] mt-[10%]'>

  <label class="flex items-center md:text-[120%]" for=""><ion-icon class="text-[180%] md:text-[280%] text-c2 mr-[2%]" name="videocam-outline"></ion-icon>Spot Light This Month</label>

<div class="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4  justify-center items-center gap-x-[5%]">

  <div v-for="f in films_grid" :class="`mt-[10%]  flex flex-col ${f.c}`">
   <div class="relative pb-[140.666667%]">
                        <div class=" h-[100%]  animate-pulse absolute   bg-slate-700 w-[100%]  z-[-1]  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  "></div>
                            <img   @click="console.log('ok')" class="md:transition-all  ease-in-out md:duration-300 rounded-md shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  md:hover:shadow-none md:hover:p-1 absolute h-full w-[100%]" :src="f.img"  alt="">
                        </div>
     <label class="text-[110%] truncate w-[90%]" for="">{{f.title}}</label>
                <div class="flex flex-row stars" id="stars">
                            <div v-for="i in p(f.rate)[0]"  class=" star  w-[8%] pb-[8%] relative ">
                                            <div  :style="c1"  :class="` bg-white w-full h-full absolute `">
                                              
                                            </div>
                                            

                            </div>
                            <div v-if="p(f.rate)[1]!==0"   class=" star w-[8%] bg-white   pb-[8%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:${p(f.rate)[1]*10}%`"  :class="` bg-white  h-full absolute `">
                                              
                              </div>

                            </div>

                            <div v-for="i in p(f.rate)[2]"   class=" star w-[8%] bg-white   pb-[8%] relative ">
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


<div class="flex w-full justify-center  pb-[2%]">
     <label class="text-[150%]" for="">recommended</label>
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

.red {
        background: #dd3f31;
      }
   .wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.wave svg {
    position: relative;
    display: block;
    width: calc(102% + 1.3px);
    height: 223px;
}

.wave .shape-fill {
    fill: rgb(23 23 23);
}

</style>