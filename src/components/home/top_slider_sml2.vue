<script setup>

import {ref} from 'vue'
import { useRouter } from 'vue-router';
let router = useRouter()
let films = ref([
{
  img:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dde1236d-1889-483a-88c3-3bc3e6dc9a51/d904wm4-03718aee-742b-475a-b467-2e3ff3e3b5c0.jpg/v1/fill/w_1024,h_576,q_75,strp/breaking_bad_background_pc_by_doublempics_d904wm4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZGRlMTIzNmQtMTg4OS00ODNhLTg4YzMtM2JjM2U2ZGM5YTUxXC9kOTA0d200LTAzNzE4YWVlLTc0MmItNDc1YS1iNDY3LTJlM2ZmM2UzYjVjMC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ykcwt1hqj2GEmYsbtRfJ2MivGaKyDtFKxAhnMT3pOuU',
  title:'breaking bad',
  id:'tt0903747',
  rate:'9.5',
  num:6
 },
 {  
  img:'https://wallpapersmug.com/download/2048x1152/a00b73/a-quiet-place-part-2-2020.jpg',
  title:'a quiet place 2',
  id:'tt6644200',
  rate:'7.5',
  num:1
 },
 {
  img:'https://images.alphacoders.com/106/1069116.jpg',
  title:'better call saul',
  id:'tt3032476',
  rate:'8.9',
  num:2
 },
 {
  img:'https://www.cnet.com/a/img/resize/eb053deb92b07b0496fbd22ce6ab16fc5c0a5a76/hub/2019/12/13/b921910f-7218-43dc-a4bf-487d04da3d4c/thewitcher-101-unit-06900-rt-fk3ph4dhp.jpg?auto=webp&width=1200',
  title:'The Witcher',
  id:'tt5180504',
  rate:'8.1',
  num:3
 },
 {
  img:'https://wallpaperaccess.com/full/782447.jpg',
  title:'vikings',
  id:'tt2306299',
  rate:'8.5',
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

let b = (num)=>{

if(num==1)
   forward()
if(num==3)
   backward()

}

</script>


<template>

 
      <div :style="`transform:translateX(${trans*-1}%)`" :class="`whitespace-nowrap    ${du ? 'transition-all duration-[500ms]':''} w-[70%] `">


        <div @click="b(f.num)"  :class="`w-[100%]   px-[2.3%]  relative inline-block mt-[2%] bg-transparent  ${du ? 'transition-all duration-[500ms]':''}
           ${f.num===1 ? ' ':(f.num===3? '':'')}`" 
          v-for="f in films">
          <RouterLink class="hover:text-white cursor-default" :to="`/movie/${f.id}`">
                  <div  :class="`pb-[52%]  relative overflow-hidden ${!bo? 'group':''}  w-full h-full shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]   bg-transparent  rounded-md `">
                       <div  class=" absolute w-full  h-full rounded-md bg-neutral-900 animate-pulse bg-opacity-30  bg-cover bg-center"></div>
                        <img  :src="f.img" class=" absolute w-full h-full rounded-md  bg-cover bg-center"/>
                        
                        <div  class=" absolute w-full h-full rounded-md bg-neutral-800 bg-opacity-50  bg-cover bg-center"></div>
                        
                        <div class=" absolute w-[70%] pl-[5%] pb-[5%] h-full flex flex-col justify-end ">
                            
                          
                               <label for="" class=" capitalize text-[150%] mb-[1.5%]">{{f.title}}</label>

                               <div class="flex flex-row items-center text-[150%] mb-[2%]" id="stars">
                                          <ion-icon class=" text-[#FF9529] " name="star"></ion-icon>
                                          <label for="">{{f.rate}}</label>
                              </div>

                               <label class="  line-clamp-3 md2:line-clamp-4 text-[90%] lg:line-clamp-none break-words whitespace-normal" for="">
                                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus quam mollitia obcaecati eum iste eaque cum, minus repellat commodi, 
                                  similique qui illo? Dolorum, dignissimos reiciendis facere asperiores perspiciatis harum eveniet.dignissimos reiciendis facere asperiores perspiciatis harum eveniet.dignissimos 
                                </label>

                                <RouterLink :to="`/movie/${f.id}`" class=" cursor-pointer md:w-[20%] mt-[4%] mb-[1%] py-[.5%] hover:bg-c3  transition-all duration-200 rounded-sm bg-c2 hover:text-white text-center">View movie</RouterLink>

 
                        </div>
                      

                  </div>
                </RouterLink>
        </div>



      </div>
     <div class="flex flex-row w-full justify-center">
      <div  class="w-[41%] flex flex-row justify-center gap-[2%] pt-[1%]">
        <button :disabled="trans!==slide_val" class=" disabled:cursor-pointer z-50 transition-all duration-200 hover:text-c3" @click="forward()"><ion-icon name="chevron-back-outline"></ion-icon></button>
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

</style>
