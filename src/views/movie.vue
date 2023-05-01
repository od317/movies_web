<script setup>

import { ref } from 'vue';
import sldier from '../components/movie/top_slider_sm.vue'
import sldier2 from '../components/movie/top_slider2_sm.vue'
import { useRouter } from 'vue-router';
import  h_posters  from '../components/movie/h_posters.vue';
import  h_posters_tem  from '../components/movie/h_posters_tem.vue';

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
let img_f = ref(true)
let runtime = ref('')     
async function fetchapi() {
    //k_zdj1as3m
    // key: 018dc97373a6a1d76d6603c4e0396419
    
    let resp  = await fetch(`https://imdb-api.com/en/API/Title/k_zdj1as3m/${title}/FullActor,Posters`)
    
    
    let data =  resp? await resp.json(): {}
    img.value = data.image ? data.image : 'https://image.tmdb.org/t/p/original/jtVl3nN5bJ4t7pgakLfGJmOrqZm.jpg'
    
    posters.value  = data.posters ? data.posters : []
    backdrops.value = posters.value && posters.value.backdrops ? posters.value.backdrops : []
    img_f.value = posters.value && posters.value.backdrops ? true : false
    name.value = data.title ? data.title : 'movie'
    plot.value = data.plot ? data.plot : 'this happens when imdb dont send data back. Dolor maiores dolorem, ipsum inventore harum ipsam optio dignissimos molestiae, necessitatibus beatae non impedit? Corporis modi esse est quasi. Exercitationem, distinctio ea'
    cast.value = data.actorList ? data.actorList : []
    cast.value = cast.value ? cast.value.slice(0,10) : []
    gallery.value = posters.value && posters.value.backdrops ? posters.value.backdrops.slice(1): []
    similars.value = data.similars ? data.similars : []
    genre.value = data.genreList ? data.genreList : []
    rate.value = data.imDbRating ? data.imDbRating : '10'
    date.value = data.releaseDate ? data.releaseDate : ''
    runtime.value = data.runtimeStr ? data.runtimeStr : ''
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


let b = (name)=>{
      
      const el = document.getElementById(name);
      if (el) {
        el.scrollIntoView();
      }
      
  }


  window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'instant',
});

</script>


