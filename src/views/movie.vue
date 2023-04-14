<script setup>

import { ref } from 'vue';
import sldier from '../components/movie/top_slider_sm.vue'
import sldier2 from '../components/movie/top_slider2_sm.vue'
import { useRouter } from 'vue-router';

let router = useRouter()

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
let rate = ref('')
let date = ref('')
let genre = ref([])
let similars = ref([
     ])
async function fetchapi() {

  let resp  = await fetch(`https://imdb-api.com/en/API/Title/k_zdj1as3m/${title}/FullActor,Posters`)
  
    let data =  await resp.json()
    console.log(data)
    img.value = data.image
    posters.value  = data.posters
    backdrops.value = posters.value.backdrops
    name.value = data.title
    plot.value = data.plot
    cast.value = data.actorList
    cast.value = cast.value.slice(0,10)
    gallery.value = posters.value.backdrops.slice(1)
    similars.value = data.similars
    genre.value = data.genreList
    rate.value = data.imDbRating
    date.value = data.releaseDate
}


async function fetchvideo(){
      let resp  = await fetch(`https://imdb-api.com/en/API/YouTubeTrailer/k_zdj1as3m/${title}`)
      let data =  await resp.json()
      video.value = data.videoId;
}

fetchapi()
fetchvideo()

let go = (title)=>{
      router.push('/movie/'+title)
      let s = setTimeout(()=>{
            window.location.reload()
      },2)
}


</script>


<template>

  <!-- small screen -->
 <div class="header relative md:hidden text-[100%]">
       <div :class="`relative pb-[57%]`">
            <div  class="absolute w-full h-full z-[10] bg-zinc-900 bg-opacity-40"></div>
               <img v-if="backdrops[0]" class=" absolute h-full" :src="backdrops[0].link" alt="">

       </div>
       <div class=" animate-pulse   z-[11] bg-slate-700   w-[30%] absolute translate-y-[-40%] left-[4%] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] pb-[44%]"></div>
      <img  class="w-[30%] absolute z-[12] translate-y-[-40%] left-[4%] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]" :src="img" alt="">
      <div class="flex flex-row pt-[5%]">
             <div class="w-[40%]"></div>
             <div class="  w-[60%]  ">
                   <div v-if="!name.length" class=" relative pb-[10%] mb-[2%] w-[70%] animate-pulse    bg-slate-700"></div>
                   <div for="">{{ name }}</div>
                   <div v-if="!rate.length" class=" relative pb-[10%] mb-[2%] w-[50%] animate-pulse    bg-slate-700"></div>
                   <div v-if="rate.length" for="">{{ rate }}</div>
                   <div v-if="!date.length" class=" relative pb-[10%] mb-[2%] w-[60%] animate-pulse    bg-slate-700"></div>
                   <div v-if="date.length" for="">{{ date }}</div>
             </div>
      </div>

 </div>


 <div class="flex flex-col md:hidden pt-[14%] pl-[5%] pr-[5%] relative ">
             <label class="mb-[1%]" for="">storyline:</label>
             <label class="text-[80%] " for="">{{ plot }}</label>
             <div v-if="!plot.length" class=" relative pb-[5%] mb-[2%] w-[90%] animate-pulse    bg-slate-700"></div>
             <div v-if="!plot.length" class=" relative pb-[5%] mb-[2%] w-[92%] animate-pulse    bg-slate-700"></div>
             <div v-if="!plot.length" class=" relative pb-[5%] mb-[2%] w-[87%] animate-pulse    bg-slate-700"></div>
            <div class="mt-[5%] pb-[50%] relative">
             <iframe v-if="video.length" class="video-y absolute w-full h-full " :src="`https://www.youtube.com/embed/${video}`"></iframe>
            </div>
             <div class="mt-[5%] flex flex-col">
                    <label class="mb-[5%]" for="">cast:</label>
                    <sldier v-if="cast.length>0" :items="cast"/>
                    <div v-if="!cast.length" class="flex flex-row">
                        <div v-if="!cast.length" class=" relative pb-[25%] mb-[2%] w-[22%] animate-pulse ml-[3%] mr-[3%]   bg-slate-700"></div>
                        <div v-if="!cast.length" class=" relative pb-[5%] mb-[2%] w-[22%] animate-pulse mr-[3%]   bg-slate-700"></div>
                        <div v-if="!cast.length" class=" relative pb-[5%] mb-[2%] w-[22%] animate-pulse mr-[3%]   bg-slate-700"></div>
                        <div v-if="!cast.length" class=" relative pb-[5%] mb-[2%] w-[22%] animate-pulse mr-[3%]   bg-slate-700"></div>

                    </div>
                  </div>

             <div class="mt-[5%] flex flex-col">
                    <label class="mb-[5%]" for="">shots:</label>
                    <sldier2 v-if="gallery.length>0" :items="gallery"/>
                        <div v-if="!gallery.length" class=" flex flex-row ">
                        <div v-if="!gallery.length" class="  pb-[30%] mb-[2%] w-[45%] animate-pulse ml-[3%] mr-[3%]   bg-slate-700"></div>
                        <div v-if="!gallery.length" class="  pb-[30%] mb-[2%] w-[45%] animate-pulse mr-[3%]   bg-slate-700"></div>

                    </div>
             </div>

             <div class="mt-[5%] flex flex-col mb-[50%]">
                    <label class="mb-[5%]" for="">smillar movies:</label>
                    
                     <div class="grid grid-cols-2 gap-[2%]">
                                 <div v-for="m in similars" class=" relative pb-[150%] ">
                                    <div class=" absolute w-full h-full animate-pulse mr-[3%]   bg-slate-700"></div>
                                     <img @click="go(m.id)" :src="m.image" class=" absolute h-full w-full" alt="">
                                 </div>
                                 <div v-if="!similars.length" class=" relative pb-[150%] mb-[2%] w-[100%] animate-pulse mr-[3%]   bg-slate-700"></div>
                                 <div v-if="!similars.length" class=" relative pb-[150%] mb-[2%] w-[100%] animate-pulse mr-[3%]   bg-slate-700"></div>
                                 <div v-if="!similars.length" class=" relative pb-[150%] mb-[2%] w-[100%] animate-pulse mr-[3%]   bg-slate-700"></div>
                                 <div v-if="!similars.length" class=" relative pb-[150%] mb-[2%] w-[100%] animate-pulse mr-[3%]   bg-slate-700"></div>

                     </div>
            
                  </div>


      </div>

   
