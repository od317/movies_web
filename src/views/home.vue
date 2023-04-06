<script setup>

import {ref} from 'vue'
import flic from '../components/home/top_slider_sm.vue'
import flicl from '../components/home/top_slider_sml.vue'



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

 










</script>



<template>

<div class="md:hidden">
<flic/>
</div>

<div class="hidden md:block ">
  
      <flicl/>

</div>

<div class='px-[10%] mt-[10%]'>

  <label class="flex items-center md:text-[120%]" for=""><ion-icon class="text-[180%] md:text-[280%] text-c2 mr-[2%]" name="videocam-outline"></ion-icon>Spot Light This Month</label>

<div class="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4  justify-center items-center gap-x-[5%]">

  <div v-for="f in films_grid" :class="`mt-[10%]  flex flex-col ${f.c}`">

    <img class="rounded-md shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  md:hover:shadow-none md:hover:p-1 h-full md:transition-all   ease-in-out md:duration-300 " :src="f.img" alt="">
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


<label class="px-[10%] mt-[3rem] text-[110%]" for="">recommended seris</label>

<div class="grid grid-rows-1 file:md:grid-rows-0 md:grid-cols-2 px-[10%] mt-[1rem] ">

       <div class="  h-full">
         <img src="https://images.hdqwalls.com/wallpapers/vikings-2021-6l.jpg " class="shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-md" alt="">
       </div>
       <div class="hidden h-full md:grid grid-rows-3 gap-[10%] md:pl-[5%]">
         
             <div class=" bg-[url('https://www.vobss.com/wp-content/uploads/2022/02/viking-wallpaper-vobss-2.jpg')] bg-cover bg-center shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-md"></div>
             <div class=" bg-[url('https://www.vobss.com/wp-content/uploads/2022/02/viking-wallpaper-vobss-2.jpg')] bg-cover bg-center shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-md"></div>
             <div class=" bg-[url('https://www.vobss.com/wp-content/uploads/2022/02/viking-wallpaper-vobss-2.jpg')] bg-cover bg-center shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-md"></div>


       </div>

</div>


<div class="mt-[2rem]">osama</div>


</template>