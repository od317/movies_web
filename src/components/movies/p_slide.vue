<script setup>

import {ref} from 'vue'

let trans = ref(0)
let t = ref(false)

let n0 = ref(false)
let n1 = ref(true)

let n6 = ref(true)
let n7= ref(false)

let cur = ref(1)

let movies = ref([
{num:0,
img:'https://cdn.cinematerial.com/p/297x/haeorwgk/1917-british-movie-poster-md.jpg?v=1579166770',
name:'1917',
gen:['Action','Action','Action']},
{num:1,
img:'https://m.media-amazon.com/images/I/71LNVGVpWYL.jpg',
name:'John Wick Chapter 4',
gen:['Action','Action','Action']},
{num:2,
img:'https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg',
name:'John Wick Chapter 4',
gen:['Action','Action','Action']},
{num:3,
img:'https://i.etsystatic.com/21028910/r/il/cdd6d8/2845936897/il_1080xN.2845936897_p1mg.jpg',
name:'John Wick Chapter 4',
gen:['Action','Action','Action']},
{num:4,
img:'https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_FMjpg_UX1000_.jpg',
name:'John Wick Chapter 4',
gen:['Action','Action','Action']},
{num:5,
img:'https://upload.wikimedia.org/wikipedia/en/2/21/Kimetsu_no_Yaiba_Mugen_Ressha_Hen_Poster.jpg',
name:'John Wick Chapter 4',
gen:['Action','Action','Action']},
{num:6,
img:'https://m.media-amazon.com/images/I/91i-DXsIHeL._AC_SY606_.jpg',
name:'John Wick Chapter 4',
gen:['Action','Action','Action']},
{num:7,
img:'https://deadline.com/wp-content/uploads/2019/08/the-rise-of-skywalker-poster.jpg',
name:'John Wick Chapter 4',
gen:['Action','Action','Action']}

])

let movies2 = ref([
{num:0,
img:'https://api.time.com/wp-content/uploads/2019/12/1917.jpg',
name:'1917',
gen:['Action','Drama','War'],
rate:'8.8'},
{num:1,
img:'https://m.media-amazon.com/images/I/71LNVGVpWYL.jpg',
name:'Intersteller',
gen:['Mystery','Sci fi','Drama'],
rate:'8.6'},
{num:2,
img:'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/02/john-wick-4-keanu-reeves.jpg',
name:'John Wick Chapter 4',
gen:['Action','Crime','Thriller'],
rate:'8.2'},
{num:3,
img:'https://m.media-amazon.com/images/M/MV5BMjJmYTNkNmItYjYyZC00MGUxLWJhNWMtZDY4Nzc1MDAwMzU5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
name:'knives out',
gen:['Dark comedy','Crime','Drama'],
rate:'7.9'},
{num:4,
img:'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg',
name:'Jurassic World 2',
gen:['Action','Action','Action'],
rate:'6.1'},
{num:5,
img:'https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_FMjpg_UX1000_.jpg',
name:'Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train',
gen:['Anime','Action','Fantasy'],
rate:'8.2'},
{num:6,
img:'https://m.media-amazon.com/images/I/91i-DXsIHeL._AC_SY606_.jpg',
name:'birdman',
gen:['Comedy','Satire','Drama'],
rate:'7.7'},
{num:7,
img:'https://deadline.com/wp-content/uploads/2019/08/the-rise-of-skywalker-poster.jpg',
name:'star wars the rise of skywalker',
gen:['Action','Adventure','Sci Fi'],
rate:'6.5'}

])


let length = movies.value.length

let forw = ()=>{
      t.value = true
      n6.value=false
      n0.value=true
      trans.value= 19.1
      let s = setTimeout(()=>{
            n6.value = true
            n0.value = false
            trans.value=0
            let m1 = movies.value.pop()
            movies.value = [m1].concat(movies.value)
            t.value = false

      },500)
}

let back = ()=>{
      t.value = true
      n7.value = true
      n1.value = false
      trans.value= -19.1

      let s = setTimeout(()=>{
            n7.value=false
            n1.value=true
            trans.value=0
            let m1 = movies.value[0]
            movies.value = movies.value.slice(1)
            movies.value.push(m1)
            t.value = false
      },500)

}

let click_on = ref(false)

