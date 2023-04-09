<script setup>

import { ref } from 'vue';
import sldier from '../components/movie/top_slider_sm.vue'
import sldier2 from '../components/movie/top_slider2_sm.vue'


const props = defineProps({
      title : String
});

let title =  props.title


let img =ref('')
let posters = ref([])
let backdrops = ref([])
let name = ref('')
let plot = ref('')
let video  = ref('')
let cast = ref([])
let gallery = ref([])
let similars = ref([
      {image:'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_Ratio0.6762_AL_.jpg'},
      {image:'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_Ratio0.6762_AL_.jpg'},
      {image:'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_Ratio0.6762_AL_.jpg'},
      {image:'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_Ratio0.6762_AL_.jpg'},
      {image:'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_Ratio0.6762_AL_.jpg'},
      {image:'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_Ratio0.6762_AL_.jpg'},
])
async function fetchapi() {

  let resp  = await fetch(`https://imdb-api.com/en/API/Title/k_unodv9vg/${title}/FullActor,Posters`)
  
   let data =  await resp.json()
    img.value = data.image
    posters.value  = data.posters
    backdrops.value = posters.value.backdrops
    name.value = data.title
    plot.value = data.plot
    cast.value = data.actorList
    cast.value = cast.value.slice(0,10)
    gallery.value = posters.value.backdrops.slice(1)
    similars.value = data.similars
}

async function fetchvideo(){
      let resp  = await fetch(`https://imdb-api.com/en/API/YouTubeTrailer/k_unodv9vg/${title}`)
      let data =  await resp.json()
      video = data.videoId;
}

//fetchapi()
//fetchvideo()

let c = ()=>{
      console.log('os')
      cast.value = ['osmaa']
}

</script>


<template>

  
 <div class="header relative md:hidden text-[100%]">
       <div class="relative">
            <div class="absolute w-full h-full bg-zinc-900 bg-opacity-40"></div>
               <img v-if="backdrops[0]" class="" :src="backdrops[0].link" alt="">
       </div>
      
      <img  class="w-[30%] absolute translate-y-[-40%] left-[4%] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]" :src="img" alt="">
      <div class="flex flex-row pt-[5%]">
             <div class="w-[40%]"></div>
             <div class="flex flex-col">
                  <label for="">{{ name }}</label>
                  <label for="">rates</label>
                  <label for="">date</label>
             </div>
      </div>

 </div>


 <div class="flex flex-col pt-[10%] pl-[5%] pr-[5%] ">
             <label for="">storyline:</label>
             <label class="text-[80%]" for="">{{ plot }}</label>
             <iframe class="video-y px-[1%] mt-[5%]" :src="`https://www..com/embed/${video}`"></iframe>

             <div class="mt-[5%] flex flex-col">
                    <label class="mb-[5%]" for="">cast:</label>
                    <sldier v-if="cast.length>0" :items="cast"/>
             </div>

             <div class="mt-[5%] flex flex-col">
                    <label class="mb-[5%]" for="">shots:</label>
                    <sldier2 v-if="gallery.length>0" :items="gallery"/>
             </div>

             <div class="mt-[5%] flex flex-col">
                    <label class="mb-[5%]" for="">smillar movies:</label>
                    
                     <div class="grid grid-cols-2 gap-[2%]">
                                 <div v-for="m in similars" class=" relative ">
                                     <img :src="m.image" alt="">
                                 </div>
                     </div>
            
                  </div>


      </div>

      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>


</template>