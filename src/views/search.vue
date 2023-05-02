<script setup>

import { useRouter } from 'vue-router'; 
import {ref} from 'vue'
let router = useRouter()
    let uri = window.location.search.substring(1) 
    let params = new URLSearchParams(uri)
    let title = params.get("title") || ''
    let gen = ref(params.get("gen")) || ref('all')
    let type = ref(params.get("type")) || ref('all')
    let sort = ref(params.get("sort")) || ref('any')


    if(!(gen.value)||!(gen.value.length>0))
         gen.value = 'all'
    
    if(!(type.value)||!(type.value.length>0))
         type.value = 'all'

    if(!(sort.value)||!(sort.value.length>0))
         sort.value = 'all'     

    let start = ref(false)
    let s = setTimeout(()=>{
        start.value=true
    },150)

let movies = ref([])

let gens = ref([
  'all',
  'Action',
  'Drama',
  'Horror',
  'Adventure',
  'Comedy',
])

let sorts = ref([
  'new to old',
  'rating',
  'alphabetcal',

])



async function fetchapi() {
//k_bb3vvmqp k_unodv9vg k_zdj1as3m
let  t = type.value === 'all' ? "feature,tv_series":(type.value==='movie'?'feature':'tv_series')
let g  = gen.value ==='all'? '':gen.value.toLowerCase()
let groups =  ''
let resp  = await fetch(`https://imdb-api.com/API/AdvancedSearch/k_zdj1as3m?title=${title}&title_type=${t}&genres=${g}`)
movies.value =  await resp.json()
movies.value =  movies.value.results
movies.value = movies.value.filter(e=>{
    return e.image !=='https://imdb-api.com/images/original/nopicture.jpg' && e.image !== ''
})


}

fetchapi()

let movie_push = (title)=>{

  router.push(`/movie/${title}`)

}


let set_gen = (g)=>{
  
    gen.value = g
   
    router.push({ path: '/search', query: { title:title,gen:gen.value,type:type.value}})

    let s = setTimeout(()=>{
      if(window.location.toString().split('/')[3].substring(0,6)=='search'){
      window.location.reload()
      }
      insearch.value=true  
   },3)

}


let set_type = (t)=>{
  type.value = t
 
  router.push({ path: '/search', query: { title:title,gen:gen.value,type:type.value}})

  let s = setTimeout(()=>{
    if(window.location.toString().split('/')[3].substring(0,6)=='search'){
    window.location.reload()
    }
    insearch.value=true  
 },3)

}


let p = (r)=>{
  if(r)
  r = r.split('.')
  else
  return [1,2,3]
  let res = r.length>1 ? parseInt(parseInt(parseInt((r[0]+r[1]))/2.0)/10):parseInt(parseInt(parseInt((r[0]))/2.0))
  
  let rem  = r.length>1 ? (parseInt(parseInt((r[0]+r[1]))/2.0)%10):(parseInt(parseInt((r[0]+'0'))/2.0)%10)

  let rem2 = 5-res

  rem2 = rem>0 ? rem2-1:rem2


  return [res,rem,rem2]
}


window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'instant',
});

</script>

<template>






