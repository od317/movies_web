<script setup>

import {ref} from 'vue'
import slide_sm from '../components/movies/movies_slide_sm.vue'
import slide_sm2 from '../components/movies/movies_slide_sm2.vue'
import grid_lg from '../components/movies/grid_lg.vue'
import p_slide from '../components/movies/p_slide.vue'

let started = ref(false)
let sss = setTimeout(()=>{
   started.value=true
},500)

let t1 = 'populer on laith'
let f1 = [{
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtVRdpi5itYx8uUSTttB789qYmVeAABEpMA&usqp=CAU',
  },{
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtVRdpi5itYx8uUSTttB789qYmVeAABEpMA&usqp=CAU',
  },{
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtVRdpi5itYx8uUSTttB789qYmVeAABEpMA&usqp=CAU',
  },{
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtVRdpi5itYx8uUSTttB789qYmVeAABEpMA&usqp=CAU',
  },{
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtVRdpi5itYx8uUSTttB789qYmVeAABEpMA&usqp=CAU',
  }]

  let f2 = [{
    img:'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
  },{
    img:'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
  },{
    img:'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
  },{
    img:'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
  },{
    img:'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
  }]

let g1 = [
    {
       img:'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
       title:'movie'   
    },
    {
       img:'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
       title:'movie'   
    },
    {
       img:'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
       title:'movie'   
    },
    {
       img:'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
       title:'movie'   
    },
    {
       img:'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
       title:'movie'   
    },
    {
       img:'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
       title:'movie'   
    },
    {
       img:'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
       title:'movie'   
    },
    {
       img:'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
       title:'movie'   
    },
    {
       img:'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
       title:'movie',
       class:'hidden lg:block'   
    },
    {
       img:'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
       title:'movie',
       class:'hidden lg:block'   
    },
    {
       img:'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
       title:'movie',
       class:'hidden lg:block'   
    },
    {
       img:'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
       title:'movie',
       class:'hidden lg:block'   
    },
]

let tr1 = ref(false)
let tr2 = ref(false)


window.scrollTo({top:0})

</script>

