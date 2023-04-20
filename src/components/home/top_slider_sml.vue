<script setup>

import {ref} from 'vue'
import { useRouter } from 'vue-router';
let router = useRouter()
let films = ref([
{
  img:'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg',
  title:'Avengers ',
  num:6
 },
 {  
  img:'https://media.finnkino.fi/1012/Event_12996/portrait_medium/Dune_1080c.jpg',
  title:'Dune',
  num:1
 },
 {
  img:'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/167/197/167197360_88ca26.jpg',
  title:'John Wick 4',
  id:'tt10366206',
  num:2
 },
 {
  img:'https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg',
  title:'The Dark Knight ',
  num:3
 },
 {
  img:'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
  title:'Interstellar',
  num:5
 }
])

let trans = ref(75)
let du = ref(true)
let slide_val = ref(75)

//let slide = setInterval(backward,3000)


function forward  (){
    trans.value-=50
    let s = setTimeout(()=>{
      du.value=false
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
  trans.value+=50
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

  <button :disabled="trans!==slide_val" class=" disabled:cursor-pointer z-50" @click="forward()"></button>
  <button :disabled="trans!==slide_val" class=" disabled:cursor-pointer z-[100] mb-10" @click="backward()"></button>

      <div :class="` whitespace-nowrap translate-x-[-${trans}%] ${du ? 'transition-all duration-[500ms]':''} `">


        <div :class="`w-[50%]  px-[2.3%] inline-block mt-[2%]  
           ${f.num===1 ? ' -skew-y-6':(f.num===3? ' skew-y-6':'')} ${du ? 'transition-all duration-[500ms]':''}`" 
          v-for="f in films">
                  <div class="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] px-[5%] flex flex-row  rounded-md bg-c2">
                    
                         <div class="w-[50%]   relative">
                          <div class="animate-pulse absolute bg-slate-700 w-[100%] h-full z-[20]  shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] translate-y-[-15%] rounded-md"></div>
                          <img :src="f.img" class=" z-[30] h-full absolute w-full shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] translate-y-[-15%] rounded-md" alt="">
                        </div>

                         <div class="p-[5%] w-[50%] whitespace-normal flex flex-col">

                              <label  class="lg:text-[1.3rem]">
                                       {{ f.title }}
                              </label>

                              <label class="lg:text-[1rem] md:text-[.8rem]  items-center" for="">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                              </label>

                              <label class=" whitespace-normal md:text-[.7rem] md:max-h-[7.3rem] lg:text-[.9rem] lg:max-h-[8rem] mt-[5%]  overflow-hidden  " for="">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae modi atque nesciunt beatae quos tempora reiciendis aliquid earum nobis facilis? Placeat quam officia iste natus nemo atque, tenetur tempora incidunt?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae modi atque nesciunt beatae quos tempora reiciendis aliquid earum nobis facilis? Placeat quam officia iste natus nemo atque, tenetur tempora incidunt?
                              </label>
        
                              <div class=" flex-col flex-grow  w-full">

                                <label class="mt-[5%] hidden lg:block" for="">Cast:</label>
                                 <div class="flex-row flex-grow mt-2 gap-[.5rem] hidden lg:flex">
                                        <div class="w-[20%] h-[40px] rounded-full bg-[url('https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg')] bg-center bg-cover"  ></div>
                                        <div class="w-[20%] h-[40px] rounded-full bg-[url('https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg')] bg-center bg-cover"  ></div>
                                        <div class="w-[20%] h-[40px] rounded-full bg-[url('https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg')] bg-center bg-cover"  ></div>
                                        <div class="w-[20%] h-[40px] rounded-full bg-[url('https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg')] bg-center bg-cover"  ></div>
                                        <div class="w-[20%] h-[40px] rounded-full bg-[url('https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg')] bg-center bg-cover"  ></div>
                                 </div>

                                 <button @click="view(f.id)" class=" self-start place-self-end bg-c1 p-1 mt-[5%] lg:text-[1rem] lg:mt-[10%] rounded-md">View Movie</button>


                              </div>

                         </div>
                    
                  </div>
        </div>



      </div>
     <div class="flex flex-row w-full justify-center">
      <div class="w-[41%] flex flex-row justify-center gap-[2%] pt-[1%]">
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
