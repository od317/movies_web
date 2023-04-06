<script setup>

import { useRouter } from 'vue-router'; 
import {ref} from 'vue'
let router = useRouter()
    let uri = window.location.search.substring(1) 
    let params = new URLSearchParams(uri)
    let title = params.get("title") || ''
    let start = ref(false)
    let s = setTimeout(()=>{
        start.value=true
    },150)

let movies = ref([])

async function fetchapi() {

let resp  = await fetch(`https://imdb-api.com/API/AdvancedSearch/k_bb3vvmqp?title=${title}&title_type=feature,tv_series`)
console.log(resp)
movies.value =  await resp.json()
movies.value =  movies.value.results
movies.value = movies.value.filter(e=>{
    return e.image !=='https://imdb-api.com/images/original/nopicture.jpg' && e.image !== ''
})
}

fetchapi()

</script>

<template>






<div class="md:mt-[5%] md:px-[6%] mb-[1rem] flex flex-row md:justify-start justify-evenly ">
    <div class="group inline-block md:mr-[2%] text-black z-20">
 
  <button
    class="outline-none focus:outline-none  px-3 py-1 bg-c2 rounded-sm flex items-center min-w-32"
  >
    <span class="pr-1 font-semibold flex-1">Type : all</span>
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
    :class="` bg-c2 rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32`"
  >
    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Programming</li>
    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>
    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li>
  </ul>
    </div>

    <div class="group inline-block md:mr-[2%] text-black z-20">
 
 <button
   class="outline-none focus:outline-none  px-3 py-1 bg-c2 rounded-sm flex items-center min-w-32"
 >
   <span class="pr-1 font-semibold flex-1">Type : all</span>
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
   :class="` bg-c2 rounded-sm transform scale-0 group-hover:scale-100 absolute 
 transition duration-150 ease-in-out origin-top min-w-32`"
 >
   <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Programming</li>
   <li class="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>
   <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li>
 </ul>
   </div>


   <div class="group inline-block md:mr-[2%] text-black z-20 ">
 
 <button
   class="outline-none focus:outline-none  px-3 py-1 bg-c2 rounded-sm flex items-center min-w-32"
 >
   <span class="pr-1 font-semibold flex-1">Type : all</span>
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
   :class="` bg-c2 rounded-sm transform scale-0 group-hover:scale-100 absolute 
 transition duration-150 ease-in-out origin-top min-w-32`"
 >
   <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Programming</li>
   <li class="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>
   <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li>
 </ul>
   </div>

   <label for="" class="hidden items-center justify-end   md:flex flex-grow">showing {{ movies.length }} results</label>

</div>

<div class=" grid grid-cols-3 h-auto md:gap-x-[1%] md:gap-y-[2%] md:grid-cols-4 lg:grid-cols-6 md:px-[6%] pb-[29%]">
             <div   v-for="f in movies" :key="f"   class="flex flex-col relative z-10" >
              <img   @click="console.log('ok')" class=" h-full " :src="f.image"  alt="">
                    <div class=" absolute bg-opacity-[50%]  bg-zinc-900 p-[.5rem] h-[100%] w-[100%] flex flex-col justify-end whitespace-normal "  for="">
                        <label for="">{{ f.title }}</label>
                        <label for=""> <ion-icon name="star-outline"></ion-icon> 4.5</label>
                    </div>
                </div> 

                <div      class="flex flex-col relative z-10" >
              <img   @click="console.log('ok')" class="" :src="'s'"  alt="">
                    <div class=" absolute bg-opacity-[50%]  bg-zinc-900 p-[.5rem] h-[100%] w-[100%] flex flex-col justify-end whitespace-normal "  for="">
                        <label for="">f.title</label>
                        <label for=""> f.load </label>
                        <label for=""> <ion-icon name="star-outline"></ion-icon> 4.5</label>
                    </div>
                </div> 

</div>


<img src="" alt="">

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

  
</style>