let click = (num)=>{
      click_on.value = true 
      cur.value = movies.value[num].num
      let s = setTimeout(()=>{
      click_on.value = false
      },200)
}


let p = (r)=>{
  r = r.split('.')
  let res = r.length>1 ? parseInt(parseInt(parseInt((r[0]+r[1]))/2.0)/10):parseInt(parseInt(parseInt((r[0]))/2.0))
  
  let rem  = r.length>1 ? (parseInt(parseInt((r[0]+r[1]))/2.0)%10):(parseInt(parseInt((r[0]+'0'))/2.0)%10)
  
  let rem2 = 5-res

  rem2 = rem>0 ? rem2-1:rem2

  return [res,rem,rem2]
}


</script>


<template>

 <div class=" mb-[5%] hidden md:block ">
      <div class="w-full relative overflow-hidden md:pb-[60%] lg:pb-[44%] hidden md:flex flex-col   bg-cover bg-center ">

            <div :class="` ${cur===0? ' opacity-[100%]': 'opacity-[0%]' } transition-all duration-200ms absolute w-full h-full bg-[url('https://api.time.com/wp-content/uploads/2019/12/1917.jpg')] bg-cover bg-center`"></div>            
            <div :class="` ${cur===1? ' opacity-[100%]': 'opacity-[0%]' } transition-all duration-200ms absolute w-full h-full bg-[url('https://rare-gallery.com/uploads/posts/979135-Interstellar-movie-movies-astronaut-sea.jpg')] bg-cover bg-center`"></div>
            <div :class="` ${cur===2? ' opacity-[100%]': 'opacity-[0%]' } transition-all duration-200ms absolute w-full h-full bg-[url('https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/02/john-wick-4-keanu-reeves.jpg')] bg-cover bg-center`"></div>
            <div :class="` ${cur===3? ' opacity-[100%]': 'opacity-[0%]' } transition-all duration-200ms absolute w-full h-full bg-[url('https://cdn.theatlantic.com/thumbor/gfEC-kjBeTO3jJzafQ4WrEvTBVk=/0x256:4000x2506/1600x900/media/img/mt/2019/11/knives_out_KO_D10_04517_R_rgb/original.jpg')] bg-cover bg-center`"></div>
            <div :class="` ${cur===4? ' opacity-[100%]': 'opacity-[0%]' } transition-all duration-200ms absolute w-full h-full bg-[url('https://sfanytime-images-prod-http2.secure2.footprint.net/MEDIAM/86619dcb-65e4-4cf6-91db-a93000f18f7d_MEDIAM_32bda4db-124b-40f0-8143-8b2dfd987c6a.jpg?w=1125&fm=pjpg&s=63e07ea0150d5d854249fc798f6029dc')] bg-cover bg-center`"></div>
            <div :class="` ${cur===5? ' opacity-[100%]': 'opacity-[0%]' } transition-all duration-200ms absolute w-full h-full bg-[url('https://m.media-amazon.com/images/M/MV5BMzEwYjhkYjUtMGRjOS00ZTAxLWEyM2QtYWUwYmEyM2FmOWZmXkEyXkFqcGdeQXVyNzM3NDY3OTA@._V1_.jpg')] bg-cover bg-center`"></div>
            <div :class="` ${cur===6? ' opacity-[100%]': 'opacity-[0%]' } transition-all duration-200ms absolute w-full h-full bg-[url('https://mobimg.b-cdn.net/v3/fetch/72/72ff70586d5f4a7055ff379230e73add.jpeg')] bg-cover bg-center`"></div>
            <div :class="` ${cur===7? ' opacity-[100%]': 'opacity-[0%]' } transition-all duration-200ms absolute w-full h-full bg-[url('https://images.hdqwalls.com/wallpapers/rey-rise-of-skywalker-4k-r6.jpg')] bg-cover bg-center`"></div>
            
            
            

            <div class=" absolute w-full h-full bg-neutral-800 bg-opacity-50"></div>
            
            <div class=" absolute w-full pb-[1%] h-full flex flex-col">
               <div class="relative   pl-[5%] h-[60%] pt-[7%] w-full ">
            
                  <div class="h-full w-full relative">
                   
                        <div v-for="i in length-1" :class="` absolute w-full h-full flex flex-col ${cur===movies2[i].num? ' opacity-[100%]': 'opacity-[0%]' } transition-all duration-200ms`">
                              <label class="text-[150%] mb-[1%] mt-[4%] lg:mt-[0%] capitalize" for="">{{ movies2[i].name }}</label>
                              
                                    <div class="flex flex-row stars text-[50%] mb-[2%]" id="stars">
                                                <div v-for="i in p(movies2[i].rate)[0]"  class=" star  w-[2%] pb-[2%] relative ">
                                                                  <div  :style="c1"  :class="` bg-white w-full h-full absolute `">
                                                                  </div>
                                                </div>
                                                <div v-if="p(movies2[i].rate)[1]!==0"   class=" star w-[2%] bg-transparent    pb-[2%] relative ">
                                           
                                                      <div   :class="` star bg-transparent h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%]   absolute `">
                                                      </div>             
                                                      <div  :style="`width:${p(movies2[i].rate)[1]*10}%`"  :class="` bg-white  h-full absolute `">      
                                                      </div>
                                                </div>
                                    </div>
                            
                              <div class="lg:w-[17%] w-[30%] mb-[2%] flex flex-row text-[110%] justify-between">
                                    <label for="">{{ movies2[i].gen[0] }}</label>
                                    <label for="">{{ movies2[i].gen[1] }}</label>
                                    <label for="">{{ movies2[i].gen[2] }}</label>
                              </div>
                             
                              
                              <button class="lg:w-[9%] md:w-[20%] mb-[2%] py-[.5%] rounded-md bg-c2 text-center">View movie</button>

                              <div class="w-[40%] relative "> 
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti temporibus similique cupiditate maiores dolorem, nulla sunt quam dolorum alias, vero natus. Id iste veritatis molestias accusantium laudantium. At, ad.
                                   <div class="opacity-[30%]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti temporibus similique cupiditate maiores dolorem, nulla sunt quam dolorum  </div>
                        
                              </div>
                        </div>
                   
                        <div :class="` absolute w-full h-full flex flex-col ${cur===movies2[0].num? ' opacity-[100%]': 'opacity-[0%]' } transition-all duration-200ms`">
                              <label class="text-[150%] mb-[1%] capitalize" for="">{{ movies2[0].name }}</label>
                              
                              <div class="flex flex-row stars text-[50%] mb-[2%]" id="stars">
                                                <div v-for="i in p(movies2[0].rate)[0]"  class=" star  w-[2%] pb-[2%] relative ">
                                                                  <div  :style="c1"  :class="` bg-white w-full h-full absolute `">
                                                                  </div>
                                                </div>
                                                <div v-if="p(movies2[0].rate)[1]!==0"   class=" star w-[2%]    pb-[2%] relative ">
                                               


                                                      <div   :class="` star bg-transparent h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%]   absolute `">
                                                      </div>    
                                                               
                                                      <div  :style="`width:${p(movies2[0].rate)[1]*10}%`"  :class="` bg-white  h-full absolute `">      
                                                      </div>

                                                </div>



                                    </div>
                            
                              <div class="lg:w-[17%] w-[30%] mb-[2%] flex flex-row text-[110%] justify-between">
                                    <label for="">{{ movies2[0].gen[0] }}</label>
                                    <label for="">{{ movies2[0].gen[1] }}</label>
                                    <label for="">{{ movies2[0].gen[2] }}</label>
                              </div>

                              <button class="lg:w-[8%] md:w-[20%] mb-[2%] py-[.5%] rounded-md bg-c2 text-center">View movie</button>

                              <div class="w-[40%] relative "> 
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti temporibus similique cupiditate maiores dolorem, nulla sunt quam dolorum alias, vero natus. Id iste veritatis molestias accusantium laudantium. At, ad.
                                   <div class="opacity-[30%]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti temporibus similique cupiditate maiores dolorem. </div>
                        
                              </div>
                        </div>


                  </div>

               </div>
                   
                   <div :class="`relative translate-x-[${trans}%]   ${t?'transition-all duration-[500ms]':''}    h-[40%] w-full  bg-tranparent`">
               
                   <div @click="click(0)" :class="` cursor-pointer ${cur===movies[0].num ? ' p-[0%] ':'p-[1%]'} ${click_on? 'transition-all duration-200':''}     overflow-hidden absolute w-[15%] translate-x-[-100%] h-full  ${n0?' opacity-[100%] transition-all duration-[500ms] ':' opacity-[0%] '}`">
                        <img :class="` w-full  ${cur===movies[0].num ? '':''} `" :src="movies[0].img" alt="">
                   </div>


                    <div @click="click(1)"  :class="` cursor-pointer  ${cur===movies[1].num ? '  p-[0%]':'p-[1%]'} ${click_on? 'transition-all duration-200':''}  overflow-hidden absolute w-[15%]   translate-x-[27.333%] h-full  ${n1?' opacity-[100%]  ':' opacity-[0%] transition-all duration-[500ms]'}`">
                        <img :class="`w-full  ${cur===movies[1].num ? '':''}  `" :src="movies[1].img" alt="">
                    </div>
                    
                    <div @click="click(2)" :class="` cursor-pointer ${cur===movies[2].num ? ' p-[0%] ':'p-[1%]'}  ${click_on? 'transition-all duration-200':''}   overflow-hidden absolute w-[15%] translate-x-[154.666%] h-full  `">
                          <img :class="`w-full  ${cur===movies[2].num ? ' ':''}`" :src="movies[2].img" alt="">
                    </div>
                    
                    <div @click="click(3)" :class="` cursor-pointer ${cur===movies[3].num ? 'p-[0%] ':'p-[1%]'} ${click_on? 'transition-all duration-200':''}    overflow-hidden absolute w-[15%] translate-x-[281.999%] h-full `">
                        <img :class="`w-full  ${cur===movies[3].num ? '':''} `" :src="movies[3].img" alt="">
                    </div>
                    
                    <div @click="click(4)" :class="` cursor-pointer ${cur===movies[4].num ? ' p-[0%]':'p-[1%]'}  ${click_on? 'transition-all duration-200':''}   overflow-hidden absolute w-[15%] translate-x-[409.332%] h-full `">
                        <img :class="`w-full  ${cur===movies[4].num ? '':''} `" :src="movies[4].img" alt="">
                    </div>

                    <div @click="click(5)" :class="` cursor-pointer ${cur===movies[5].num ? ' p-[0%] ':'p-[1%]'}  ${click_on? 'transition-all duration-200':''}  overflow-hidden absolute w-[15%] translate-x-[536.665%] h-full ${n6?' opacity-[100%]  ':' opacity-[0%] transition-all duration-[500ms]'}`">
                        <img :class="`w-full  ${cur===movies[5].num ? ' ':''} `" :src="movies[5].img" alt="">
                    </div>
 
                    <div @click="click(6)" :class="` cursor-pointer ${cur===movies[6].num ? ' p-[0%]':'p-[1%]'}  ${click_on? 'transition-all duration-200':''}   overflow-hidden absolute w-[15%] translate-x-[663.956%]  h-full ${n7?' opacity-[100%] transition-all duration-[500ms] ':' opacity-[0%] '}`">
                        <img :class="`w-full  ${cur===movies[6].num ? ' ':''} `" :src="movies[6].img" alt="">
                    </div>


                   </div>
                   
                   <div class=" absolute w-[4%]   z-[5] pb-[7%] pl-[.5%] h-full flex flex-row justify-between items-end">
                       
                        <button :disabled="t"   class=" relative shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] disabled:cursor-pointer bg-neutral-800 bg-opacity-80 w-[70%]  pb-[70%] rounded-full" @click="forw()" >
                          <div class=" absolute w-full h-full flex justify-center items-center">
                              <ion-icon class="" name="chevron-back-outline"></ion-icon>
                          </div>    
                        </button>
                                     
                   </div>

                  <div class=" absolute w-[4%] translate-x-[2400%]   z-[5] pb-[7%] pl-[.5%] h-full flex flex-row justify-between items-end">
                       
                       <button :disabled="t"   class=" relative shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] disabled:cursor-pointer bg-neutral-800 bg-opacity-80 w-[70%]  pb-[70%] rounded-full" @click="back()">
                         <div class=" absolute w-full h-full flex justify-center items-center">
                              <ion-icon name="chevron-forward-outline"></ion-icon>
                         </div>    
                       </button>
                                    
                 </div>


         </div>



      </div>
 </div>
 
       

</template>


<style scoped>

.star{
   clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

</style>