<template>

  <!-- small screen -->
 <div class="header relative md:hidden text-[100%]">
    
      <div  :style="` background-image:url(${backdrops[0]?backdrops[0].link:img})`" :class="`relative  bg-cover ${img_f ? 'bg-center':'bg-bottom'} pb-[65%]`">
            <div  class="absolute w-full h-full bg-zinc-900   bg-opacity-40"></div>
            <div  class="absolute w-full h-full  z-[10] bg-gradient-to-t from-c1 from-10% to-transparent to-90%  bg-opacity-40"></div>

       </div>
      
       <div class="flex flex-col px-[5%]">

           <label class="flex flex-row justify-start items-center" for=""><ion-icon name="star"></ion-icon>{{ rate }}</label>

           <label class="text-[150%] font-bold mt-[2%]" for="">
            {{name}}
            <div v-if="!name.length" class=" relative pb-[7%] mb-[2%] w-[50%] animate-pulse    bg-neutral-800"></div>

         </label>

           <div class="flex flex-row flex-wrap  gap-[7%] w-[100%]">
                                    <div v-if="!date.length" class=" relative pb-[10%] mb-[2%] w-[98%] animate-pulse    bg-neutral-800"></div>

                                    <div v-if="runtime.length" class="">
                                          {{ runtime }}
                                    </div>

                                    <div  class="flex flex-row gap-[7%]">
                                          <label v-if="genre[0]" for="">
                                                      {{ genre[0].key ==='Sci-Fi'?'Sci_Fi':genre[0].key }}
                                                </label>

                                                <label v-if="genre[1]" for="">
                                                      {{ genre[1].key ==='Sci-Fi'?'Sci_Fi':genre[1].key }}
                                                </label>

                                                <label v-if="genre[2]"  for="">
                                                      {{ genre[2].key ==='Sci-Fi'?'Sci_Fi':genre[2].key }}
                                                </label>
                                    </div>
      
                                    <div class="">
                                          {{ date }}
                                    </div>

            </div>

            <div class="w-[100%] mt-[5%] flex-grow">
                  {{ plot }}
             <div v-if="!plot.length" class=" relative pb-[5%] mb-[2%] w-[90%] animate-pulse    bg-neutral-800"></div>
             <div v-if="!plot.length" class=" relative pb-[5%] mb-[2%] w-[92%] animate-pulse    bg-neutral-800"></div>
             <div v-if="!plot.length" class=" relative pb-[5%] mb-[2%] w-[87%] animate-pulse    bg-neutral-800"></div>
            </div>

            <div class="flex flex-col w-[100%]   mt-[8%] mb-[1%]">
                                       <label class=" text-[130%] mb-[1%]" for="">Top cast</label>
                                       
                                       <div class="flex flex-row">
                                             <div v-for="i in 5" class="w-[30%] flex flex-col items-center  mr-[2%] ">
                                                <div  class="  w-full pb-[100%] relative    rounded-full  bg-center bg-cover"  >
                                                      <div class=" absolute w-full h-full bg-neutral-800 animate-pulse rounded-full"></div>   
                                                      <div v-if="cast[i-1]" class="w-full h-full absolute rounded-full bg-cover bg-center " :style="` background-image:url(${cast[i-1].image})`"></div>
                                                </div> 
                                                <label v-if="cast[i-1]" class="text-[50%] text-center" for="">{{ cast[i-1].name }}</label>
                                             </div>  



                                       </div>

                              </div>


       </div>

       <!--
       <div class=" animate-pulse   z-[11] bg-neutral-800   w-[30%] absolute translate-y-[-40%] left-[4%] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] pb-[44%]"></div>
      <img  class="w-[30%] absolute z-[12] translate-y-[-40%] left-[4%] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]" :src="img" alt="">
      <div class="flex flex-row pt-[5%]">
             <div class="w-[40%]"></div>
             <div class="  w-[60%]  ">
                   <div v-if="!name.length" class=" relative pb-[10%] mb-[2%] w-[70%] animate-pulse    bg-neutral-800"></div>
                   <div for="">{{ name }}</div>
                   <div v-if="!rate.length" class=" relative pb-[10%] mb-[2%] w-[50%] animate-pulse    bg-neutral-800"></div>
                   <div v-if="rate.length" for="">{{ rate }}</div>
                   <div v-if="!date.length" class=" relative pb-[10%] mb-[2%] w-[60%] animate-pulse    bg-neutral-800"></div>
                   <div v-if="date.length" for="">{{ date }}</div>
             </div>
      </div>
       -->
       
 </div>


 <div class="flex flex-col md:hidden pt-[13%] pl-[5%] pr-[5%] relative ">
             <label for="">Trailer</label>

            <div class="mt-[5%] pb-[60%] relative">
             <iframe v-if="video.length" class="video-y absolute w-full h-full " :src="`https://www.youtube.com/embed/${video}`"></iframe>
            </div>


             <div class="mt-[8%] flex flex-col">
                    <label class="mb-[5%]" for="">shots:</label>
                    <sldier2 v-if="gallery.length>0" :items="gallery"/>
                        <div v-if="!gallery.length" class=" flex flex-row ">
                        <div v-if="!gallery.length" class="  pb-[30%] mb-[2%] w-[45%] animate-pulse ml-[3%] mr-[3%]   bg-neutral-800"></div>
                        <div v-if="!gallery.length" class="  pb-[30%] mb-[2%] w-[45%] animate-pulse mr-[3%]   bg-neutral-800"></div>

                    </div>
             </div>

             <div class="mt-[10%] flex flex-col mb-[50%]">
                    <label class="mb-[5%]" for="">smillar movies:</label>
                    
                     <div class="grid grid-cols-2 gap-[2%]">
                                 <div v-for="m in similars" class=" relative pb-[150%] ">
                                    <div class=" absolute w-full h-full animate-pulse mr-[3%]   bg-neutral-800"></div>
                                     <img @click="go(m.id)" :src="m.image" class=" absolute h-full w-full" alt="">
                                 </div>
                                 <div v-if="!similars.length" class=" relative pb-[150%] mb-[2%] w-[100%] animate-pulse mr-[3%]   bg-neutral-800"></div>
                                 <div v-if="!similars.length" class=" relative pb-[150%] mb-[2%] w-[100%] animate-pulse mr-[3%]   bg-neutral-800"></div>
                                 <div v-if="!similars.length" class=" relative pb-[150%] mb-[2%] w-[100%] animate-pulse mr-[3%]   bg-neutral-800"></div>
                                 <div v-if="!similars.length" class=" relative pb-[150%] mb-[2%] w-[100%] animate-pulse mr-[3%]   bg-neutral-800"></div>

                     </div>
            
                  </div>


      </div>