<!-- large screen -->

<div class=" relative hidden md:block text-[100%]">
       <div :class="`relative ${ backdrops[0]? '':'pb-[27%]'}`">
            <div v-if="!backdrops[0]" class="absolute w-full h-full bg-zinc-900 bg-opacity-40"></div>
            <div v-if="backdrops[0]" class="flex flex-row  pb-[28%]">
                  <div class="w-full h-full bg-zinc-900 absolute bg-opacity-50 z-[10] "></div>
                  <img v-if="backdrops[0]" class=" absolute  h-full w-[50%] " :src="backdrops[0].link" alt="">
                  <img v-if="backdrops[1]" class=" absolute translate-x-[100%]  h-full w-[50%]" :src="backdrops[1].link" alt="">
            </div>

       </div>
       <div class=" animate-pulse   z-[10] bg-slate-700   w-[20%] absolute translate-y-[-60%] left-[10%] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] pb-[29.5%]"></div>
      <img  class="w-[20%] absolute translate-y-[-60%] z-[11] left-[10%] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]" :src="img" alt="">
             <div class=" absolute left-[35%] z-[10] md:translate-y-[-120%] lg:translate-y-[-150%]  w-[60%]  ">
                   <div v-if="!name.length" class=" relative pb-[2%] mb-[1%] w-[30%] animate-pulse    bg-slate-700"></div>
                   <div v-if="name.length" class="  text-[200%]" for="">{{ name }}</div>
                   <div v-if="rate.length" class="mb-[1%]"><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon></div>
                   <div v-if="!genre.length" class=" relative pb-[2%] mb-[1%] w-[10%] animate-pulse    bg-slate-700"></div>
                   <div v-if="genre.length" for=""><label v-for="gen in genre" for="">{{ gen.key }},</label></div>
                   <div v-if="!date.length" class=" relative pb-[2%] mb-[1%] w-[20%] animate-pulse    bg-slate-700"></div>
                   <div v-if="date.length" for="">{{ date }}</div>
            </div>
            <div class=" absolute left-[35%] ">
                  <label class="mb-[1%] text-[110%] mt-[1%]" for="">storyline:</label>
                  <label class="text-[100%] md:pr-[20%] lg:pr-[30%]" for="">{{ plot }}</label>
                  <div v-if="!plot.length" class=" relative pb-[50%] mb-[5%] w-[520%] animate-pulse    bg-slate-700"></div>
                  <div v-if="!plot.length" class=" relative pb-[50%] mb-[5%] w-[580%] animate-pulse    bg-slate-700"></div>
                  <div v-if="!plot.length" class=" relative pb-[50%] mb-[5%] w-[470%] animate-pulse    bg-slate-700"></div>
                  </div>
      </div>



 <div class="md:flex flex-col hidden pt-[14%] px-[10%] relative ">
           

            <div class="mt-[5%] pb-[40%] w-[85%] mx-auto relative">
             <iframe v-if="video.length" class="video-y absolute w-full  h-full " :src="`https://www.youtube.com/embed/${video}`"></iframe>
            </div>
            
            
            <div class="mt-[5%] flex flex-col">
                    <label class="mb-[2%] text-[150%]" for="">cast:</label>
                    <div class="flex flex-row justify-between " v-if="cast.length>0" >
                        <div v-for="i in 5" class="w-[19%] relative h-auto pb-[30%]">
                              <div class=" absolute w-full h-full animate-pulse mr-[3%]   bg-slate-700"></div>
                              <img class="rounded-sm h-full absolute " :src="cast[i-1].image" alt="">
                              <label class="text-center w-full absolute h-full flex pt-[145%] justify-center translate-y-[10%]" for="">{{ cast[i-1].name }}</label>
                        </div>
                       </div>
                    <div v-if="!cast.length" class="flex flex-row">
                        <div v-if="!cast.length" class=" relative pb-[20%] mb-[2%] w-[22%] animate-pulse ml-[3%] mr-[3%]   bg-slate-700"></div>
                        <div v-if="!cast.length" class=" relative pb-[5%] mb-[2%] w-[22%] animate-pulse mr-[3%]   bg-slate-700"></div>
                        <div v-if="!cast.length" class=" relative pb-[5%] mb-[2%] w-[22%] animate-pulse mr-[3%]   bg-slate-700"></div>
                        <div v-if="!cast.length" class=" relative pb-[5%] mb-[2%] w-[22%] animate-pulse mr-[3%]   bg-slate-700"></div>

                    </div>
                  </div>

             <div class="mt-[10%] flex flex-col">
                    <label class="mb-[2%] text-[150%]" for="">shots:</label>
                    <div v-if="gallery.length" class="grid grid-cols-2 gap-[10%]  mb-[5%]">
                          <div v-for="i in 4 " class=" relative pb-[55%]">
                              <div class=" absolute w-full h-full animate-pulse mr-[3%]   bg-slate-700"></div>
                              <img class="rounded-sm absolute w-full h-full" :src="gallery[i].link" alt="">                                
                          </div>
                          
                    </div>
                    <div v-if="!gallery.length" class=" flex flex-row ">
                        <div v-if="!gallery.length" class="  pb-[30%] mb-[2%] w-[45%] animate-pulse ml-[3%] mr-[3%]   bg-slate-700"></div>
                        <div v-if="!gallery.length" class="  pb-[30%] mb-[2%] w-[45%] animate-pulse mr-[3%]   bg-slate-700"></div>

                    </div>
             </div>

             <div class="mt-[5%] flex flex-col pb-[20%]">
                    <label class="mb-[2%] text-[150%]" for="">smillar movies:</label>
                    
                     <div class="grid md:grid-cols-4 gap-[2%]">
                                 <div v-for="m in similars" class=" relative pb-[150%]">
                                    <div class=" absolute w-full h-full animate-pulse mr-[3%]   bg-slate-700"></div>
                                     <img @click="go(m.id)" class=" cursor-pointer absolute w-full h-full hover:scale-[1.05] transform-all duration-200 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]" :src="m.image" alt="">
                                    </div>
                                 <div v-if="!similars.length" class=" relative pb-[140%] mb-[2%] w-[100%] animate-pulse mr-[3%]   bg-slate-700"></div>
                                 <div v-if="!similars.length" class=" relative pb-[140%] mb-[2%] w-[100%] animate-pulse mr-[3%]   bg-slate-700"></div>
                                 <div v-if="!similars.length" class=" relative pb-[140%] mb-[2%] w-[100%] animate-pulse mr-[3%]   bg-slate-700"></div>
                                 <div v-if="!similars.length" class=" relative pb-[140%] mb-[2%] w-[100%] animate-pulse mr-[3%]   bg-slate-700"></div>
                                 <div v-if="!similars.length" class=" relative pb-[140%] mb-[2%] w-[100%] animate-pulse mr-[3%]   bg-slate-700"></div>
                                 <div v-if="!similars.length" class=" relative pb-[140%] mb-[2%] w-[100%] animate-pulse mr-[3%]   bg-slate-700"></div>
                                 <div v-if="!similars.length" class=" relative pb-[140%] mb-[2%] w-[100%] animate-pulse mr-[3%]   bg-slate-700"></div>
                                 <div v-if="!similars.length" class=" relative pb-[140%] mb-[2%] w-[100%] animate-pulse mr-[3%]   bg-slate-700"></div>
                     </div>
            
                  </div>


      </div>


</template>