<div class=" md:px-[6%] mb-[1rem] pt-[5%] flex flex-row md:justify-start justify-evenly md:pt-[10%] ">
  
   <div class="group relative inline-block md:mr-[2%]  text-white z-20">
 
  <button
    class="outline-none focus:outline-none  px-3 py-1 bg-c2 rounded-t-sm flex items-center min-w-32"
  >
    <span class="pr-1 font-semibold flex-1">Genere: {{ gen }}</span>
    <span>
      <svg
        class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </span>
  </button>

  <ul
    :class="` bg-c2 rounded-b-sm transform w-full scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32`"
  >
    <li v-for="g in gens" @click="set_gen(g)" :class="`rounded-b-sm px-3 cursor-pointer py-1 w-full hover:bg-c3 hover:text-white ${gen===g?'bg-c3':''} `">{{ g }}</li>

  </ul>
    </div>

    <div class="group relative inline-block md:mr-[2%]  text-white z-20">
 
 <button
   class="outline-none focus:outline-none  px-3 py-1 bg-c2 rounded-t-sm flex items-center min-w-32"
 >
   <span class="pr-1 font-semibold flex-1">type: {{ type }}</span>
   <span>
     <svg
       class="fill-current h-4 w-4 transform group-hover:-rotate-180
       transition duration-150 ease-in-out"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 20 20"
     >
       <path
         d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
       />
     </svg>
   </span>
 </button>

 <ul
   :class="` bg-c2 rounded-b-sm transform w-full scale-0 group-hover:scale-100 absolute 
 transition duration-150 ease-in-out origin-top min-w-32`"
 >
   <li  @click="set_type('all')" :class="`rounded-b-sm px-3 cursor-pointer py-1 w-full hover:bg-c3 hover:text-white ${type==='all'?'bg-c3':''} `">all</li>
   <li  @click="set_type('movie')" :class="`rounded-b-sm px-3 cursor-pointer py-1 w-full hover:bg-c3 hover:text-white ${type==='movie'?'bg-c3':''} `">movie</li>
   <li  @click="set_type('series')" :class="`rounded-b-sm px-3 cursor-pointer py-1 w-full hover:bg-c3 hover:text-white ${type==='series'?'bg-c3':''} `">series</li>

 </ul>
   </div>
   




   <label for="" class="hidden items-center justify-end   md:flex flex-grow">showing {{ movies.length }} results</label>

</div>

<div class=" grid grid-cols-3 mt-[2%] h-auto md:gap-x-[1%] md:gap-y-[1%] md:grid-cols-4 lg:grid-cols-5 md:px-[6%] pb-[29%]">
             <div   v-for="f in movies" :key="f"   class="flex flex-col relative  z-10" > 
                <div class="relative pb-[150.666667%]">
                        <div class=" h-[100%]  animate-pulse absolute   bg-neutral-800  w-[100%]  z-[-1]  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  "></div>
                            <img   @click="movie_push(f.id)" class=" md:hover:scale-105 transition-all duration-200 cursor-pointer absolute h-full w-[100%] rounded-sm" :src="f.image"  alt="">
                        </div>
                        <div class=" relative hidden md:flex  bg-opacity-[50%]   md:p-[22%] lg:p-[15%] w-[100%]  flex-col justify-end whitespace-normal "  for="">
                          <div class=" absolute w-full flex flex-col justify-center h-full bottom-0 left-0">
                          <label class="truncate" for="">{{ f.title }}</label>
                          <div class="flex flex-row stars" id="stars">
                                    <div v-for="i in p(f.imDbRating)[0]"  class=" star  w-[10%] pb-[10%] relative ">
                                                    <div  :style="c1"  :class="` bg-[#FF9529] w-full h-full absolute `">
                                                      
                                                    </div>
                                                    

                                    </div>
                                    <div v-if="p(f.imDbRating)[1]!==0"   class=" star w-[10%] bg-[#FF9529]   pb-[10%] relative ">
                                      <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                            
                                      </div>             
                                      <div  :style="`width:${p(f.imDbRating)[1]*10}%`"  :class="`  bg-[#FF9529]  h-full absolute `">
                                                      
                                      </div>

                                    </div>

                                    <div v-for="i in p(f.imDbRating)[2]"   class=" star w-[10%] bg-[#FF9529]   pb-[10%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:0%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                              
                              </div>

                                   </div>

                          </div>
                        </div>
                        </div>
                </div> 

                <div v-if="movies.length===0"  v-for="i in 10"   class="flex flex-col relative  z-10" >
                  <div class="relative pb-[150.666667%]">
                        <div class=" h-[100%]  animate-pulse absolute bg-neutral-800    w-[100%]  z-[-1]  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  "></div>
                        </div>
                        <div class=" relative hidden md:flex  bg-opacity-[50%]   md:p-[22%] lg:p-[15%] w-[100%]  flex-col justify-end whitespace-normal "  for="">
                          <div class=" absolute w-full flex flex-col justify-center h-full bottom-0 left-0">
                          <label  class="truncate bg-slate-700 w-[50%] pb-[10%] animate-pulse " for=""></label>
                          <label class="w-[30%] pb-[10%] bg-slate-700 animate-pulse mt-[2%]" for=""></label>
                        </div>
                        </div>
                </div> 

</div>



</template>


<style scoped>
  /* since nested groupes are not supported we have to use 
     regular css for the nested dropdowns 
  */
  li>ul                 { transform: translatex(100%) scale(0) }
  li:hover>ul           { transform: translatex(101%) scale(1) }
  li > button svg       { transform: rotate(-90deg) }
  li:hover > button svg { transform: rotate(-270deg) }

  /* Below styles fake what can be achieved with the tailwind config
     you need to add the group-hover variant to scale and define your custom
     min width style.
  	 See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html
  	 for implementation with config file
  */
  .group:hover .group-hover\:scale-100 { transform: scale(1) }
  .group:hover .group-hover\:-rotate-180 { transform: rotate(180deg) }
  .scale-0 { transform: scale(0) }
  .min-w-32 { min-width: 8rem }
  [data-placeholder]::after {
        content: " ";
        box-shadow: 0 0 50px 9px rgba(254,254,254);
        position: absolute;
        top: 0;
        left: -100%;
        height: 100%; 
        animation: load 1s infinite;
    }
    @keyframes load {
        0%{ left: -100%}
        100%{ left: 150%}
    }

    .star{
   clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
       }

</style>