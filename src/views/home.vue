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
   title:'movie',
   img:'https://images.ottplay.com/images/Interstellar_2014_movie_photo_16.jpg',
   c:'hidden lg:inline-block'
},
{
   title:'movie',
   img:'https://images.ottplay.com/images/Interstellar_2014_movie_photo_16.jpg',
   c:'hidden lg:inline-block'
},
{
   title:'movie',
   img:'https://images.ottplay.com/images/Interstellar_2014_movie_photo_16.jpg',
   c:'hidden md:inline-block'
},
{
   title:'movie',
   img:'https://images.ottplay.com/images/Interstellar_2014_movie_photo_16.jpg',
   c:'hidden md:inline-block'
},
{
   title:'movie',
   img:'https://images.ottplay.com/images/Interstellar_2014_movie_photo_16.jpg',
   c:'sm:inline-block'
},
{
   title:'movie',
   img:'https://images.ottplay.com/images/Interstellar_2014_movie_photo_16.jpg',
   c:'sm:inline-block'
},
{
   title:'movie',
   img:'https://images.ottplay.com/images/Interstellar_2014_movie_photo_16.jpg',
   c:'sm:inline-block'
},
{
   title:'movie',
   img:'https://images.ottplay.com/images/Interstellar_2014_movie_photo_16.jpg',
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


</script>



<template>

<div class="md:hidden pt-[2%]">
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
     <label class="text-[110%]" for="">{{f.title}}</label>
     <div>
     <label for=""><ion-icon name="star"></ion-icon></label>
     <label for=""><ion-icon name="star"></ion-icon></label>
     <label for=""><ion-icon name="star"></ion-icon></label>
     <label for=""><ion-icon name="star"></ion-icon></label>
     <label for=""><ion-icon name="star"></ion-icon></label> 
    </div>
  </div>



</div>
</div>

<newr/>


<movie_of/>


<div class="flex w-full justify-center  pb-[2%]">
     <label class="text-[150%]" for="">recommended</label>
</div>

<div class="hidden md:block">
<flicl2/>
</div>
<div class="md:hidden pb-[20%]">
   <flic2/>
</div>








</template>