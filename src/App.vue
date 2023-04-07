<script setup>

import { ref, watch } from 'vue';
import test from './test.vue'
import {useRouter} from 'vue-router'

import { useRoute } from "vue-router";

const route = useRoute();

// do a `console.log(route)` to see route attributes (fullPath, hash, params, path...)
watch(
  () => route.fullPath,
  async () => {
   cu = ref(window.location.toString().split('/'))
switch(cu.value[3]){
   case 'movies':   
      page.value='movies'
         break
   case 'series':
      page.value='series'
         break      
   case 'search':
      page.value='search'  
      hide.value=true  
      break  
   default:
      page.value='home'
         break   
}  }
);




let router = useRouter()

let page = ref('home')
let search_act = ref(false)
let hide = ref(false)
let cu = ref(window.location.toString().split('/'))
switch(cu.value[3]){
   case 'movies':   
      page.value='movies'
         break
   case 'series':
      page.value='series'
         break      
   case 'search':
      page.value='search'  
      hide.value=true  
      break  
   default:
      page.value='home'
         break   
}


let search_q = ref("")

let search = ()=>{
   (search_q.value.length>0)? 
   router.push({ path: '/search', query: { title:search_q.value}}):
   router.push({ path: '/search'})
}

let ss = ()=>{
   page.value='search'
   console.log(page.value)
}


watch(page,()=>{
     if(page.value=='search'){
           let s = setTimeout(()=>{
                hide.value=true
           },301)
     }
     else{
         hide.value=false
     } 
})

let loads = ()=>{
   console.log('ok')
}


</script>



<template>


<div class="bg-c1 text-white overflow-x-clip min-h-screen">
    
  
  <!-- lg nav_bar -->
  <div :class="`flex-col hidden md:flex z-[100]  ${page=='search'? '' : '' } lg:px-[12%] pt-[1%]`">
         <div :class="` flex flex-row ${page=='search'? ' transition-all duration-300' : '' } text-[1.5rem] w-full  items-center justify-between `">
            
            <div :class="`${page=='search'? '   ':''}  w-[40%] py-[1%] flex items-center justify-center`">
            <label for=""><ion-icon name="videocam-outline"></ion-icon></label>
            </div>

               <div  :class="` ${hide?' ':'  '}  hidden md:block mb-[1rem]  z-[100]  text-[1.2rem] `">
                           <div  :class="`  ${hide? ' ':''} gap-[30%] pt-[5%] px-[1%] justify-center w-full flex flex-row  items-center `">
                                          <routerLink @click="page='home'" :class="`  z-[100] ${page=='home' ? '  text-c2 ':'text-white'} cursor-pointer hover:text-c2 transition-all duration-200 `" to="/">
                                                      <label class="cursor-pointer hover:text-c2 transition-all duration-200" for="">Home</label>
                                          </routerLink>
                                    

                                       <routerLink @click="page='movies'" :class="`  z-[100] ${ page=='movies' ? '  text-c2 ':'text-white'} cursor-pointer hover:text-c2 transition-all duration-200 `" to="/movies">
                                          <label class="cursor-pointer hover:text-c2 transition-all duration-200" for="">Movies</label>
                                       </routerLink>
                                    


                                       <routerLink @click="page='series'" :class="`  z-[100] ${page=='series' ?'  text-c2 ':'text-white'} cursor-pointer hover:text-c2 transition-all duration-200 `" to="/series">
                                          <label class="cursor-pointer hover:text-c2 transition-all duration-200" for="">series</label>
                                    </routerLink>
                        </div>
            </div>


            <div  :class="`w-[40%]  py-[1%] text-[1.2rem] flex items-center text-center ${page=='search'?'':''} justify-center`">
            <div  class=" ">
               <form class="group" @submit="search()" @submit.prevent="onSubmit" action="">
               <button  :class="``" @click="page='search'" type="submit"><ion-icon :class="`${page=='search'?'text-c2':''} `" name="search-outline"></ion-icon></button>
                  <input  v-model="search_q" :class="`${search_q.length!==0 ? 'w-[70%]':''} text-white  w-[0%] lg:group-hover:w-[80%] ml-[4%] md:group-hover:w-[70%] md:group-hover:px-1 transition-all duration-300  outline-none border-b-[.1rem] bg-transparent  text-[1.2rem]`" type="text">
               </form>
               </div> 
         </div>

         </div>



</div>

  
  

  <!-- sm nav_bar -->
  
   <div class=" md:hidden absolute pt-[.5rem] text-[1.5rem] w-full flex items-center justify-center">
      <label  for="">Laith</label>
   </div>


    <div :class="` md:hidden text-gray-400 sticky top-[91%] w-[90%] m-auto  flex justify-evenly z-[100]
                   ${ search_act ?' rounded-b-md':'rounded-md'} p-2 text-[1.6rem] backdrop-blur-md bg-white/30 transition-all duration-100`">
       
         <div :class="` absolute backdrop-blur-none bg-c2 w-full flex flex-row justify-between py-2 
         rounded-t-md pl-[10%] ${search_act ? 'opacity-100 translate-y-[-111%]':'opacity-0'} 
          transition-all duration-100  z-[-100] pr-[10%]`">
         <input type="text" :class="` ${search_act ? '':''} w-[70%] bg-transparent rounded-t-md outline-none placeholder:text-white p-1`"
          :disabled="!search_act" placeholder="search">
         
         <button class="bg-white text-c1 z-[90] rounded-md px-[1rem]" @click="go" :disabled="!search_act">Go</button>

         </div>


         <routerLink @click="page='home'" :class="` z-[100] ${page=='home' ? ' translate-y-[-10%] text-c2 hover:text-c2':'text-white'}  transition-all duration-200 `" to="/">
            <ion-icon   name="home-outline"></ion-icon>
         </routerLink>
        

         <routerLink @click="page='movies'" :class="` z-[100] ${ page=='movies' ? ' translate-y-[-10%] text-c2 hover:text-c2':'text-white'}  transition-all duration-200 `" to="/movies">
            <ion-icon  name="tv-outline"></ion-icon>
         </routerLink>
        


         <routerLink @click="page='series'" :class="`z-[100] ${page=='series' ?' translate-y-[-10%] text-c2 hover:text-c2':'text-white'}  transition-all duration-200 `" to="/series">
            <ion-icon name="albums-outline"></ion-icon>
        </routerLink>
        

        <button @click="search_act  = !search_act" :class="` z-[100] ${search_act ?' translate-y-[-10%] text-c2 hover:text-c2':'text-white'}  transition-all duration-200 `" >
         <ion-icon name="search-outline"></ion-icon>
        </button>
        
    </div>

    <div class="">
    </div>

    <router-view></router-view>
   <div class="hidden">
    <test/>
   </div>
   </div>
   
</template>

<style>

*{
   outline: none;
}

</style>