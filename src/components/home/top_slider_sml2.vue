<script setup>

import {ref} from 'vue'
import { useRouter } from 'vue-router';
let router = useRouter()
let films = ref([
{
  img:'https://d.newsweek.com/en/full/1629265/tenet-streaming-release-date.jpg',
  title:'Avengers ',
  num:6
 },
 {  
  img:'https://wallpapersmug.com/download/2048x1152/a00b73/a-quiet-place-part-2-2020.jpg',
  title:'Dune',
  num:1
 },
 {
  img:'https://images.hdqwalls.com/download/vikings-season-5-qu-2048x1152.jpg',
  title:'John Wick 4',
  id:'tt10366206',
  num:2
 },
 {
  img:'https://images.hdqwalls.com/download/vikings-season-5-qu-2048x1152.jpg',
  title:'The Dark Knight ',
  num:3
 },
 {
  img:'https://images.hdqwalls.com/download/vikings-season-5-qu-2048x1152.jpg',
  title:'Interstellar',
  num:5
 }
])

let trans = ref(179)
let du = ref(true)
let bo = ref(false)
let slide_val = ref(179)

//let slide = setInterval(backward,3000)


function forward  (){
    trans.value=79
    bo.value=true
    let s2 = setTimeout(()=>{
    bo.value=false
  },700)
    let s = setTimeout(()=>{
      du.value=false
      bo.value=false
      let f = films.value.pop()
      films.value = [f].concat(films.value)
      trans.value=slide_val.value
    },600)
    du.value=true
    films.value[0].num=1
      films.value[1].num=2
      films.value[2].num=3
      films.value[3].num=0
      films.value[4].num=0
      clearInterval(slide)
      slide = setInterval(backward,5000)
      
}

function backward (){
  trans.value+=100
  bo.value=true
  let s2 = setTimeout(()=>{
    bo.value=false
  },700)
  let s = setTimeout(()=>{
      du.value=false
      let f = films.value[0]
      films.value = films.value.slice(1)
      films.value.push(f)
      trans.value=slide_val.value
    },600)
    du.value=true
      films.value[2].num=1
      films.value[3].num=2
      films.value[4].num=3
      films.value[1].num=0
      films.value[0].num=0
      clearInterval(slide)
      slide = setInterval(backward,5000)
}



let view = (title)=>{
  router.push(`/movie/${title}`)
}

</script>


<template>

 
      <div :class="`whitespace-nowrap translate-x-[${trans*-1}%]   ${du ? 'transition-all duration-[500ms]':''} w-[70%] `">


        <div  :class="`w-[100%]   px-[2.3%]  relative inline-block mt-[2%] bg-transparent  ${du ? 'transition-all duration-[500ms]':''}
           ${f.num===1 ? ' ':(f.num===3? '':'')}`" 
          v-for="f in films">
                  <div  :class="`pb-[52%]  relative overflow-hidden ${!bo? 'group':''}  w-full h-full shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]   bg-transparent  rounded-md `">
                       <div  class=" absolute w-full  h-full rounded-md bg-neutral-900 animate-pulse bg-opacity-30  bg-cover bg-center"></div>
                        <img  :src="f.img" class=" absolute w-full h-full rounded-md  bg-cover bg-center"/>
                        
                        <div  class=" absolute w-full h-full rounded-md bg-neutral-800 bg-opacity-50  bg-cover bg-center"></div>
                    
                      

                  </div>
        </div>



      </div>
     <div class="flex flex-row w-full justify-center">
      <div  class="w-[41%] flex flex-row justify-center gap-[2%] pt-[1%]">
        <button :disabled="trans!==slide_val" class=" disabled:cursor-pointer z-50 " @click="forward()"><ion-icon name="chevron-back-outline"></ion-icon></button>
        <button :disabled="trans!==slide_val" class=" disabled:cursor-pointer z-[100]" @click="backward()"><ion-icon name="chevron-forward-outline"></ion-icon></button>
      </div>
    </div>

</template>
<style scoped>
@media screen and (min-width: 1526px){
  img{
  height: 30rem;
}
}

</style>
