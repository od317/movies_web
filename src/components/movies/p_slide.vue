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
img:'https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_FMjpg_UX1000_.jpg',
name:'John Wick Chapter 4',
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
img:'https://m.media-amazon.com/images/M/MV5BMjJmYTNkNmItYjYyZC00MGUxLWJhNWMtZDY4Nzc1MDAwMzU5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
name:'John Wick Chapter 4',
gen:['Action','Action','Action']},
{num:4,
img:'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg',
name:'John Wick Chapter 4',
gen:['Action','Action','Action']},
{num:5,
img:'https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_FMjpg_UX1000_.jpg',
name:'John Wick Chapter 4',
gen:['Action','Action','Action']},
{num:6,
img:'https://m.media-amazon.com/images/M/MV5BOGFkNWUzOWEtNjY0Ny00NGI0LWE5ZDktNGE0MTBkYTM4MjFjXkEyXkFqcGdeQXVyMjQ5NjgwMjA@._V1_FMjpg_UX1000_.jpg',
name:'John Wick Chapter 4',
gen:['Action','Action','Action']}])

let movies2 = ref([
{num:0,
img:'https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_FMjpg_UX1000_.jpg',
name:'John Wick Chapter 4',
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
img:'https://m.media-amazon.com/images/M/MV5BMjJmYTNkNmItYjYyZC00MGUxLWJhNWMtZDY4Nzc1MDAwMzU5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
name:'John Wick Chapter 4',
gen:['Action','Action','Action']},
{num:4,
img:'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg',
name:'John Wick Chapter 4',
gen:['Action','Action','Action']},
{num:5,
img:'https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_FMjpg_UX1000_.jpg',
name:'John Wick Chapter 4',
gen:['Action','Action','Action']},
{num:6,
img:'https://m.media-amazon.com/images/M/MV5BOGFkNWUzOWEtNjY0Ny00NGI0LWE5ZDktNGE0MTBkYTM4MjFjXkEyXkFqcGdeQXVyMjQ5NjgwMjA@._V1_FMjpg_UX1000_.jpg',
name:'John Wick Chapter 4',
gen:['Action','Action','Action']}])


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


</script>