<!-- large screen -->

<div class=" relative hidden md:block text-[100%] ">
       <div :class="`relative  `">
            <div  class="absolute w-full h-screen bg-zinc-900  bg-opacity-40"></div>
            <div  class="flex flex-col justify-end  h-screen">
                  <div class="w-full h-[60%] z-[5] bg-gradient-to-t from-zinc-900 from-1% to-transparent  to-99%  absolute bg-opacity-30  "></div>
                  <div  :class="`   h-screen w-[100%] absolute bg-cover ${img_f ? 'bg-center':'bg-top'} flex flex-col justify-end z-[4] `" :style="` background-image:url(${backdrops[0]?backdrops[0].link:img})`" alt="">
                  </div>
                  <div class="  h-screen w-[100%] shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] z-[6] pb-[4%] pl-[7%] justify-between absolute bg-cover bg-center flex flex-row items-end ">
    
                  <div class="flex flex-col  md2:flex-row w-full  ">  
                         <div class="md2:w-[55%] w-full pr-[1%] flex flex-col pb-[1%]">    
                              

                                    <div v-if="name.length<=0" class="w-[30%] mb-[2%] bg-neutral-800 animate-pulse pb-[5%]"></div>

                                    <div v-if="rate.length<=0&&genre.length<=0&&date.length<=0" class="w-[85%] mb-[2%] bg-neutral-800 animate-pulse pb-[3%]"></div>

                                    <div v-if="plot.length<0" class="w-[70%] mb-[1%] bg-neutral-800 animate-pulse pb-[2%]"></div>
                                    <div v-if="plot.length<0" class="w-[70%] mb-[1%] bg-neutral-800 animate-pulse pb-[2%]"></div>
                                    <div v-if="plot.length<0" class="w-[70%] mb-[1%] bg-neutral-800 animate-pulse pb-[2%]"></div>

                              
                                    <label class="text-[200%]" for="">{{name}}</label>
                                    <div class="flex flex-row  gap-[7%] w-[100%]">
                                    
                                          <div v-if="rate.length>0" class="flex flex-row justify-center items-center">
                                                <ion-icon class=" text-orange-500 translate-y-[-2%]" name="star"></ion-icon>{{ rate }}
                                          </div>

                                          <div class="">
                                                {{ runtime }}
                                          </div>

                                          <div class="flex flex-row gap-[10%]">
                                                <label v-if="genre[0]" for="">
                                                      {{ genre[0].key ==='Sci-Fi'?'Sci_Fi':genre[0].key }}
                                                </label>

                                                <label v-if="genre[1]" for="">
                                                      {{ genre[1].key ==='Sci-Fi'?'Sci_Fi':genre[1].key }}
                                                </label>

                                                <label v-if="genre[2]"  for="">
                                                      {{ genre[2].key ==='Sci-Fi'?'Sci_Fi':genre[2].key }}
                                                </label>
                                          </div>
            
                                          <div class="">
                                                {{ date }}
                                          </div>

                                    </div>

                                    <div class="w-[80%] mt-[4%] mb-[2%] flex-grow">{{ plot }}</div>

                                    <div class=" flex flex-row justify-self-end    w-[50%] gap-[2%] ">

                                          <button class="bg-c2 px-[8%] py-[1%] text-[120%]">view</button>
                                          <button @click="b('tr')" class=" bg-neutral-800 px-[8%] py-[1%] rounded-sm text-[120%]">Trailer</button>

                                    </div>


                         </div> 

                    
                         <div class="w-[47%] hidden md2:flex flex-col ">     
                              
                              <div class="flex w-[50%] md2:w-[100%] flex-col">


                                       <h_posters v-if="gallery.length>0" :items="gallery" />
                                        
                                       <h_posters_tem v-else  />
                                          

                              </div>
                          
                              <div class="flex flex-col w-[50%] md2:w-[100%]  mt-[2%] mb-[1%]">
                                       <label class=" text-[130%] mb-[1%]" for="">Actors</label>
                                       
                                       <div class="flex flex-row">
                                             <div v-for="i in 5" class="w-[12%] flex flex-col items-center  mr-[2%] ">
                                                <div  class="  w-full pb-[100%] relative    rounded-full  bg-center bg-cover"  >
                                                      <div class=" absolute w-full h-full bg-neutral-800 animate-pulse rounded-full"></div>   
                                                      <div v-if="cast[i-1]" class="w-full h-full absolute rounded-full bg-cover bg-center " :style="` background-image:url(${cast[i-1].image})`"></div>
                                                </div> 
                                                <label v-if="cast[i-1]" class="text-[50%] text-center" for="">{{ cast[i-1].name }}</label>
                                             </div>  

                                             <div  class="w-[13%] flex flex-col items-center  mr-[2%] ">
                                                <div @click="b('cast')" class="  w-full pb-[100%] relative cursor-pointer    rounded-full  bg-center bg-cover"  >
                                                      <div  class="  absolute w-full h-full lg:text-[90%] text-[65%] text-center px-[2%] pt-[20%] bg-neutral-800  rounded-full">
                                                            see full cast
                                                      </div>   
                                                      <div class="w-full h-full absolute rounded-full bg-cover bg-center " ></div>
                                                </div> 
                                             </div>  

                                       </div>

                              </div>


                         </div> 

                         <div class="w-[100%]  md2:hidden flex flex-row-reverse ">     
                              
                              <div class="flex w-[50%] md2:w-[100%] flex-col">


                                       <h_posters v-if="gallery.length>0" :items="gallery" />

                              </div>
                          
                              <div class="flex flex-col w-[50%] md2:w-[100%]  mt-[2%] mb-[1%]">
                                       <label class=" text-[130%] mb-[1%]" for="">Actors</label>
                                       
                                       <div class="flex flex-row">
                                             <div v-for="i in 5" class="w-[12%] flex flex-col items-center  mr-[2%] ">
                                                <div  class="  w-full pb-[100%] relative    rounded-full  bg-center bg-cover"  >
                                                      <div class=" absolute w-full h-full bg-neutral-800 animate-pulse rounded-full"></div>   
                                                      <div v-if="cast[i-1]" class="w-full h-full absolute rounded-full bg-cover bg-center " :style="` background-image:url(${cast[i-1].image})`"></div>
                                                </div> 
                                                <label v-if="cast[i-1]" class="text-[50%] text-center" for="">{{ cast[i-1].name }}</label>
                                             </div>  

                                             <div  class="w-[13%] flex flex-col items-center  mr-[2%] ">
                                                <div @click="b('cast')" class="  w-full pb-[100%] relative cursor-pointer    rounded-full  bg-center bg-cover"  >
                                                      <div  class="  absolute w-full h-full lg:text-[90%] text-[65%] text-center px-[2%] pt-[20%] bg-neutral-800  rounded-full">
                                                            see full cast
                                                      </div>   
                                                      <div class="w-full h-full absolute rounded-full bg-cover bg-center " ></div>
                                                </div> 
                                             </div>  

                                       </div>

                              </div>


                         </div> 

                  </div>


                  </div>
            </div>

       </div>
         <div class="w-[20%] absolute z-[11] hidden translate-y-[-60%] left-[10%] ">
            <div class=" relative z-[11]">
                  <img  class=" z-[11] w-full opacity-[100%] absolute     shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]" :src="img" alt="">
                  <div class=" animate-pulse absolute   z-[10] bg-neutral-800   w-full h-full    shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] "></div>
                  <img  class=" z-[11] w-full opacity-0     shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]" :src="img" alt="">
            </div>
         </div>   
       <div class=" absolute left-[35%] hidden z-[10] md:translate-y-[-120%] lg:translate-y-[-150%]  w-[60%]  ">
                   <div v-if="!name.length" class=" relative pb-[2%] mb-[1%] w-[30%] animate-pulse    bg-neutral-800"></div>
                   <div v-if="name.length" class="  text-[200%]" for="">{{ name }}</div>
                   <div v-if="rate.length" class="mb-[1%]"><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon></div>
                   <div v-if="!genre.length" class=" relative pb-[2%] mb-[1%] w-[10%] animate-pulse    bg-neutral-800"></div>
                   <div v-if="genre.length" for=""><label v-for="gen in genre" for="">{{ gen.key }},</label></div>
                   <div v-if="!date.length" class=" relative pb-[2%] mb-[1%] w-[20%] animate-pulse    bg-neutral-800"></div>
                   <div v-if="date.length" for="">{{ date }}</div>
            </div>
            <div class=" absolute hidden left-[35%] ">
                  <label class="mb-[1%] text-[110%] mt-[1%]" for="">storyline:</label>
                  <label class="text-[100%] md:pr-[20%] lg:pr-[30%]" for="">{{ plot }}</label>
                  <div v-if="!plot.length" class=" relative pb-[50%] mb-[5%] w-[520%] animate-pulse    bg-neutral-800"></div>
                  <div v-if="!plot.length" class=" relative pb-[50%] mb-[5%] w-[580%] animate-pulse    bg-neutral-800"></div>
                  <div v-if="!plot.length" class=" relative pb-[50%] mb-[5%] w-[470%] animate-pulse    bg-neutral-800"></div>
                  </div>
      </div>



 <div class="md:flex flex-col hidden pt-[6%] px-[10%] relative ">
           
            <div id="tr" class="mt-[2%] pt-[3%] pb-[50%] w-[100%] mx-auto relative">
              <div class="w-full h-full absolute bg-neutral-800 animate-pulse"></div>
             <iframe v-if="video.length" class="video-y absolute w-full  h-full " :src="`https://www.youtube.com/embed/${video}`"></iframe>
            </div>
            
            
            <div id="cast" class="mt-[5%] flex flex-col">
                    <label class="mb-[2%] text-[150%]" for="">cast:</label>
                    <div class="flex flex-row justify-between " v-if="cast.length>0" >
                        <div v-for="i in 5" class="w-[19%] relative h-auto pb-[30%]">
                              <div class=" absolute w-full h-full animate-pulse mr-[3%]   bg-neutral-800"></div>

                              <div class="rounded-sm h-full absolute w-full bg-center bg-cover" :style="` background-image:url(${cast[i-1].image})`"  alt=""></div>

                              <label class="text-center w-full absolute h-full flex pt-[145%] justify-center translate-y-[10%]" for="">{{ cast[i-1].name }}</label>
                        </div>
                       </div>
                    <div v-if="!cast.length" class="flex flex-row">
                        <div v-if="!cast.length" class=" relative pb-[20%] mb-[2%] w-[22%] animate-pulse ml-[3%] mr-[3%]   bg-neutral-800"></div>
                        <div v-if="!cast.length" class=" relative pb-[5%] mb-[2%] w-[22%] animate-pulse mr-[3%]   bg-neutral-800"></div>
                        <div v-if="!cast.length" class=" relative pb-[5%] mb-[2%] w-[22%] animate-pulse mr-[3%]   bg-neutral-800"></div>
                        <div v-if="!cast.length" class=" relative pb-[5%] mb-[2%] w-[22%] animate-pulse mr-[3%]   bg-neutral-800"></div>

                    </div>
                  </div>

             <div class="mt-[10%] flex flex-col">
                    <label class="mb-[2%] text-[150%]" for="">shots:</label>
                    <div v-if="gallery.length" class="grid grid-cols-2 gap-[10%]  mb-[5%]">
                          <div v-for="i in 4 " class=" relative pb-[55%]">
                              <div class=" absolute w-full h-full animate-pulse mr-[3%]   bg-neutral-800"></div>
                              <img class="rounded-sm absolute w-full h-full" :src="gallery[i].link" alt="">                                
                          </div>
                          
                    </div>
                    <div v-if="!gallery.length" class=" flex flex-row ">
                        <div v-if="!gallery.length" class="  pb-[30%] mb-[2%] w-[45%] animate-pulse ml-[3%] mr-[3%]   bg-neutral-800"></div>
                        <div v-if="!gallery.length" class="  pb-[30%] mb-[2%] w-[45%] animate-pulse mr-[3%]   bg-neutral-800"></div>

                    </div>
             </div>

             <div class="mt-[5%] flex flex-col pb-[20%]">
                    <label class="mb-[2%] text-[150%]" for="">smillar movies:</label>
                    
                     <div class="grid md:grid-cols-4 gap-[2%]">
                                 <div v-for="m in similars" class=" relative pb-[150%]">
                                    <div class=" absolute w-full h-full animate-pulse mr-[3%]   bg-neutral-800"></div>
                                     <img @click="go(m.id)" class=" cursor-pointer absolute w-full h-full hover:scale-[1.05] transform-all duration-200 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]" :src="m.image" alt="">
                                    </div>
                                 <div v-if="!similars.length" class=" relative pb-[140%] mb-[2%] w-[100%] animate-pulse mr-[3%]   bg-neutral-800"></div>
                                 <div v-if="!similars.length" class=" relative pb-[140%] mb-[2%] w-[100%] animate-pulse mr-[3%]   bg-neutral-800"></div>
                                 <div v-if="!similars.length" class=" relative pb-[140%] mb-[2%] w-[100%] animate-pulse mr-[3%]   bg-neutral-800"></div>
                                 <div v-if="!similars.length" class=" relative pb-[140%] mb-[2%] w-[100%] animate-pulse mr-[3%]   bg-neutral-800"></div>
                                 <div v-if="!similars.length" class=" relative pb-[140%] mb-[2%] w-[100%] animate-pulse mr-[3%]   bg-neutral-800"></div>
                                 <div v-if="!similars.length" class=" relative pb-[140%] mb-[2%] w-[100%] animate-pulse mr-[3%]   bg-neutral-800"></div>
                                 <div v-if="!similars.length" class=" relative pb-[140%] mb-[2%] w-[100%] animate-pulse mr-[3%]   bg-neutral-800"></div>
                                 <div v-if="!similars.length" class=" relative pb-[140%] mb-[2%] w-[100%] animate-pulse mr-[3%]   bg-neutral-800"></div>
                     </div>
            
                  </div>


      </div>


</template>