<template>

    
       <p_slide/>
       <div  class="  md:bg-neutral-900 md:hidden md:pt-[7%] lg:pt-[6%] grid grid-cols-3 md:grid-cols-5 h-auto pb-[15%] lg:pb-[17%] md:pb-[20%]  lg:grid-cols-6 gap-[1%] px-[1%] md:px-[5%]">
                         <div  :class="` relative bg-[url('https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg')] 
                         rounded-sm bg-center  bg-cover  transition-all duration-500
                            ${started ? 'md:opacity-100 md:hover:translate-y-[-3%] cursor-pointer':'md:opacity-0'} 
                            h-[150%] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] group`">
                           <div class="hidden absolute md:flex items-center justify-center w-[100%] h-[100%] ">
                            <div class="  w-[100%] h-[100%] bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 bg-neutral-900  absolute"></div>
                            <div class=" w-[100%] h-[0%] hidden group-hover:flex items-center justify-center font-bold absolute">movie</div>
                            </div>
                            <img class="opacity-0" src="https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg" alt="">

                        </div>
                         <div :class="`relative group bg-[url('https://m.media-amazon.com/images/M/MV5BZWY3ODE1NDctMGE3OS00ODQxLWFjNDktMGViMTA3YTExYmI3XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg')] rounded-sm bg-center bg-cover h-[150%] md:translate-y-[5%] md:transition-all md:duration-500 ${started ? 'md:opacity-100 md:hover:translate-y-[-3%] cursor-pointer':'md:opacity-0'} h-[150%] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]`">  <div class="hidden absolute md:flex items-center justify-center w-[100%] h-[100%] ">
                           <div class="  w-[100%] h-[100%] bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 bg-neutral-900  absolute"></div>
                            <div class=" w-[100%] h-[0%] hidden group-hover:flex items-center justify-center font-bold absolute">movie</div>
                            </div></div>
                         <div :class=" `relative group bg-[url('https://filmfare.wwmindia.com/content/2022/jul/thorloveandthunder51657084424.jpg')] rounded-sm bg-center h-[150%] bg-cover md:translate-y-[9%] md:transition-all md:duration-500 ${started ? 'md:opacity-100 md:hover:translate-y-[-3%] cursor-pointer':'md:opacity-0'} h-[150%] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] `">  <div class="hidden absolute md:flex items-center justify-center w-[100%] h-[100%] ">
                           <div class="  w-[100%] h-[100%] bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 bg-neutral-900  absolute"></div>
                            <div class=" w-[100%] h-[0%] hidden group-hover:flex items-center justify-center font-bold absolute">movie</div>
                            </div></div>
                         <div :class="`relative group hidden md:inline-block bg-[url('https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_FMjpg_UX1000_.jpg')] rounded-sm bg-center  bg-cover h-[150%] translate-y-[2%] transition-all duration-500 ${started ? 'md:opacity-100 md:hover:translate-y-[-3%] cursor-pointer':'md:opacity-0'} h-[150%] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] `">
                            <div class="hidden absolute md:flex items-center justify-center w-[100%] h-[100%] ">
                              <div class="  w-[100%] h-[100%] bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 bg-neutral-900  absolute"></div>
                            <div class=" w-[100%] h-[0%] hidden group-hover:flex items-center justify-center font-bold absolute">movie</div>
                            </div>
                            <img class="opacity-0" src="https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg" alt="">
                         </div>
                         <div :class="`hidden group relative md:inline-block bg-[url('https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_FMjpg_UX1000_.jpg')] rounded-sm bg-center bg-cover h-[150%] translate-y-[10%] transition-all duration-500 ${started ? 'md:opacity-100 md:hover:translate-y-[-3%] cursor-pointer':'md:opacity-0'} h-[150%] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]`">
                            <div class="hidden absolute md:flex items-center justify-center w-[100%] h-[100%] ">
                              <div class="  w-[100%] h-[100%] bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 bg-neutral-900  absolute"></div>
                            <div class=" w-[100%] h-[0%] hidden group-hover:flex items-center justify-center font-bold absolute">movie</div>
                            </div></div>
                         <div :class="`hidden group relative lg:inline-block bg-[url('https://wallpaperaccess.com/full/6381170.jpg')] rounded-sm bg-center  bg-cover h-[150%] transition-all duration-500 ${started ? 'md:opacity-100 md:hover:translate-y-[-3%] cursor-pointer':'md:opacity-0'} h-[150%] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]`">
                            <div class="hidden absolute md:flex items-center justify-center w-[100%] h-[100%] ">
                              <div class="  w-[100%] h-[100%] bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 bg-neutral-900  absolute"></div>
                            <div class=" w-[100%] h-[0%] hidden group-hover:flex items-center justify-center font-bold absolute">movie</div>
                            </div></div>
                
       </div>

      <movie_of/>


      <div class="    md:px-[10%] ">

        
            <div  class="md:hidden">
                <slide_sm2  :type="t1" :films="g1"/>
            </div>

            <div  class="hidden md:block">
                <grid_lg :grid="g1"/>
            </div>



            <label  class="mt-[20%] md:mt-[5%] mx-[2%] md:mx-[0] text-[150%] md:hidden " for="">Most Watched movie:</label>
            <div v-motion-slide-visible-once-left class=" relative backdrop-blur-md  md:hidden md:mx-[0] mx-[2%] mt-[2%] text-[100%] ">
            <div class=" relative pb-[70%] z-[5] md:pb-[45%] ">
            <div  class="rounded-sm absolute bg-[url('https://api.time.com/wp-content/uploads/2018/12/spider-man-spider-woman.jpg')] bg-cover bg-center bg-no-repeat  p-0
              w-full h-full z-[5]"></div>
             <div class="md:hidden z-[6] absolute bg-zinc-800 bg-opacity-40 h-full w-full "></div>             
            </div>
             <div class=" absolute hidden z-[10] md:flex flex-col items-end justify-center  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] backdrop-blur-md bg-white/30 translate-y-[-100%] h-[40%] w-full  text-[100%] c2">
                  <div class=" h-full flex items-start gap-[5%] justify-center flex-col w-[25%] lg:w-[20%] ">
                  <label class=" text-[100%]  flex items-start justify-start text-center" for="">SPIDER MAN ..</label>
                  <label class="text-start flex justify-start items-start" for="">
                     <ion-icon name="star-outline"></ion-icon>
                     <ion-icon name="star-outline"></ion-icon>
                     <ion-icon name="star-outline"></ion-icon>
                     <ion-icon name="star-outline"></ion-icon>
                     <ion-icon name="star-outline"></ion-icon>
                  </label>
               <button class="bg-c2 p-[2%] rounded">view movie</button>
               </div>
            </div>
            <div class=" z-[10] font-bold absolute md:hidden translate-y-[-100%] h-full flex flex-col justify-end pb-[2%] px-[3%]">
               <label class="text-[120%] w-[80%] mb-[5%]" for="">Spider man into the spide verse</label>
               <label class="text-start flex justify-start items-start text-[120%]" for="">
                     <ion-icon name="star-outline"></ion-icon>
                     <ion-icon name="star-outline"></ion-icon>
                     <ion-icon name="star-outline"></ion-icon>
                     <ion-icon name="star-outline"></ion-icon>
                     <ion-icon name="star-outline"></ion-icon>
                  </label>
               <button class=" w-[20%] text-[110%] text-center bg-c2 p-[2%] mt-[5%] text-white  inline-block ">view</button>   
            </div>


            </div>

       <div  class="  md:bg-neutral-900 hidden md:pt-[7%] lg:pt-[6%] md:grid grid-cols-3 md:grid-cols-5 h-auto pb-[15%] lg:pb-[17%] md:pb-[20%]  lg:grid-cols-6 gap-[1%] px-[1%] md:px-[5%]">
                         <div  :class="` relative bg-[url('https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg')] 
                         rounded-sm bg-center  bg-cover  transition-all duration-500
                            ${started ? 'md:opacity-100 md:hover:translate-y-[-3%] cursor-pointer':'md:opacity-0'} 
                            h-[150%] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] group`">
                           <div class="hidden absolute md:flex items-center justify-center w-[100%] h-[100%] ">
                            <div class="  w-[100%] h-[100%] bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 bg-neutral-900  absolute"></div>
                            <div class=" w-[100%] h-[0%] hidden group-hover:flex items-center justify-center font-bold absolute">movie</div>
                            </div>
                            <img class="opacity-0" src="https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg" alt="">

                        </div>
                         <div :class="`relative group bg-[url('https://m.media-amazon.com/images/M/MV5BZWY3ODE1NDctMGE3OS00ODQxLWFjNDktMGViMTA3YTExYmI3XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg')] rounded-sm bg-center bg-cover h-[150%] md:translate-y-[5%] md:transition-all md:duration-500 ${started ? 'md:opacity-100 md:hover:translate-y-[-3%] cursor-pointer':'md:opacity-0'} h-[150%] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]`">  <div class="hidden absolute md:flex items-center justify-center w-[100%] h-[100%] ">
                           <div class="  w-[100%] h-[100%] bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 bg-neutral-900  absolute"></div>
                            <div class=" w-[100%] h-[0%] hidden group-hover:flex items-center justify-center font-bold absolute">movie</div>
                            </div></div>
                         <div :class=" `relative group bg-[url('https://filmfare.wwmindia.com/content/2022/jul/thorloveandthunder51657084424.jpg')] rounded-sm bg-center h-[150%] bg-cover md:translate-y-[9%] md:transition-all md:duration-500 ${started ? 'md:opacity-100 md:hover:translate-y-[-3%] cursor-pointer':'md:opacity-0'} h-[150%] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] `">  <div class="hidden absolute md:flex items-center justify-center w-[100%] h-[100%] ">
                           <div class="  w-[100%] h-[100%] bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 bg-neutral-900  absolute"></div>
                            <div class=" w-[100%] h-[0%] hidden group-hover:flex items-center justify-center font-bold absolute">movie</div>
                            </div></div>
                         <div :class="`relative group hidden md:inline-block bg-[url('https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_FMjpg_UX1000_.jpg')] rounded-sm bg-center  bg-cover h-[150%] translate-y-[2%] transition-all duration-500 ${started ? 'md:opacity-100 md:hover:translate-y-[-3%] cursor-pointer':'md:opacity-0'} h-[150%] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] `">
                            <div class="hidden absolute md:flex items-center justify-center w-[100%] h-[100%] ">
                              <div class="  w-[100%] h-[100%] bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 bg-neutral-900  absolute"></div>
                            <div class=" w-[100%] h-[0%] hidden group-hover:flex items-center justify-center font-bold absolute">movie</div>
                            </div>
                            <img class="opacity-0" src="https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg" alt="">
                         </div>
                         <div :class="`hidden group relative md:inline-block bg-[url('https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_FMjpg_UX1000_.jpg')] rounded-sm bg-center bg-cover h-[150%] translate-y-[10%] transition-all duration-500 ${started ? 'md:opacity-100 md:hover:translate-y-[-3%] cursor-pointer':'md:opacity-0'} h-[150%] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]`">
                            <div class="hidden absolute md:flex items-center justify-center w-[100%] h-[100%] ">
                              <div class="  w-[100%] h-[100%] bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 bg-neutral-900  absolute"></div>
                            <div class=" w-[100%] h-[0%] hidden group-hover:flex items-center justify-center font-bold absolute">movie</div>
                            </div></div>
                         <div :class="`hidden group relative lg:inline-block bg-[url('https://wallpaperaccess.com/full/6381170.jpg')] rounded-sm bg-center  bg-cover h-[150%] transition-all duration-500 ${started ? 'md:opacity-100 md:hover:translate-y-[-3%] cursor-pointer':'md:opacity-0'} h-[150%] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]`">
                            <div class="hidden absolute md:flex items-center justify-center w-[100%] h-[100%] ">
                              <div class="  w-[100%] h-[100%] bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 bg-neutral-900  absolute"></div>
                            <div class=" w-[100%] h-[0%] hidden group-hover:flex items-center justify-center font-bold absolute">movie</div>
                            </div></div>
                
       </div>

            <div  class="hidden md:block mt-[10%] ">
                <grid_lg :grid="g1"/>
            </div>

                    
            <div class="md:hidden ">
                <slide_sm2  :type="t1" :films="g1"/>
            </div>


            <div class="  mt-[9%] md:pb-[2%]  md:pt-[1%]">
            
               <label class="  ml-[1rem] md:ml-[0%] md:mt-[] text-[150%] mb-[5%] md:mb-[2%]" for="">Top New :</label>
                  <div class=" hidden md:flex w-full justify-center items-center">
                  <div v-motion-slide-visible-once-bottom class="  relative  px-[0%] flex flex-row justify-between pb-[5%]   md:w-[95%]">
                     
                     <div class=" cursor-pointer rounded-sm group overflow-hidden shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  relative w-[30%] pb-[45%]  bg-cover bg-center">
                           <div class=" absolute h-[97%] w-[95%]  translate-y-[1.5%] translate-x-[2.5%]  bg-cover bg-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://rare-gallery.com/mocahbig/1375854-the-batman-2022-movie-4k-pc-wallpaper.jpg')]"></div>
                           <div class="  absolute bg-neutral-900 flex items-center justify-center   bg-opacity-[0%] group-hover:bg-opacity-[40%]  transition-all duration-200 z-[1] h-[97%] w-[95%]  translate-y-[1.5%] translate-x-[2.5%]"></div>
                           <div class="  absolute  flex items-center justify-center   opacity-[0%] group-hover:opacity-[100%]  transition-all duration-200 h-[97%] text-white z-[2] w-[95%]  translate-y-[1.5%] translate-x-[2.5%]">BATMAN</div>

                     
                           <div class=" absolute bg-white translate-y-[99.4%] group-hover:translate-x-[198%] transition-all duration-[700ms] w-full h-full "></div>
                           <div class=" absolute bg-white translate-y-[99.4%] translate-x-[-198%] group-hover:translate-x-[0%] transition-all duration-[700ms] w-full h-full "></div>

                           <div class=" absolute bg-white translate-y-[-99.4%] group-hover:translate-x-[-198%] transition-all duration-[700ms] w-full h-full "></div>
                           <div class=" absolute bg-white translate-y-[-99.4%] translate-x-[198%] group-hover:translate-x-[0%] transition-all duration-[700ms] w-full h-full "></div>

                           <div class=" absolute bg-white translate-x-[98.7%] group-hover:translate-y-[-198.4%] transition-all duration-[800ms] w-full h-full "></div>
                           <div class=" absolute bg-white translate-x-[98.7%] translate-y-[198.4%] group-hover:translate-y-[0%] transition-all duration-[800ms] w-full h-full "></div>

                           <div class=" absolute bg-white translate-x-[-98.7%] group-hover:translate-y-[198.4%] transition-all duration-[800ms] w-full h-full "></div>
                           <div class=" absolute bg-white translate-x-[-98.7%] translate-y-[-198.4%] group-hover:translate-y-[0%] transition-all duration-[800ms] w-full h-full "></div>

                        </div>

                     <div class=" cursor-pointer rounded-sm group shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] overflow-hidden relative w-[30%] pb-[45%]  bg-cover bg-center">
                        <div class=" absolute h-[97%] w-[95%]  translate-y-[1.5%] translate-x-[2.5%]  bg-cover bg-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://images.hdqwalls.com/wallpapers/mad-max-fury-road-movie.jpg')]"></div>
                        <div class="  absolute bg-neutral-900 flex items-center justify-center   bg-opacity-[0%] group-hover:bg-opacity-[40%]  transition-all duration-200 z-[1] h-[97%] w-[95%]  translate-y-[1.5%] translate-x-[2.5%]"></div>
                           <div class="  absolute  flex items-center justify-center   opacity-[0%] group-hover:opacity-[100%]  transition-all duration-200 h-[97%] text-white z-[2] w-[95%]  translate-y-[1.5%] translate-x-[2.5%]">MADMAX</div>
                     
                           <div class=" absolute bg-white translate-y-[99.4%] group-hover:translate-x-[198%] transition-all duration-[700ms] w-full h-full "></div>
                           <div class=" absolute bg-white translate-y-[99.4%] translate-x-[-198%] group-hover:translate-x-[0%] transition-all duration-[700ms] w-full h-full "></div>

                           <div class=" absolute bg-white translate-y-[-99.4%] group-hover:translate-x-[-198%] transition-all duration-[700ms] w-full h-full "></div>
                           <div class=" absolute bg-white translate-y-[-99.4%] translate-x-[198%] group-hover:translate-x-[0%] transition-all duration-[700ms] w-full h-full "></div>

                           <div class=" absolute bg-white translate-x-[98.7%] group-hover:translate-y-[-198.4%] transition-all duration-[800ms] w-full h-full "></div>
                           <div class=" absolute bg-white translate-x-[98.7%] translate-y-[198.4%] group-hover:translate-y-[0%] transition-all duration-[800ms] w-full h-full "></div>

                           <div class=" absolute bg-white translate-x-[-98.7%] group-hover:translate-y-[198.4%] transition-all duration-[800ms] w-full h-full "></div>
                           <div class=" absolute bg-white translate-x-[-98.7%] translate-y-[-198.4%] group-hover:translate-y-[0%] transition-all duration-[800ms] w-full h-full "></div>
                     </div>
               
                     <div class=" cursor-pointer rounded-sm group shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] overflow-hidden relative w-[30%] pb-[45%]   bg-cover bg-center">
                        <div class=" absolute h-[97%] w-[95%]  translate-y-[1.5%] translate-x-[2.5%]  bg-cover bg-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://www.themarysue.com/wp-content/uploads/2022/04/Everything-Everywhere-All-At-Once-Michelle-Yeoh-New-Movie-Daniels.jpg?fit=1920%2C1080')]"></div>
                        <div class="  absolute bg-neutral-900 flex items-center justify-center   bg-opacity-[0%] group-hover:bg-opacity-[40%]  transition-all duration-200 z-[1] h-[97%] w-[95%]  translate-y-[1.5%] translate-x-[2.5%]"></div>
                           <div class="  absolute  flex items-center justify-center   opacity-[0%] group-hover:opacity-[100%]  transition-all duration-200 h-[97%] text-white z-[2] w-[95%]  translate-y-[1.5%] translate-x-[2.5%]">MOVIE</div>
                     
                           <div class=" absolute bg-white translate-y-[99.4%] group-hover:translate-x-[198%] transition-all duration-[700ms] w-full h-full "></div>
                           <div class=" absolute bg-white translate-y-[99.4%] translate-x-[-198%] group-hover:translate-x-[0%] transition-all duration-[700ms] w-full h-full "></div>

                           <div class=" absolute bg-white translate-y-[-99.4%] group-hover:translate-x-[-198%] transition-all duration-[700ms] w-full h-full "></div>
                           <div class=" absolute bg-white translate-y-[-99.4%] translate-x-[198%] group-hover:translate-x-[0%] transition-all duration-[700ms] w-full h-full "></div>

                           <div class=" absolute bg-white translate-x-[98.7%] group-hover:translate-y-[-198.4%] transition-all duration-[800ms] w-full h-full "></div>
                           <div class=" absolute bg-white translate-x-[98.7%] translate-y-[198.4%] group-hover:translate-y-[0%] transition-all duration-[800ms] w-full h-full "></div>

                           <div class=" absolute bg-white translate-x-[-98.7%] group-hover:translate-y-[198.4%] transition-all duration-[800ms] w-full h-full "></div>
                           <div class=" absolute bg-white translate-x-[-98.7%] translate-y-[-198.4%] group-hover:translate-y-[0%] transition-all duration-[800ms] w-full h-full "></div>
                     </div>

                  </div>

                  </div>
          
                  <div class=" md:hidden px-[5%] w-full justify-center items-center">
                  <div v-motion-slide-visible-once-bottom class="  relative  px-[0%] flex flex-row justify-between pb-[5%]   ">
                     
                           <div class=" relative w-[45%]  pb-[80%]">
                                <div class=" absolute w-full h-full shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://rare-gallery.com/mocahbig/1375854-the-batman-2022-movie-4k-pc-wallpaper.jpg')] bg-cover bg-center">  </div>
                                <div class="  absolute bg-neutral-900 flex items-center justify-center   bg-opacity-[40%]  transition-all duration-200 z-[1] h-full w-full">Batman</div>

                              </div>

                           <div class=" relative w-[45%]  pb-[80%]">
                                <div class=" absolute w-full h-full shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://rare-gallery.com/mocahbig/1375854-the-batman-2022-movie-4k-pc-wallpaper.jpg')] bg-cover bg-center">  </div>
                                <div class="  absolute bg-neutral-900 flex items-center justify-center   bg-opacity-[40%]  transition-all duration-200 z-[1] h-full w-full">Batman</div>
                        
                              </div>

                  </div>

                  </div>

         </div>
         
         

           <div class="flex flex-col mt-[5%] w-full   px-[5%] md:px-[0%]">
               <label class="mb-[5%] text-[150%]" for="">New Trailiers</label>
             
               <div  class=" overflow-hidden shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] group relative  md:w-[100%] self-center pb-[50%] w-[100%]   mb-[5%] rounded-md">
                  <div class=" absolute w-full flex justify-center items-center h-full  mr-[3%]   bg-black">
                                <div class=" absolute w-16 h-16 border-t-4 border-r-4 animate-spin  rounded-full border-t-white"></div>
                  </div>
                  <iframe v-if="tr1" class="video-y absolute w-full  h-full " :src="``"></iframe>
                  <img  :class="` absolute ${!tr1?'':' translate-x-[100%] opacity-[0%]'} duration-[500ms] transition-all  w-full h-full cursor-pointer rounded-md`" src="https://image.tmdb.org/t/p/original/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg" alt="">
                  <div  @click="tr1=true" :class="` absolute ${!tr1?'':' translate-x-[50%] opacity-[0%]'} duration[500ms] transition-all   cursor-pointer bg-zinc-900 bg-opacity-30 flex justify-center items-center w-full h-full `">
                          <button class=" text-[200%] group-hover:text-[280%] transform-all duration-200 rounded-full relative ">
                               <ion-icon class="" name="play-outline"></ion-icon>
                           </button>      
                        </div>
               </div>

               <div  class=" shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] group relative md:w-[100%] self-center pb-[50%] w-[100%]   mb-[5%] rounded-md">
                  <div class=" absolute w-full h-full animate-pulse mr-[3%]   bg-slate-700"></div>
                  <iframe v-if="tr2" class="video-y absolute w-full  h-full " :src="`https://www.youtube.com/embed/LdOM0x0XDMo`"></iframe>
                  <img v-if="!tr2" class=" absolute w-full h-full cursor-pointer rounded-md" src="https://image.tmdb.org/t/p/original/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg" alt="">
                  <div v-if="!tr2" @click="tr2=true" class=" absolute cursor-pointer bg-zinc-900 bg-opacity-30 flex justify-center items-center w-full h-full ">
                          <button class=" text-[200%] group-hover:text-[280%] transform-all duration-200 rounded-full relative ">
                               <ion-icon class="" name="play-outline"></ion-icon>
                           </button>      
                        </div>
               </div>
            </div>

     </div>
     
</template>

<style scoped>

.c{
   clip-path:polygon(80% 0,100% 100%, 0 80%,0 0);
}

.c2{
   clip-path:polygon(100% 0% , 80% 0%,60% 100%,100% 100%);
}

.c3{
   clip-path:polygon(20% 0%,100% 0% ,80% 100% , 0% 100%);
}


@media screen and (max-width: 1024px){
   .c2{
   clip-path:polygon(100% 0% ,75% 0%,60% 100%,100% 100%);
}
}

@media screen and (max-width: 1024px){
   .c2{
   clip-path:polygon(100% 0% ,75% 0%,60% 100%,100% 100%);
}
}
@media screen and (max-width:768px){
   .c3{
   clip-path:polygon(0% 0%, 100% 0%,100% 100%,0% 100%);
   margin-left: 1rem;
   margin-right: 1rem;
}
}



</style>