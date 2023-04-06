<script setup>

import {ref} from 'vue'
import slide_sm from '../components/movies/movies_slide_sm.vue'
import slide_sm2 from '../components/movies/movies_slide_sm2.vue'
import grid_lg from '../components/movies/grid_lg.vue'

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

</script>

<template>

                <div  class=" grid grid-cols-3 md:grid-cols-5 h-auto pb-[22%] md:pb-[20%]  lg:grid-cols-6 gap-[1%] px-[1%] md:px-[5%]">
                         <div  :class="` relative bg-[url('https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg')] 
                         rounded-sm bg-center  bg-cover  transition-all duration-500
                            ${started ? 'md:opacity-100 md:hover:translate-y-[-3%] cursor-pointer':'md:opacity-0'} 
                            h-[150%] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] group`">
                           <div class="hidden absolute md:flex items-center justify-center w-[100%] h-[100%] ">
                            <div class="  w-[100%] h-[0%] group-hover:h-[100%] transition-all duration-500 bg-black opacity-50 absolute"></div>
                            <div class=" w-[100%] h-[0%] hidden group-hover:flex items-center justify-center font-bold absolute">movie</div>
                            </div>
                            <img class="opacity-0" src="https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg" alt="">

                        </div>
                         <div :class="`relative group bg-[url('https://m.media-amazon.com/images/M/MV5BZWY3ODE1NDctMGE3OS00ODQxLWFjNDktMGViMTA3YTExYmI3XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg')] rounded-sm bg-center bg-cover h-[150%] md:translate-y-[5%] md:transition-all md:duration-500 ${started ? 'md:opacity-100 md:hover:translate-y-[-3%] cursor-pointer':'md:opacity-0'} h-[150%] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]`">  <div class="hidden absolute md:flex items-center justify-center w-[100%] h-[100%] ">
                            <div class="  w-[100%] h-[0%] group-hover:h-[100%] transition-all duration-500 bg-black opacity-50 absolute"></div>
                            <div class=" w-[100%] h-[0%] hidden group-hover:flex items-center justify-center font-bold absolute">movie</div>
                            </div></div>
                         <div :class=" `relative group bg-[url('https://filmfare.wwmindia.com/content/2022/jul/thorloveandthunder51657084424.jpg')] rounded-sm bg-center h-[150%] bg-cover md:translate-y-[9%] md:transition-all md:duration-500 ${started ? 'md:opacity-100 md:hover:translate-y-[-3%] cursor-pointer':'md:opacity-0'} h-[150%] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] `">  <div class="hidden absolute md:flex items-center justify-center w-[100%] h-[100%] ">
                            <div class="  w-[100%] h-[0%] group-hover:h-[100%] transition-all duration-500 bg-black opacity-50 absolute"></div>
                            <div class=" w-[100%] h-[0%] hidden group-hover:flex items-center justify-center font-bold absolute">movie</div>
                            </div></div>
                         <div :class="`relative group hidden md:inline-block bg-[url('https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_FMjpg_UX1000_.jpg')] rounded-sm bg-center  bg-cover h-[150%] translate-y-[2%] transition-all duration-500 ${started ? 'md:opacity-100 md:hover:translate-y-[-3%] cursor-pointer':'md:opacity-0'} h-[150%] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] `">
                            <div class="hidden absolute md:flex items-center justify-center w-[100%] h-[100%] ">
                            <div class="  w-[100%] h-[0%] group-hover:h-[100%] transition-all duration-500 bg-black opacity-50 absolute"></div>
                            <div class=" w-[100%] h-[0%] hidden group-hover:flex items-center justify-center font-bold absolute">movie</div>
                            </div>
                            <img class="opacity-0" src="https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg" alt="">
                         </div>
                         <div :class="`hidden group relative md:inline-block bg-[url('https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_FMjpg_UX1000_.jpg')] rounded-sm bg-center bg-cover h-[150%] translate-y-[10%] transition-all duration-500 ${started ? 'md:opacity-100 md:hover:translate-y-[-3%] cursor-pointer':'md:opacity-0'} h-[150%] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]`">
                            <div class="hidden absolute md:flex items-center justify-center w-[100%] h-[100%] ">
                            <div class="  w-[100%] h-[0%] group-hover:h-[100%] transition-all duration-500 bg-black opacity-50 absolute"></div>
                            <div class=" w-[100%] h-[0%] hidden group-hover:flex items-center justify-center font-bold absolute">movie</div>
                            </div></div>
                         <div :class="`hidden group relative lg:inline-block bg-[url('https://wallpaperaccess.com/full/6381170.jpg')] rounded-sm bg-center  bg-cover h-[150%] transition-all duration-500 ${started ? 'md:opacity-100 md:hover:translate-y-[-3%] cursor-pointer':'md:opacity-0'} h-[150%] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]`">
                            <div class="hidden absolute md:flex items-center justify-center w-[100%] h-[100%] ">
                            <div class="  w-[100%] h-[0%] group-hover:h-[100%] transition-all duration-500 bg-black opacity-50 absolute"></div>
                            <div class=" w-[100%] h-[0%] hidden group-hover:flex items-center justify-center font-bold absolute">movie</div>
                            </div></div>
                
                        </div>
               

      <div class="    md:px-[10%] ">

        
            <div  class="md:hidden">
                <slide_sm2  :type="t1" :films="g1"/>
            </div>

            <div  class="hidden md:block">
                <grid_lg :grid="g1"/>
            </div>





            <label  class="mt-[20%] md:mt-[5%] mx-[2%] md:mx-[0] text-[150%]" for="">Most Watched movie:</label>
            <div v-motion-slide-visible-once-left class=" relative backdrop-blur-md   md:mx-[0] mx-[2%] mt-[2%]  ">
            <div class=" relative">
            <img src="https://api.time.com/wp-content/uploads/2018/12/spider-man-spider-woman.jpg" class="rounded-sm bg-cover bg-center bg-no-repeat  p-0
             bg-[url('')]  h-full">
             <div class="md:hidden absolute bg-zinc-800 bg-opacity-40 h-full w-full translate-y-[-100%]"></div>
            </div>
             <div class=" absolute hidden md:flex flex-col items-end justify-center  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] backdrop-blur-md bg-white/30 translate-y-[-100%] h-[40%] w-full  text-[100%] c2">
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
            <div class=" absolute md:hidden translate-y-[-100%] h-full flex flex-col justify-end pb-[2%] px-[3%]">
               <label class="text-[115%] mb-[5%]" for="">Spider man into ...</label>
               <label class="text-start flex justify-start items-start" for="">
                     <ion-icon name="star-outline"></ion-icon>
                     <ion-icon name="star-outline"></ion-icon>
                     <ion-icon name="star-outline"></ion-icon>
                     <ion-icon name="star-outline"></ion-icon>
                     <ion-icon name="star-outline"></ion-icon>
                  </label>
               <button class=" w-[50%] bg-c2 p-[2%] mt-[5%] text-white  inline-block text-start">view</button>   
            </div>


            </div>



            <div  class="hidden md:block mt-[10%] ">
                <grid_lg :grid="g1"/>
            </div>

                    
            <div class="md:hidden ">
                <slide_sm2  :type="t1" :films="g1"/>
            </div>


             <div class="flex flex-row items-center justify-center  bg-red-600 mt-[10%] mb-[10%]">
                 <div class=" lg:h-[30rem] md:h-[25rem] h-[16rem] cursor-pointer bg-cover bg-center bg-[url('https://rare-gallery.com/mocahbig/1375854-the-batman-2022-movie-4k-pc-wallpaper.jpg')] w-[100%] md:w-[40%] c3">
                       <div class="w-full group text-white flex items-center justify-center h-full bg-zinc-800 bg-opacity-30">
                                <label class="text-[150%] font-bold group-hover:opacity-[100%] transition-all duration-200 md:opacity-[0%] " for="">batman</label>
                       </div>
                 </div>
                 <div class=" lg:h-[30rem] md:h-[25rem] h-[16rem] cursor-pointer bg-cover bg-center bg-[url('https://rare-gallery.com/mocahbig/1375854-the-batman-2022-movie-4k-pc-wallpaper.jpg')] w-[100%] md:w-[40%] c3">
                       <div class="w-full group text-white flex items-center justify-center h-full bg-zinc-800 bg-opacity-30">
                                <label class="text-[150%] font-bold group-hover:opacity-[100%] transition-all duration-200 md:opacity-[0%] " for="">batman</label>
                       </div>
                 </div>
                 <div class=" lg:h-[30rem] md:h-[25rem] cursor-pointer bg-cover bg-center bg-[url('https://rare-gallery.com/mocahbig/1375854-the-batman-2022-movie-4k-pc-wallpaper.jpg')] hidden md:inline-block md:w-[40%] c3">
                       <div class="w-full group text-white flex items-center justify-center h-full bg-zinc-800 bg-opacity-30">
                                <label class="text-[150%] font-bold group-hover:opacity-[100%] transition-all duration-200 opacity-[0%] " for="">batman</label>
                       </div>
                 </div>

             </div>


     </div>
s
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
@media screen and (max-width: 768x){
   .c3{
   clip-path:polygon(0% 0%,100% 0% ,100% 100%,0% 100%);
}
}
</style>