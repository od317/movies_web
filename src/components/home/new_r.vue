<script setup>

import {ref} from'vue'
import { useRouter } from 'vue-router';

let router = useRouter()
let l = ref(0)

let view = (title)=>{
  router.push(`/movie/${title}`)
}

</script>


<template>

<label class="px-[5%] md:px-[10%] mt-[3rem] mb-[5%] md:mb-[2%] text-[110%]" for="">new releases</label>
 
 <div class=" hidden md:grid  md:grid-cols-4 gap-[5%] px-[5%] md:px-[10%] mb-[10%]">
          
   <div class="col-span-2 row-span-2  hidden md:flex flex-col justify-center  rounded-sm"> 
            <div @mouseover="l=1" @mouseleave="l=0" class="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] relative pb-[60%]  overflow-hidden group  ">
               <div  class=" absolute w-full h-full animate-pulse    bg-slate-700"></div>
               
               <div  :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://wallpapers.com/images/featured/tu1b44axi1ewo7ya.jpg')] bg-cover bg-center ${l==0||l==1? 'opacity-100':'opacity-0'} transition-all duration-200 `"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://www.shortlist.com/media/images/2020/05/tenet-inception-1590160214-1Mpm-column-width-inline.jpg')] bg-cover bg-center ${l==2? 'opacity-100':'opacity-0'} transition-all duration-200`"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://w0.peakpx.com/wallpaper/388/847/HD-wallpaper-nobody-movie.jpg')] ${l==3?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://images.tntdrama.com/tnt/$dyna_params/https%3A%2F%2Fi.cdn.tntdrama.com%2Fassets%2Fimages%2F2020%2F12%2FCaptainMarvel-1600x900.jpg')] ${l==5?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://cdn.mos.cms.futurecdn.net/LSnvRUxYe64Lg7qrMzCGQd.jpg')] ${l==4?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
               
               



                        <div :class="` ${l==0||l==1?'opacity-100':'opacity-0'} transition-all duration-200 absolute  pb-[100%] bg-white  translate-x-[-99.5%] w-full  translate-y-[-96%] ${ !bo? 'group-hover:translate-y-[0%]':''} transition-all duration-[500ms] `"></div>
                        <div :class="` ${l==0||l==1?'opacity-100':'opacity-0'} transition-all duration-200 absolute  pb-[100%] bg-white  translate-x-[-95%] w-full  translate-y-[-99.5%] ${ !bo? 'group-hover:translate-x-[0%]':''} transition-all duration-[500ms] `"></div>

                        <div :class="` ${l==0||l==1?'opacity-100':'opacity-0'} transition-all duration-200 absolute pb-[100%] w-full bg-white translate-x-[99.5%] translate-y-[55.45%] ${ !bo? 'group-hover:translate-y-[0%]':''} transition-all duration-[500ms]`"></div>
                        <div :class="` ${l==0||l==1?'opacity-100':'opacity-0'} transition-all duration-200 absolute pb-[100%] w-full h-full bg-white translate-x-[95%] translate-y-[59.3%]  ${ !bo? 'group-hover:translate-x-[0%]':''} transition-all duration-[500ms]`"></div>

            
                     </div>
            <label :class="`${l==0||l==1?'opacity-100':'opacity-0 hidden'} transition-all duration-200`" for="">movie1</label>
            <div :class="` ${l==0||l==1?'opacity-100':'opacity-0 hidden'} transition-all duration-200 flex flex-row w-full`"><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon></div>
         
            <label :class="`${l==2?'opacity-100':'opacity-0 hidden'} transition-all duration-200`" for="">movie2</label>
            <div :class="` ${l==2?'opacity-100':'opacity-0 hidden'} transition-all duration-200 flex flex-row w-full`"><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon></div>
         
         
            <label :class="`${l==3?'opacity-100':'opacity-0 hidden'} transition-all duration-200`" for="">movie3</label>
            <div :class="` ${l==3?'opacity-100':'opacity-0 hidden'} transition-all duration-200 flex flex-row w-full`"><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon></div>
        
            <label :class="`${l==4?'opacity-100':'opacity-0 hidden'} transition-all duration-200`" for="">movie4</label>
            <div :class="` ${l==4?'opacity-100':'opacity-0 hidden'} transition-all duration-200 flex flex-row w-full`"><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon></div>
      
            <label :class="`${l==5?'opacity-100':'opacity-0 hidden'} transition-all duration-200`" for="">movie5</label>
            <div :class="` ${l==5?'opacity-100':'opacity-0 hidden'} transition-all duration-200 flex flex-row w-full`"><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon></div>
         
         

         </div>
    
         <div>
            <div @mouseover="l=2" @mouseleave="l=0" class=" shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] overflow-hidden group relative pb-[60%] rounded-sm ">
               <div  class=" absolute w-full h-full animate-pulse    bg-slate-700"></div>
               
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://www.shortlist.com/media/images/2020/05/tenet-inception-1590160214-1Mpm-column-width-inline.jpg')] ${l==0||l==2?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://variety.com/wp-content/uploads/2020/04/tenet-nolan.jpg')] bg-cover bg-center ${l==1?'opacity-100':'opacity-0'} transition-all duration-200 `"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://w0.peakpx.com/wallpaper/388/847/HD-wallpaper-nobody-movie.jpg')] ${l==3?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://images.tntdrama.com/tnt/$dyna_params/https%3A%2F%2Fi.cdn.tntdrama.com%2Fassets%2Fimages%2F2020%2F12%2FCaptainMarvel-1600x900.jpg')] ${l==5?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://cdn.mos.cms.futurecdn.net/LSnvRUxYe64Lg7qrMzCGQd.jpg')] ${l==4?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>


                        <div :class="` ${l==0||l==2?'opacity-100':'opacity-0'} transition-all duration-200 absolute  pb-[100%] bg-white  translate-x-[-99%] w-full  translate-y-[-90%] ${ !bo? 'group-hover:translate-y-[0%]':''} transition-all duration-[500ms] `"></div>
                        <div :class="` ${l==0||l==2?'opacity-100':'opacity-0'} transition-all duration-200 absolute  pb-[100%] bg-white  translate-x-[-90.5%] w-full  translate-y-[-98.5%] ${ !bo? 'group-hover:translate-x-[0%]':''} transition-all duration-[500ms] `"></div>

                        <div :class="` ${l==0||l==2?'opacity-100':'opacity-0'} transition-all duration-200 absolute pb-[100%] w-full bg-white translate-x-[99%] translate-y-[51.45%] ${ !bo? 'group-hover:translate-y-[0%]':''} transition-all duration-[500ms]`"></div>
                        <div :class="` ${l==0||l==2?'opacity-100':'opacity-0'} transition-all duration-200 absolute pb-[100%] w-full bg-white translate-x-[91%] translate-y-[58.45%] ${ !bo? 'group-hover:translate-x-[0%]':''} transition-all duration-[500ms]`"></div>



            </div>
            <label :class="`${l==0?'opacity-100':'opacity-0'} transition-all duration-200`" for="">movie</label>
            <div :class="` ${l==0?'opacity-100':'opacity-0'} transition-all duration-200 flex flex-row w-full`"><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon></div>
         </div>

         <div>
            <div @mouseover="l=3" @mouseleave="l=0" class="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  relative pb-[60%] rounded-sm overflow-hidden group ">
               
               <div  class=" absolute w-full h-full animate-pulse    bg-slate-700"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://www.shortlist.com/media/images/2020/05/tenet-inception-1590160214-1Mpm-column-width-inline.jpg')] ${l==2?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://w0.peakpx.com/wallpaper/388/847/HD-wallpaper-nobody-movie.jpg')] ${l==0||l==3?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
               <div  :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://www.comingsoon.net/wp-content/uploads/sites/3/2020/07/tenet-runtime.png')] bg-cover bg-center ${l==1? 'opacity-100':'opacity-0'} transition-all duration-200 `"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://images.tntdrama.com/tnt/$dyna_params/https%3A%2F%2Fi.cdn.tntdrama.com%2Fassets%2Fimages%2F2020%2F12%2FCaptainMarvel-1600x900.jpg')] ${l==5?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://cdn.mos.cms.futurecdn.net/LSnvRUxYe64Lg7qrMzCGQd.jpg')] ${l==4?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>

               
          
                        <div :class="` ${l==0||l==3?'opacity-100':'opacity-0'} transition-all duration-200 absolute  pb-[100%] bg-white  translate-x-[-98.5%] w-full  translate-y-[-90%] ${ !bo? 'group-hover:translate-y-[0%]':''} transition-all duration-[500ms] `"></div>
                        <div :class="` ${l==0||l==3?'opacity-100':'opacity-0'} transition-all duration-200 absolute  pb-[100%] bg-white  translate-x-[-90.5%] w-full  translate-y-[-98.5%] ${ !bo? 'group-hover:translate-x-[0%]':''} transition-all duration-[500ms] `"></div>

                        <div :class="` ${l==0||l==3?'opacity-100':'opacity-0'} transition-all duration-200 absolute pb-[100%] w-full bg-white translate-x-[98.5%] translate-y-[51.45%] ${ !bo? 'group-hover:translate-y-[0%]':''} transition-all duration-[500ms]`"></div>
                        <div :class="` ${l==0||l==3?'opacity-100':'opacity-0'} transition-all duration-200 absolute pb-[100%] w-full bg-white translate-x-[91%] translate-y-[58.45%] ${ !bo? 'group-hover:translate-x-[0%]':''} transition-all duration-[500ms]`"></div>




            </div>
            <label :class="`${l==0?'opacity-100':'opacity-0'} transition-all duration-200`" for="">movie</label>
            <div :class="` ${l==0?'opacity-100':'opacity-0'} transition-all duration-200 flex flex-row w-full`"><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon></div>
         </div>

         <div>
            <div @mouseover="l=4" @mouseleave="l=0" class=" shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] relative pb-[60%] rounded-sm overflow-hidden group ">
               <div  class=" absolute w-full h-full animate-pulse    bg-slate-700"></div>
      
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://www.shortlist.com/media/images/2020/05/tenet-inception-1590160214-1Mpm-column-width-inline.jpg')] ${l==2?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
               <div  :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://dotcomstories.com/wp-content/uploads/2022/08/intro-1641936881.png')] bg-cover bg-center ${l==1? 'opacity-100':'opacity-0'} transition-all duration-200 `"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://w0.peakpx.com/wallpaper/388/847/HD-wallpaper-nobody-movie.jpg')] ${l==3?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://images.tntdrama.com/tnt/$dyna_params/https%3A%2F%2Fi.cdn.tntdrama.com%2Fassets%2Fimages%2F2020%2F12%2FCaptainMarvel-1600x900.jpg')] ${l==5?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://cdn.mos.cms.futurecdn.net/LSnvRUxYe64Lg7qrMzCGQd.jpg')] ${l==4||l==0?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>


                        <div :class="` ${l==0||l==4?'opacity-100':'opacity-0'} transition-all duration-200 absolute  pb-[100%] bg-white  translate-x-[-99%] w-full  translate-y-[-90%] ${ !bo? 'group-hover:translate-y-[0%]':''} transition-all duration-[500ms] `"></div>
                        <div :class="` ${l==0||l==4?'opacity-100':'opacity-0'} transition-all duration-200 absolute  pb-[100%] bg-white  translate-x-[-90.5%] w-full  translate-y-[-98.5%] ${ !bo? 'group-hover:translate-x-[0%]':''} transition-all duration-[500ms] `"></div>

                        <div :class="` ${l==0||l==4?'opacity-100':'opacity-0'} transition-all duration-200 absolute pb-[100%] w-full bg-white translate-x-[99%] translate-y-[51.45%] ${ !bo? 'group-hover:translate-y-[0%]':''} transition-all duration-[500ms]`"></div>
                        <div :class="` ${l==0||l==4?'opacity-100':'opacity-0'} transition-all duration-200 absolute pb-[100%] w-full bg-white translate-x-[91%] translate-y-[58.85%] ${ !bo? 'group-hover:translate-x-[0%]':''} transition-all duration-[500ms]`"></div>



        
            </div>
            <label :class="`${l==0?'opacity-100':'opacity-0'} transition-all duration-200`" for="">movie</label>
            <div :class="` ${l==0?'opacity-100':'opacity-0'} transition-all duration-200 flex flex-row w-full`"><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon></div>
         </div>

         <div>
            <div @mouseover="l=5" @mouseleave="l=0" class=" shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] relative pb-[60%] rounded-sm overflow-hidden group ">
               <div  class=" absolute w-full h-full animate-pulse    bg-slate-700"></div>
        
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://images.tntdrama.com/tnt/$dyna_params/https%3A%2F%2Fi.cdn.tntdrama.com%2Fassets%2Fimages%2F2020%2F12%2FCaptainMarvel-1600x900.jpg')] ${l==5||l==0?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://www.shortlist.com/media/images/2020/05/tenet-inception-1590160214-1Mpm-column-width-inline.jpg')] ${l==2?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
               <div  :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://images.bauerhosting.com/legacy/media/5dfb/ae3c/fd67/708a/06d1/f191/tenet-trailer.jpg?q=80&auto=format&w=850&ar=16:9&fit=crop&crop=top')] bg-cover bg-center ${l==1? 'opacity-100':'opacity-0'} transition-all duration-200 `"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://w0.peakpx.com/wallpaper/388/847/HD-wallpaper-nobody-movie.jpg')] ${l==3?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://cdn.mos.cms.futurecdn.net/LSnvRUxYe64Lg7qrMzCGQd.jpg')] ${l==4?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>




                        <div :class="` ${l==0||l==5?'opacity-100':'opacity-0'} transition-all duration-200 absolute  pb-[100%] bg-white  translate-x-[-98.5%] w-full  translate-y-[-90%] ${ !bo? 'group-hover:translate-y-[0%]':''} transition-all duration-[500ms] `"></div>
                        <div :class="` ${l==0||l==5?'opacity-100':'opacity-0'} transition-all duration-200 absolute  pb-[100%] bg-white  translate-x-[-90.5%] w-full  translate-y-[-98.5%] ${ !bo? 'group-hover:translate-x-[0%]':''} transition-all duration-[500ms] `"></div>

                        <div :class="` ${l==0||l==5?'opacity-100':'opacity-0'} transition-all duration-200 absolute pb-[100%] w-full bg-white translate-x-[98.5%] translate-y-[51.45%] ${ !bo? 'group-hover:translate-y-[0%]':''} transition-all duration-[500ms]`"></div>
                        <div :class="` ${l==0||l==5?'opacity-100':'opacity-0'} transition-all duration-200 absolute pb-[100%] w-full bg-white translate-x-[91%] translate-y-[58.45%] ${ !bo? 'group-hover:translate-x-[0%]':''} transition-all duration-[500ms]`"></div>




            </div>
            <label :class="`${l==0?'opacity-100':'opacity-0'} transition-all duration-200`" for="">movie</label>
            <div :class="` ${l==0?'opacity-100':'opacity-0'} transition-all duration-200 flex flex-row w-full`"><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon></div>
         </div>
       
 </div>



 <div class="md:hidden grid grid-cols-2 px-[5%] gap-[4%] pb-[20%]">

   <div class="col-span-2 row-span-2  md:flex flex-col justify-center  rounded-sm"> 
            <div  class=" relative pb-[60%]  overflow-hidden group  ">
               <div  class=" absolute w-full h-full animate-pulse    bg-slate-700"></div>
               
               <div  :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://wallpapers.com/images/featured/tu1b44axi1ewo7ya.jpg')] bg-cover bg-center  transition-all duration-200 `"></div>
               
                     </div>
            <label :class="` transition-all duration-200`" for="">movie</label>
            <div :class="`  transition-all duration-200 flex flex-row w-full`"><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon></div>

         

         </div>
    
         <div>
            <div class=" overflow-hidden group relative pb-[60%] rounded-sm ">
               <div  class=" absolute w-full h-full animate-pulse    bg-slate-700"></div>
               
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://www.shortlist.com/media/images/2020/05/tenet-inception-1590160214-1Mpm-column-width-inline.jpg')]  transition-all duration-200 bg-cover bg-center`"></div>


  


            </div>
            <label :class="` transition-all duration-200`" for="">movie</label>
            <div :class="`  transition-all duration-200 flex flex-row w-full`"><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon></div>
         </div>

         <div>
            <div  class=" relative pb-[60%] rounded-sm overflow-hidden group ">
               
               <div  class=" absolute w-full h-full animate-pulse    bg-slate-700"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://w0.peakpx.com/wallpaper/388/847/HD-wallpaper-nobody-movie.jpg')]  transition-all duration-200 bg-cover bg-center`"></div>

               




            </div>
            <label :class="` transition-all duration-200`" for="">movie</label>
            <div :class="`  transition-all duration-200 flex flex-row w-full`"><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon></div>
         </div>

         <div>
            <div  class=" relative pb-[60%] rounded-sm overflow-hidden group ">
               <div  class=" absolute w-full h-full animate-pulse    bg-slate-700"></div>
      
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://cdn.mos.cms.futurecdn.net/LSnvRUxYe64Lg7qrMzCGQd.jpg')]  transition-all duration-200 bg-cover bg-center`"></div>


   

        
            </div>
            <label :class="` transition-all duration-200`" for="">movie</label>
            <div :class="`  transition-all duration-200 flex flex-row w-full`"><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon></div>
         </div>

         <div>
            <div  class=" relative pb-[60%] rounded-sm overflow-hidden group ">
               <div  class=" absolute w-full h-full animate-pulse    bg-slate-700"></div>
        
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://images.tntdrama.com/tnt/$dyna_params/https%3A%2F%2Fi.cdn.tntdrama.com%2Fassets%2Fimages%2F2020%2F12%2FCaptainMarvel-1600x900.jpg')]  transition-all duration-200 bg-cover bg-center`"></div>


                   


            </div>
            <label :class="` transition-all duration-200`" for="">movie</label>
            <div :class="`  transition-all duration-200 flex flex-row w-full`"><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon></div>
         </div>

 </div>

    
</template>