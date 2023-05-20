<script setup>

import {ref} from'vue'
import { useRouter } from 'vue-router';

let router = useRouter()
let l = ref(0)

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

let movies = ref([
   {
      name:'inception',
      rate:'8.8',
      img:'https://www.shortlist.com/media/images/2020/05/tenet-inception-1590160214-1Mpm-column-width-inline.jpg',
      id:'tt1375666'  
   },
   {
      name:'dunkirk',
      rate:'7.8',
      img:'https://a.ltrbxd.com/resized/sm/upload/l9/2l/7p/rz/dunkirk-2017-1200-1200-675-675-crop-000000.jpg?v=53e6d125e1',  
      id:'tt5013056'  
   },
   {
      name:'the dark knight rises',
      rate:'8.4',
      img:'https://wallpapercave.com/wp/2n6i1fH.jpg',  
      id:'tt1345836'  
   },
   {
      name:'captain marvel',
      rate:'6.8',
      img:'https://images.tntdrama.com/tnt/$dyna_params/https%3A%2F%2Fi.cdn.tntdrama.com%2Fassets%2Fimages%2F2020%2F12%2FCaptainMarvel-1600x900.jpg',  
      id:'tt4154664'  
   },
])

</script>


<template>

<label class="px-[5%] md:px-[10%] mt-[3rem] mb-[5%] md:mb-[2%] text-[110%]" for="">new releases</label>
 
 <div class=" hidden md:grid  md:grid-cols-4 gap-[5%] px-[5%] md:px-[10%] mb-[10%]">
          
   <div class="col-span-2 row-span-2  hidden md:flex flex-col justify-center text-white  rounded-sm"> 
   
      <RouterLink :to="`/movie/tt6723592`">

            <div @mouseover="l=1" @mouseleave="l=0" class=" cursor-pointer shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] relative pb-[60%]  overflow-hidden group  ">
           


               <div  class=" absolute w-full h-full animate-pulse    bg-slate-700"></div>
               
                   <div  :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://wallpapers.com/images/featured/tu1b44axi1ewo7ya.jpg')] bg-cover bg-center ${l==0||l==1? 'opacity-100':'opacity-0'} transition-all duration-200 `"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://i0.wp.com/3.110.12.117/wp-content/uploads/2021/09/12886A41-BD19-417E-AF6A-1D4B77119F75.jpeg?fit=1200%2C900&ssl=1')] bg-cover bg-center ${l==2? 'opacity-100':'opacity-0'} transition-all duration-200`"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://www.intofilm.org/intofilm-production/3540/scaledcropped/1170x548/resources/3540/dunkirk-silhouette.jpg')] ${l==3?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://media.wired.com/photos/5c82aa18c72573163b816ee7/master/w_2560%2Cc_limit/Culture_CaptainMarvel_Skrulls.jpg')] ${l==5?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://www.nosferadio.dk/wp-content/uploads/2012/07/Dark-Knight-ny.jpg')] ${l==4?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
               
               



                        <div :class="` ${l==0||l==1?'opacity-100':'opacity-0'} transition-all duration-200 absolute  pb-[100%] bg-gray-50    translate-x-[-99.5%] w-full   translate-y-[-96%] ${ !bo? 'group-hover:translate-y-[0%] group-hover:bg-c3':''} transition-all duration-[500ms] `"></div>
                        <div :class="` ${l==0||l==1?'opacity-100':'opacity-0'} transition-all duration-200 absolute  pb-[100%] bg-gray-50  translate-x-[-95%] w-full  translate-y-[-99.5%] ${ !bo? 'group-hover:translate-x-[0%] group-hover:bg-c3':''} transition-all duration-[500ms] `"></div>

                        <div :class="` ${l==0||l==1?'opacity-100':'opacity-0'} transition-all duration-200 absolute pb-[100%] w-full bg-gray-50 translate-x-[99.5%] translate-y-[55.45%] ${ !bo? 'group-hover:translate-y-[0%] group-hover:bg-c3':''} transition-all duration-[500ms]`"></div>
                        <div :class="` ${l==0||l==1?'opacity-100':'opacity-0'} transition-all duration-200 absolute pb-[100%] w-full h-full bg-gray-50 translate-x-[95%] translate-y-[59.3%]  ${ !bo? 'group-hover:translate-x-[0%] group-hover:bg-c3':''} transition-all duration-[500ms]`"></div>

            
            </div>
      </RouterLink>

            <label :class="`${l==0||l==1?'opacity-100':'opacity-0 hidden'} transition-all duration-200 capitalize`" for="">Tenet</label>
            <div :class="` ${l==0||l==1?'opacity-100':'opacity-0 hidden'} transition-all duration-200 `">
               <div class="flex flex-row stars" id="stars">
                            <div v-for="i in p('7.3')[0]"  class=" star  w-[4%] pb-[4%] relative ">
                                            <div  :style="c1"  :class="` bg-[#FF9529] w-full h-full absolute `">
                                              
                                            </div>
                                            

                            </div>
                            <div v-if="p('7.3')[1]!==0"   class=" star w-[4%] bg-[#FF9529]   pb-[4%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:${p('7.3')[1]*10}%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                              
                              </div>

                            </div>
                            <div v-for="i in p('7.3')[2]"   class=" star w-[4%] bg-[#FF9529]   pb-[4%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:0%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                              
                              </div>

                            </div>  
               </div>
            </div>
         
            <label :class="`${l==2?'opacity-100':'opacity-0 hidden'} transition-all duration-200 capitalize `" for="">inception</label>
            <div :class="` ${l==2?'opacity-100':'opacity-0 hidden'} transition-all duration-200 `">
               <div class="flex flex-row stars" id="stars">
                            <div v-for="i in p('8.8')[0]"  class=" star  w-[4%] pb-[4%] relative ">
                                            <div  :style="c1"  :class="` bg-[#FF9529] w-full h-full absolute `">
                                              
                                            </div>
                                            

                            </div>
                            <div v-if="p('8.8')[1]!==0"   class=" star w-[4%] bg-[#FF9529]   pb-[4%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:${p('8.8')[1]*10}%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                              
                              </div>

                            </div>
                            <div v-for="i in p('8.8')[2]"   class=" star w-[4%] bg-[#FF9529]   pb-[4%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:0%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                              
                              </div>

                            </div>  
               </div>
            </div>
         
         
            <label :class="`${l==3?'opacity-100':'opacity-0 hidden'} transition-all duration-200 capitalize `" for="">dunkirk</label>
            <div :class="` ${l==3?'opacity-100':'opacity-0 hidden'} transition-all duration-200 `">
               <div class="flex flex-row stars" id="stars">
                            <div v-for="i in p('7.8')[0]"  class=" star  w-[4%] pb-[4%] relative ">
                                            <div  :style="c1"  :class="` bg-[#FF9529] w-full h-full absolute `">
                                              
                                            </div>
                                            

                            </div>
                            <div v-if="p('7.8')[1]!==0"   class=" star w-[4%] bg-[#FF9529]   pb-[4%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:${p('7.8')[1]*10}%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                              
                              </div>

                            </div>
                            <div v-for="i in p('7.8')[2]"   class=" star w-[4%] bg-[#FF9529]   pb-[4%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:0%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                              
                              </div>

                            </div>  
               </div>
            </div>
        
            <label :class="`${l==4?'opacity-100':'opacity-0 hidden'} transition-all duration-200 capitalize `" for="">the dark knight rises </label>
            <div :class="` ${l==4?'opacity-100':'opacity-0 hidden'} transition-all duration-200 `">
               <div class="flex flex-row stars" id="stars">
                            <div v-for="i in p('8.4')[0]"  class=" star  w-[4%] pb-[4%] relative ">
                                            <div  :style="c1"  :class="` bg-[#FF9529] w-full h-full absolute `">
                                              
                                            </div>
                                            

                            </div>
                            <div v-if="p('8.4')[1]!==0"   class=" star w-[4%] bg-[#FF9529]   pb-[4%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:${p('8.4')[1]*10}%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                              
                              </div>

                            </div>
                            <div v-for="i in p('8.4')[2]"   class=" star w-[4%] bg-[#FF9529]   pb-[4%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:0%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                              
                              </div>

                            </div>  
               </div>            
            </div>
      
            <label :class="`${l==5?'opacity-100':'opacity-0 hidden'} transition-all duration-200 capitalize `" for="">captain marvel</label>
            <div :class="` ${l==5?'opacity-100':'opacity-0 hidden'} transition-all duration-200 `">
               <div class="flex flex-row stars" id="stars">
                            <div v-for="i in p('6.8')[0]"  class=" star  w-[4%] pb-[4%] relative ">
                                            <div  :style="c1"  :class="` bg-[#FF9529] w-full h-full absolute `">
                                              
                                            </div>
                                            

                            </div>
                            <div v-if="p('6.8')[1]!==0"   class=" star w-[4%] bg-[#FF9529]   pb-[4%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:${p('8.4')[1]*10}%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                              
                              </div>

                            </div>
                            <div v-for="i in p('6.8')[2]"   class=" star w-[4%] bg-[#FF9529]   pb-[4%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:0%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                              
                              </div>

                            </div>  
               </div>
            </div>
         
         

   </div>
    
         <div>
         <RouterLink :to="`/movie/${movies[0].id}`">
                  <div @mouseover="l=2" @mouseleave="l=0" class=" lazy cursor-pointer shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] overflow-hidden group relative pb-[60%] rounded-sm ">
                     <div  class=" absolute w-full h-full animate-pulse    bg-slate-700"></div>
                     
                     <div :class="`  absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://www.shortlist.com/media/images/2020/05/tenet-inception-1590160214-1Mpm-column-width-inline.jpg')] ${l==0||l==2?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
                     <div :class="`  absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://variety.com/wp-content/uploads/2020/04/tenet-nolan.jpg')] bg-cover bg-center ${l==1?'opacity-100':'opacity-0'} transition-all duration-200 `"></div>
                     <div :class="`  absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://i.pinimg.com/736x/58/3d/7c/583d7c00d9192c47256f61abb247a7d1.jpg')] ${l==3?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
                     <div :class="`  absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2019/03/13132847/CM-CONTROL-IT-540x305.png')] ${l==5?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
                     <div :class="`  absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://d1nslcd7m2225b.cloudfront.net/Pictures/1024x536/4/9/7/1156497_dark-knight-rises.jpg')] ${l==4?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>


                              <div :class="` ${l==0||l==2?'opacity-100':'opacity-0'} transition-all duration-200 absolute  pb-[100%] bg-gray-50  translate-x-[-99%] w-full  translate-y-[-90%] ${ !bo? 'group-hover:translate-y-[0%] group-hover:bg-c3':''} transition-all duration-[500ms] `"></div>
                              <div :class="` ${l==0||l==2?'opacity-100':'opacity-0'} transition-all duration-200 absolute  pb-[100%] bg-gray-50  translate-x-[-90.5%] w-full  translate-y-[-98.5%] ${ !bo? 'group-hover:translate-x-[0%] group-hover:bg-c3':''} transition-all duration-[500ms] `"></div>

                              <div :class="` ${l==0||l==2?'opacity-100':'opacity-0'} transition-all duration-200 absolute pb-[100%] w-full bg-gray-50 translate-x-[99%] translate-y-[51.45%] ${ !bo? 'group-hover:translate-y-[0%] group-hover:bg-c3':''} transition-all duration-[500ms]`"></div>
                              <div :class="` ${l==0||l==2?'opacity-100':'opacity-0'} transition-all duration-200 absolute pb-[100%] w-full bg-gray-50 translate-x-[91%] translate-y-[58.45%] ${ !bo? 'group-hover:translate-x-[0%] group-hover:bg-c3':''} transition-all duration-[500ms]`"></div>



                  </div>
            </RouterLink>

            <label :class="`${l==0?'opacity-100':'opacity-0'} transition-all duration-200`" for="">inception</label>
            <div :class="` ${l==0?'opacity-100':'opacity-0'} transition-all duration-200 `">
               <div class="flex flex-row stars" id="stars">
                            <div v-for="i in p('8.8')[0]"  class=" star  w-[5%] pb-[5%] relative ">
                                            <div  :style="c1"  :class="` bg-[#FF9529] w-full h-full absolute `">
                                              
                                            </div>
                                            

                            </div>
                            <div v-if="p('8.8')[1]!==0"   class=" star w-[5%] bg-[#FF9529]   pb-[5%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:${p('8.8')[1]*10}%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                              
                              </div>

                            </div>
                            <div v-for="i in p('8.8')[2]"   class=" star w-[5%] bg-[#FF9529]   pb-[5%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:0%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                              
                              </div>

                            </div>  
               </div>
            </div>
         </div>

         <div>
         <RouterLink :to="`/movie/${movies[1].id}`">

                  <div @mouseover="l=3" @mouseleave="l=0" class=" cursor-pointer shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  relative pb-[60%] rounded-sm overflow-hidden group ">
                     
                     <div  class=" absolute w-full h-full animate-pulse    bg-slate-700"></div>
                     <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://m.media-amazon.com/images/M/MV5BMTQ1ZmIzOTAtNDcwZi00NDVkLWE4NWItYWNhZGY1MmVlZGU0XkEyXkFqcGdeQWRvb2xpbmhk._V1_QL75_UY281_CR0,0,500,281_.jpg')] ${l==2?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
                     <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://a.ltrbxd.com/resized/sm/upload/l9/2l/7p/rz/dunkirk-2017-1200-1200-675-675-crop-000000.jpg?v=53e6d125e1')] ${l==0||l==3?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
                     <div  :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://www.comingsoon.net/wp-content/uploads/sites/3/2020/07/tenet-runtime.png')] bg-cover bg-center ${l==1? 'opacity-100':'opacity-0'} transition-all duration-200 `"></div>
                     <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://filmschoolrejects.com/wp-content/uploads/2018/09/Screen-Shot-2018-09-18-at-8.59.17-AM.jpg')] ${l==5?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
                     <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://media.wired.com/photos/5932cc78b44176024420ef89/master/w_2560%2Cc_limit/DKR-16679rC.jpg')] ${l==4?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>

                     
               
                              <div :class="` ${l==0||l==3?'opacity-100':'opacity-0'} transition-all duration-200 absolute  pb-[100%] bg-gray-50  translate-x-[-98.5%] w-full  translate-y-[-90%] ${ !bo? 'group-hover:translate-y-[0%] group-hover:bg-c3':''} transition-all duration-[500ms] `"></div>
                              <div :class="` ${l==0||l==3?'opacity-100':'opacity-0'} transition-all duration-200 absolute  pb-[100%] bg-gray-50  translate-x-[-90.5%] w-full  translate-y-[-98.5%] ${ !bo? 'group-hover:translate-x-[0%] group-hover:bg-c3':''} transition-all duration-[500ms] `"></div>

                              <div :class="` ${l==0||l==3?'opacity-100':'opacity-0'} transition-all duration-200 absolute pb-[100%] w-full bg-gray-50 translate-x-[98.5%] translate-y-[51.45%] ${ !bo? 'group-hover:translate-y-[0%] group-hover:bg-c3':''} transition-all duration-[500ms]`"></div>
                              <div :class="` ${l==0||l==3?'opacity-100':'opacity-0'} transition-all duration-200 absolute pb-[100%] w-full bg-gray-50 translate-x-[91%] translate-y-[58.45%] ${ !bo? 'group-hover:translate-x-[0%] group-hover:bg-c3':''} transition-all duration-[500ms]`"></div>




                  </div>
            </RouterLink>

            <label :class="`${l==0?'opacity-100':'opacity-0'} transition-all duration-200`" for="">dunkirk</label>
            <div :class="` ${l==0?'opacity-100':'opacity-0'} transition-all duration-200 `">
               <div class="flex flex-row stars" id="stars">
                            <div v-for="i in p('7.8')[0]"  class=" star  w-[5%] pb-[5%] relative ">
                                            <div  :style="c1"  :class="` bg-[#FF9529] w-full h-full absolute `">
                                              
                                            </div>
                                            

                            </div>
                            <div v-if="p('7.8')[1]!==0"   class=" star w-[5%] bg-[#FF9529]   pb-[5%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:${p('7.8')[1]*10}%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                              
                              </div>

                            </div>
                            <div v-for="i in p('7.8')[2]"   class=" star w-[5%] bg-[#FF9529]   pb-[5%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:0%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                              
                              </div>

                            </div>  
               </div>
            </div>
         </div>

         <div>
         <RouterLink :to="`/movie/${movies[2].id}`">
                  <div @mouseover="l=4" @mouseleave="l=0" class=" cursor-pointer shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] relative pb-[60%] rounded-sm overflow-hidden group ">
                     <div  class=" absolute w-full h-full animate-pulse    bg-slate-700"></div>
            
                     <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://occ-0-3212-1556.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABTQceVXkUtOVq09hGZKukC2eTTjKWR0D4fARc75i3nQFrXuqaTaCSy-2sAMuWssoJyo2UbOT8sR-VV3Kd-ksn-todO7WvYMR7hdc.jpg?r=d8c')] ${l==2?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
                     <div  :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://dotcomstories.com/wp-content/uploads/2022/08/intro-1641936881.png')] bg-cover bg-center ${l==1? 'opacity-100':'opacity-0'} transition-all duration-200 `"></div>
                     <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://media.vanityfair.com/photos/5970bc5eb5f53c646c2de9c2/16:9/w_1280,c_limit/dunkirk-movie-review.jpg')] ${l==3?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
                     <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://ftw.usatoday.com/wp-content/uploads/sites/90/2019/03/ap-film-review-captain-marvel.jpg?w=1000&h=600&crop=1')] ${l==5?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
                     <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://wallpapercave.com/wp/2n6i1fH.jpg')] ${l==4||l==0?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>


                              <div :class="` ${l==0||l==4?'opacity-100':'opacity-0'} transition-all duration-200 absolute  pb-[100%] bg-gray-50  translate-x-[-99%] w-full  translate-y-[-90%] ${ !bo? 'group-hover:translate-y-[0%] group-hover:bg-c3':''} transition-all duration-[500ms] `"></div>
                              <div :class="` ${l==0||l==4?'opacity-100':'opacity-0'} transition-all duration-200 absolute  pb-[100%] bg-gray-50  translate-x-[-90.5%] w-full  translate-y-[-98.5%] ${ !bo? 'group-hover:translate-x-[0%] group-hover:bg-c3':''} transition-all duration-[500ms] `"></div>

                              <div :class="` ${l==0||l==4?'opacity-100':'opacity-0'} transition-all duration-200 absolute pb-[100%] w-full bg-gray-50 translate-x-[99%] translate-y-[51.45%] ${ !bo? 'group-hover:translate-y-[0%] group-hover:bg-c3':''} transition-all duration-[500ms]`"></div>
                              <div :class="` ${l==0||l==4?'opacity-100':'opacity-0'} transition-all duration-200 absolute pb-[100%] w-full bg-gray-50 translate-x-[91%] translate-y-[58.85%] ${ !bo? 'group-hover:translate-x-[0%] group-hover:bg-c3':''} transition-all duration-[500ms]`"></div>



            
                  </div>
            </RouterLink>
            <label :class="`${l==0?'opacity-100':'opacity-0'} transition-all duration-200 truncate`" for="">the dark knight rises</label>
            <div :class="` ${l==0?'opacity-100':'opacity-0'} transition-all duration-200 `">
               <div class="flex flex-row stars" id="stars">
                            <div v-for="i in p('8.4')[0]"  class=" star  w-[5%] pb-[5%] relative ">
                                            <div  :style="c1"  :class="` bg-[#FF9529] w-full h-full absolute `">
                                              
                                            </div>
                                            

                            </div>
                            <div v-if="p('8.4')[1]!==0"   class=" star w-[5%] bg-[#FF9529]   pb-[5%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:${p('8.4')[1]*10}%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                              
                              </div>

                            </div>
                            <div v-for="i in p('8.4')[2]"   class=" star w-[5%] bg-[#FF9529]   pb-[5%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:0%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                              
                              </div>

                            </div>  
               </div>             
            </div>
         </div>

         <div>
            <RouterLink :to="`/movie/${movies[3].id}`">
            <div @mouseover="l=5" @mouseleave="l=0" class=" cursor-pointer shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] relative pb-[60%] rounded-sm overflow-hidden group ">
               <div  class=" absolute w-full h-full animate-pulse    bg-slate-700"></div>
        
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://images.tntdrama.com/tnt/$dyna_params/https%3A%2F%2Fi.cdn.tntdrama.com%2Fassets%2Fimages%2F2020%2F12%2FCaptainMarvel-1600x900.jpg')] ${l==5||l==0?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://lawliberty.org/app/uploads/2020/06/Inception-1060x530.jpg')] ${l==2?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
               <div  :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://images.bauerhosting.com/legacy/media/5dfb/ae3c/fd67/708a/06d1/f191/tenet-trailer.jpg?q=80&auto=format&w=850&ar=16:9&fit=crop&crop=top')] bg-cover bg-center ${l==1? 'opacity-100':'opacity-0'} transition-all duration-200 `"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://c4.wallpaperflare.com/wallpaper/781/824/857/dunkirk-movies-aircraft-fire-wallpaper-preview.jpg')] ${l==3?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>
               <div :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://www.legendary.com/wp-content/uploads/2015/04/film_darkknightrises_1600x900_gallery_9-1.jpg')]  ${l==4?'opacity-100':'opacity-0'} transition-all duration-200 bg-cover bg-center`"></div>




                        <div :class="` ${l==0||l==5?'opacity-100':'opacity-0'} transition-all duration-200 absolute  pb-[100%] bg-gray-50  translate-x-[-98.5%] w-full  translate-y-[-90%] ${ !bo? 'group-hover:translate-y-[0%] group-hover:bg-c3':''} transition-all duration-[500ms] `"></div>
                        <div :class="` ${l==0||l==5?'opacity-100':'opacity-0'} transition-all duration-200 absolute  pb-[100%] bg-gray-50  translate-x-[-90.5%] w-full  translate-y-[-98.5%] ${ !bo? 'group-hover:translate-x-[0%] group-hover:bg-c3':''} transition-all duration-[500ms] `"></div>

                        <div :class="` ${l==0||l==5?'opacity-100':'opacity-0'} transition-all duration-200 absolute pb-[100%] w-full bg-gray-50 translate-x-[98.5%] translate-y-[51.45%] ${ !bo? 'group-hover:translate-y-[0%] group-hover:bg-c3':''} transition-all duration-[500ms]`"></div>
                        <div :class="` ${l==0||l==5?'opacity-100':'opacity-0'} transition-all duration-200 absolute pb-[100%] w-full bg-gray-50 translate-x-[91%] translate-y-[58.45%] ${ !bo? 'group-hover:translate-x-[0%] group-hover:bg-c3':''} transition-all duration-[500ms]`"></div>




            </div>
         </RouterLink>
            <label :class="`${l==0?'opacity-100':'opacity-0'} transition-all duration-200`" for="">captain marvel</label>
            <div :class="` ${l==0?'opacity-100':'opacity-0'} transition-all duration-200 `">
               <div class="flex flex-row stars" id="stars">
                            <div v-for="i in p('6.8')[0]"  class=" star  w-[5%] pb-[5%] relative ">
                                            <div  :style="c1"  :class="` bg-[#FF9529] w-full h-full absolute `">
                                              
                                            </div>
                                            

                            </div>
                            <div v-if="p('8.4')[1]!==0"   class=" star w-[5%] bg-[#FF9529]   pb-[5%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:${p('6.8')[1]*10}%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                              
                              </div>

                            </div>
                            <div v-for="i in p('6.8')[2]"   class=" star w-[5%] bg-[#FF9529]   pb-[5%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:0%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                              
                              </div>

                            </div>  
               </div>
            </div>
         </div>
       
 </div>



 <div class="md:hidden grid grid-cols-2 px-[5%] gap-[4%] pb-[20%]">

         <RouterLink :to="`/movie/tt6723592`" class="col-span-2 row-span-2  md:flex flex-col justify-center  rounded-sm"> 
                  <div  class=" relative pb-[60%]  overflow-hidden group  ">
                     <div  class=" absolute w-full h-full animate-pulse    bg-slate-700"></div>
                     
                     <div  :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://wallpapers.com/images/featured/tu1b44axi1ewo7ya.jpg')] bg-cover bg-center  transition-all duration-200 `"></div>
                     
                           </div>
                  <label :class="` transition-all duration-200 capitalize `" for="">Tenet</label>
                  <div :class="`  transition-all duration-200`">
                     <div class="flex flex-row stars" id="stars">
                                 <div v-for="i in p('7.3')[0]"  class=" star  w-[5%] pb-[5%] relative ">
                                                <div  :style="c1"  :class="` bg-[#FF9529] w-full h-full absolute `">
                                                   
                                                </div>
                                                

                                 </div>
                                 <div v-if="p('7.3')[1]!==0"   class=" star w-[5%] bg-[#FF9529]   pb-[5%] relative ">
                                    <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                           
                                    </div>             
                                    <div  :style="`width:${p('7.3')[1]*10}%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                                   
                                    </div>

                                 </div>
                                 <div v-for="i in p('7.3')[2]"   class=" star w-[5%] bg-[#FF9529]   pb-[5%] relative ">
                                    <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                           
                                    </div>             
                                    <div  :style="`width:0%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                                   
                                    </div>

                                 </div>  
                     </div>
                  </div>

               

         </RouterLink>
         


         <div v-for="i in movies">
          
            <RouterLink :to="`/movie/${i.id}`">
               <div class=" overflow-hidden group relative pb-[60%] rounded-sm ">
               
                  <div  class=" absolute w-full h-full animate-pulse    bg-slate-700"></div>
                  
                  <div :style="` background-image:url(${i.img})`" :class="` absolute w-full h-full rounded-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]   transition-all duration-200 bg-cover bg-center`"></div>
               
               </div>
            </RouterLink>   
               
            <label :class="` transition-all duration-200 capitalize`" for="">{{i.name}}</label>
            <div :class="`  transition-all duration-200 `">
               <div class="flex flex-row stars" id="stars">
                            <div v-for="i in p(i.rate)[0]"  class=" star  w-[5%] pb-[5%] relative ">
                                            <div  :style="c1"  :class="` bg-[#FF9529] w-full h-full absolute `">
                                              
                                            </div>
                                            

                            </div>
                            <div v-if="p(i.rate)[1]!==0"   class=" star w-[5%] bg-[#FF9529]   pb-[5%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:${p(i.rate)[1]*10}%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                              
                              </div>

                            </div>

                            <div v-for="i in p(i.rate)[2]"   class=" star w-[5%] bg-[#FF9529]   pb-[5%] relative ">
                              <div   :class="` star bg-c1 h-[93%] w-[93%] translate-x-[3.75%] translate-y-[3.75%] transparent  absolute `">
                     
                              </div>             
                              <div  :style="`width:0%`"  :class="` bg-[#FF9529]  h-full absolute `">
                                              
                              </div>

                            </div>                               
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