<template>

 <div class=" ">
      <div class="w-full relative overflow-hidden md:pb-[60%] lg:pb-[44%] hidden md:flex flex-col   bg-cover bg-center ">
            
            <div :class="` ${cur===1? ' opacity-[100%]': 'opacity-[0%]' } transition-all duration-200ms absolute w-full h-full bg-[url('https://rare-gallery.com/uploads/posts/979135-Interstellar-movie-movies-astronaut-sea.jpg')] bg-cover bg-center`"></div>
            <div :class="` ${cur===2? ' opacity-[100%]': 'opacity-[0%]' } transition-all duration-200ms absolute w-full h-full bg-[url('https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/john-wick-chapter-4-movie-review-2023/john-wick-chapter-4-movie-review-2023.jpeg')] bg-cover bg-center`"></div>
            

            <div class=" absolute w-full h-full bg-neutral-800 bg-opacity-50"></div>
            
            <div class=" absolute w-full pb-[1%] h-full flex flex-col">
               <div class="relative   pl-[5%] h-[60%] pt-[7%] w-full ">
            
                  <div class="h-full w-full relative">
                   
                        <div v-for="i in length-1" :class="` absolute w-full h-full flex flex-col ${cur===movies2[i].num? ' opacity-[100%]': 'opacity-[0%]' } transition-all duration-200ms`">
                              <label class="text-[150%] mb-[1%]" for="">{{ movies2[i].num }}</label>
                              
                              <div class="flex flex-row text-[150%] mb-[2%]">
                                    <ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon>
                              </div>
                            
                              <div class="lg:w-[20%] w-[30%] mb-[2%] flex flex-row text-[110%] justify-between">
                                    <label for="">{{ movies2[i].gen[0] }}</label>
                                    <label for="">{{ movies2[i].gen[0] }}</label>
                                    <label for="">{{ movies2[i].gen[0] }}</label>
                              </div>

                              <button class="lg:w-[10%] md:w-[20%] mb-[2%] py-[.8%] rounded-md bg-c2 text-center">View movie</button>

                              <div class="w-[40%] relative "> 
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti temporibus similique cupiditate maiores dolorem, nulla sunt quam dolorum alias, vero natus. Id iste veritatis molestias accusantium laudantium. At, ad.
                                   <div class="opacity-[30%]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti temporibus similique cupiditate maiores dolorem, nulla sunt quam dolorum alias, vero natus. Id iste veritatis molestias accusantium laudantium. At, ad. </div>
                        
                              </div>
                        </div>
                   
                   


                  </div>

               </div>
                   
               <div :class="`relative translate-x-[${trans}%]   ${t?'transition-all duration-[500ms]':''}    h-[40%] w-full  bg-tranparent`">
               
                   <div @click="click(0)" :class="`  ${cur===movies[0].num ? ' p-[0%] ':'p-[.5%]'} ${click_on? 'transition-all duration-200':''}    overflow-hidden absolute w-[15%] translate-x-[-100%] h-full  ${n0?' opacity-[100%] transition-all duration-[500ms] ':' opacity-[0%] '}`">
                        <img class="w-full" :src="movies[0].img" alt="">
                  </div>


                    <div @click="click(1)"  :class="`  ${cur===movies[1].num ? '  p-[0%]':'p-[.5%]'} ${click_on? 'transition-all duration-200':''}   overflow-hidden absolute w-[15%]   translate-x-[27.333%] h-full  ${n1?' opacity-[100%]  ':' opacity-[0%] transition-all duration-[500ms]'}`">
                        <img :class="`w-full`" :src="movies[1].img" alt="">
                    </div>
                    
                    <div @click="click(2)" :class="` ${cur===movies[2].num ? ' p-[0%] ':'p-[.5%]'}  ${click_on? 'transition-all duration-200':''}   overflow-hidden absolute w-[15%] translate-x-[154.666%] h-full  `">
                          <img class="w-full" :src="movies[2].img" alt="">
                    </div>
                    
                    <div @click="click(3)" :class="` ${cur===movies[3].num ? 'p-[0%] ':'p-[.5%]'} ${click_on? 'transition-all duration-200':''}    overflow-hidden absolute w-[15%] translate-x-[281.999%] h-full `">
                        <img class="w-full" :src="movies[3].img" alt="">
                    </div>
                    
                    <div @click="click(4)" :class="` ${cur===movies[4].num ? ' p-[0%]':'p-[.5%]'}  ${click_on? 'transition-all duration-200':''}   overflow-hidden absolute w-[15%] translate-x-[409.332%] h-full `">
                        <img class="w-full" :src="movies[4].img" alt="">
                    </div>

                    <div @click="click(5)" :class="` ${cur===movies[5].num ? ' p-[0%] ':'p-[.5%]'}  ${click_on? 'transition-all duration-200':''}  overflow-hidden absolute w-[15%] translate-x-[536.665%] h-full ${n6?' opacity-[100%]  ':' opacity-[0%] transition-all duration-[500ms]'}`">
                        <img class="w-full" :src="movies[5].img" alt="">
                    </div>

                    <div @click="click(6)" :class="` ${cur===movies[6].num ? ' p-[0%]':'p-[.5%]'}  ${click_on? 'transition-all duration-200':''}   overflow-hidden absolute w-[15%] translate-x-[663.956%]  h-full ${n7?' opacity-[100%] transition-all duration-[500ms] ':' opacity-[0%] '}`">
                        <img class="w-full" :src="movies[6].img" alt="">
                    </div>


                   </div>
                   
                   <div class=" absolute w-[4%]   z-[5] pb-[7%] pl-[.5%] h-full flex flex-row justify-between items-end">
                       
                        <button :disabled="t"   class=" relative shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] disabled:cursor-pointer bg-c2 w-[70%]  pb-[70%] rounded-full" @click="back()">
                          <div class=" absolute w-full h-full flex justify-center items-center">
                              <ion-icon class="" name="chevron-back-outline"></ion-icon>
                          </div>    
                        </button>
                                     
                  </div>

                  <div class=" absolute w-[4%] translate-x-[2400%]   z-[5] pb-[7%] pl-[.5%] h-full flex flex-row justify-between items-end">
                       
                       <button :disabled="t"   class=" relative shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] disabled:cursor-pointer bg-c2 w-[70%]  pb-[70%] rounded-full" @click="forw()">
                         <div class=" absolute w-full h-full flex justify-center items-center">
                              <ion-icon name="chevron-forward-outline"></ion-icon>
                         </div>    
                       </button>
                                    
                 </div>


         </div>



      </div>
 </div>
 
 <button :disabled="t"   class=" relative shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] disabled:cursor-pointer bg-c2 w-[2.5%] pb-[2.5%] rounded-full" @click="forw()">
                          <div class=" absolute w-full h-full flex justify-center items-center">
                              <ion-icon name="chevron-forward-outline"></ion-icon>
                          </div>    
                        </button>        

</template>


<style scoped>


</style>