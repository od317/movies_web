<script setup>

import {ref} from 'vue'
import { useRouter } from 'vue-router';
let router = useRouter()
let films = ref([
{
  img:'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg',
  title:'Avengers end game',
  id:'tt4154796',
  cast:['https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_FMjpg_UX1000_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTU2NTg1OTQzMF5BMl5BanBnXkFtZTcwNjIyMjkyMg@@._V1_FMjpg_UX1000_.jpg',
        'https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg'],
  rate:'8.4',
  num:6
 },
 {  
  img:'https://media.finnkino.fi/1012/Event_12996/portrait_medium/Dune_1080c.jpg',
  title:'Dune',
  id:'tt1160419',
  cast:['https://m.media-amazon.com/images/M/MV5BNThiOTM4NTAtMDczNy00YzlkLWJhNTEtZTZhNDVmYzlkZWI0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Rebecca_Ferguson_in_2018.jpg/220px-Rebecca_Ferguson_in_2018.jpg',
        'data:image/jpeg;base64,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',
        'https://m.media-amazon.com/images/M/MV5BMjA4ODUyNDQ2NV5BMl5BanBnXkFtZTYwODk2MTYz._V1_.jpg'],
  rate:'8',
  num:1
 },
 {
  img:'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/167/197/167197360_88ca26.jpg',
  title:'John Wick 4',
  id:'tt10366206',
  cast:['https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg',
        'https://m.media-amazon.com/images/M/MV5BZGU0ZjFjZGMtZGU4My00ZmRmLTk2Y2EtOWNlZjhhZmE2MjIwXkEyXkFqcGdeQXVyMTA2MDIzMDE5._V1_.jpg',
        'https://m.media-amazon.com/images/M/MV5BODBlNmRhODYtOWE2Ni00MTZmLWExMWYtMmRjYWNhNDRjNGU2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjg5NDg3OTQtYzMyYS00YjhhLTk2NmEtZTExNGViYTczZTU2XkEyXkFqcGdeQXVyMTU1MTU2MDI@._V1_.jpg'],
  rate:'8.2',
  num:2
 },
 {
  img:'https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg',
  title:'The Dark Knight',
  id:'tt0468569',
  cast:['data:image/jpeg;base64,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'
        ,'https://m.media-amazon.com/images/M/MV5BMTI2NTY0NzA4MF5BMl5BanBnXkFtZTYwMjE1MDE0._V1_FMjpg_UX1000_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTc3NTM4MzQ5MV5BMl5BanBnXkFtZTcwOTE4MDczNw@@._V1_.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/a/a5/Cillian_Murphy_Press_Conference_The_Party_Berlinale_2017_02cr.jpg'],
  rate:'9',
  num:3
 },
 {
  img:'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
  title:'Interstellar',
  id:'tt0816692',
  cast:['https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_FMjpg_UX1000_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTU1MDM5NjczOF5BMl5BanBnXkFtZTcwOTY2MDE4OA@@._V1_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjAwNzIwNTQ4Ml5BMl5BanBnXkFtZTYwMzE1MTUz._V1_FMjpg_UX1000_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTRhNzQ3NGMtZmQ1Mi00ZTViLTk3OTgtOTk0YzE2YTgwMmFjXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg'],
  rate:'8.6',
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



let p = (r)=>{
  r = r.split('.')

  let res = r.length>1 ? parseInt(parseInt(parseInt((r[0]+r[1]))/2.0)/10):parseInt(parseInt(parseInt((r[0]))/2.0))
  
  let rem  = r.length>1 ? (parseInt(parseInt((r[0]+r[1]))/2.0)%10):(parseInt(parseInt((r[0]+'0'))/2.0)%10)

  let rem2 = 5-res

  rem2 = rem>0 ? rem2-1:rem2


  return [res,rem,rem2]
}

let b = (num)=>{

  if(num==1)
     forward()
  if(num==3)
     backward()

}

</script>


<template>

  <button :disabled="trans!==slide_val" class=" disabled:cursor-pointer z-50" @click="forward()"></button>
  <button :disabled="trans!==slide_val" class=" disabled:cursor-pointer z-[100] mb-10" @click="backward()"></button>

      <div :class="` whitespace-nowrap translate-x-[-${trans}%] ${du ? 'transition-all duration-[500ms]':''} `">


        <div @click="b(f.num)"  :class="`w-[50%]  px-[2.3%] inline-block mt-[2%]  
           ${f.num===1 ? ' -skew-y-6':(f.num===3? ' skew-y-6':'')} ${du ? 'transition-all duration-[500ms]':''}`" 
          v-for="f in films">
                  <div class="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] px-[5%] flex flex-row  rounded-md bg-c2">
                    
                         <div class="w-[50%]  pb-[50%]  relative">
                           <div class="animate-pulse absolute bg-slate-700 w-[100%] h-full z-[20]  shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] translate-y-[-15%] rounded-md"></div>
                           <div class="z-[30] overflow-hidden h-full absolute w-full shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] translate-y-[-15%] rounded-md">
                                <div :style="` background-image:url(${f.img})`" class=" bg-cover bg-center z-[30] min-h-full  w-full  rounded-md"></div>
                           </div>
                        </div>

                         <div class="p-[5%] w-[50%] whitespace-normal flex flex-col">

                              <label  class="lg:text-[1.3rem] capitalize truncate">
                                       {{ f.title }}
                              </label>

                              <div class="flex flex-row stars" id="stars">
                                    <div v-for="i in p(f.rate)[0]"  class=" star  w-[12%] pb-[12%] relative ">
                                                    <div  :style="c1"  :class="` bg-[#FF9529] w-full h-full absolute `">
                                                      
                                                    </div>
                                                    

                                    </div>
                                    <div v-if="p(f.rate)[1]!==0"   class=" star w-[12%] bg-[#FF9529]   pb-[12%] relative ">
                                      <div   :class="` star bg-c2 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                            
                                      </div>             
                                      <div  :style="`width:${p(f.rate)[1]*10}%`"  :class="`  bg-[#FF9529]  h-full absolute `">
                                                      
                                      </div>

                                    </div>

                                    <div v-for="i in p(f.rate)[2]"   class=" star w-[12%] bg-[#FF9529]   pb-[12%] relative ">
                              <div   :class="` star bg-c2 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:0%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                              
                              </div>

                            </div>

                             </div>

                              <label class=" whitespace-normal md:text-[.7rem] md:max-h-[7.3rem] lg:text-[.9rem] lg:max-h-[8rem] mt-[5%]  overflow-hidden  " for="">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae modi atque nesciunt beatae quos tempora reiciendis aliquid earum nobis facilis? Placeat quam officia iste natus nemo atque, tenetur tempora incidunt?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae modi atque nesciunt beatae quos tempora reiciendis aliquid earum nobis facilis? Placeat quam officia iste natus nemo atque, tenetur tempora incidunt?
                              </label>
        
                              <div class=" flex-col flex-grow  w-full">

                                <label class="mt-[5%] hidden lg:block" for="">Cast:</label>
                                 <div class="flex-row flex-grow mt-2 gap-[.5rem] hidden lg:flex">
                                        <div v-for="c in f.cast" class="w-[20%] relative pb-[20%]  rounded-full  bg-center bg-cover"  >
                                           <div class=" absolute w-full h-full bg-neutral-800 animate-pulse rounded-full"></div>   
                                          <div class="w-full h-full absolute rounded-full bg-cover bg-center " :style="` background-image:url(${c})`"></div>
                                        </div>                                
                                      </div>

                                  <RouterLink :to="`/movie/${f.id}`" class="hover:text-white">
                                     <button  class=" self-start place-self-end bg-c1 hover:bg-c3 transition-all duration-200  px-[7%] py-[2%] mt-[5%] lg:text-[1rem] lg:mt-[10%] rounded-md">View Movie</button>
                                  </RouterLink>

                              </div>

                         </div>
                    
                  </div>
        </div>



      </div>
     <div class="flex flex-row w-full justify-center">
      <div class="w-[41%] flex flex-row justify-center gap-[2%] pt-[1%]">
        <button :disabled="trans!==slide_val" class=" disabled:cursor-pointer z-[100] transition-all duration-200 hover:text-c3 " @click="forward()"><ion-icon name="chevron-back-outline"></ion-icon></button>
        <button :disabled="trans!==slide_val" class=" disabled:cursor-pointer z-[100] transition-all duration-200 hover:text-c3" @click="backward()"><ion-icon name="chevron-forward-outline"></ion-icon></button>
      </div>
    </div>

</template>
<style scoped>
@media screen and (min-width: 1526px){
  img{
  height: 30rem;
}
}


.star{
   clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

</style>
