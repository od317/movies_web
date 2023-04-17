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

let tr1 = ref(false)
let tr2 = ref(false)


window.scrollTo({top:0})

</script>

<template>

   <!-- large header --> 
         <div class=" hidden md:flex flex-row   w-full">
 
               <div class="w-[100%] relative  lg:pb-[44%] md:pb-[50%]  bg-neutral-900 ">
                      <div class="w-[62%] h-full shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]   z-[10] bg-cover absolute c4 
                      animate-gradient-xy
                      bg-gradient-to-r 
                      from-blue-400 
                      to-orange-500 
                      via-purple-500"></div>
                      <div class="w-[61%] h-full bg-[url('https://variety.com/wp-content/uploads/2016/12/always-sunny.jpg?w=1000')] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] z-[10] bg-cover absolute c4 "></div>
                      <div class="w-[61%] h-full bg-slate-700   animate-pulse absolute c4 z-[5]"></div>
                      <div class="w-[61%] h-full bg-zinc-900 bg-opacity-50 bg-cover absolute flex items-center justify-start z-[10] c4">
                           <label class="ml-[10%] lg:text-[300%] md:text-[190%] font-bold" for=""> Collection Of Best Series</label>
                      </div>
                
                      <div @click="console.log('ok')" class=" cursor-pointer absolute pb-[18%] w-[18%]  lg:translate-y-[72.3%] md:translate-y-[88.3%] translate-x-[370%]  bg-[url('https://wallpaperaccess.com/full/1112742.jpg')] bg-cover bg-center c5 z-[10]"></div>
                      <div class=" absolute pb-[17.5%] w-[17.5%]  lg:translate-y-[74.6%] md:translate-y-[91.8%] translate-x-[382%] bg-slate-700   animate-pulse z-[5] c5 "></div>
                      <div class=" absolute pb-[17.5%] w-[17.5%]  lg:translate-y-[79.6%] md:translate-y-[96.8%] translate-x-[382%]   z-[4] c5
                      animate-gradient-xy
                      bg-gradient-to-r 
                      from-blue-400 
                      to-orange-500 
                      via-purple-500
                      "></div>


                    
                      <div @click="console.log('ok')" class=" cursor-pointer absolute pb-[18%] w-[18%]  lg:translate-y-[16.3%] md:translate-y-[32.3%] translate-x-[312%] bg-[url('https://wallpaperaccess.com/full/1112742.jpg')] bg-cover bg-center c5 z-[10]"></div>
                      <div class=" absolute pb-[17.5%] w-[17.5%]  lg:translate-y-[18%] md:translate-y-[34%] translate-x-[322%] bg-slate-700   animate-pulse z-[5] c5 "></div>
                      <div class=" absolute pb-[17.5%] w-[17.5%]  lg:translate-y-[22%] md:translate-y-[38%] translate-x-[322.5%]   z-[4] c5 
                      animate-gradient-xy
                      bg-gradient-to-r 
                      from-blue-400 
                      to-orange-500 
                      via-purple-500"></div>
                    
                      
                      <div @click="console.log('ok')" class=" cursor-pointer absolute pb-[18%] w-[18%]  lg:translate-y-[16.3%] md:translate-y-[32.3%] translate-x-[428%] bg-[url('https://wallpaperaccess.com/full/1112742.jpg')] bg-cover bg-center c5 z-[10]"></div>
                      <div class=" absolute pb-[17.5%] w-[17.5%]  lg:translate-y-[18%] md:translate-y-[34%] translate-x-[442%] bg-slate-700   animate-pulse z-[5] c5 "></div>
                      <div class=" absolute pb-[17.5%] w-[17.5%]  lg:translate-y-[22%] md:translate-y-[38%] translate-x-[441.7%]    animate-pulse z-[4] c5 
                      animate-gradient-xy
                      bg-gradient-to-r 
                      from-blue-400 
                      to-orange-500 
                      via-purple-500"></div>

                    
                      <div @click="console.log('ok')" class=" cursor-pointer absolute pb-[18%] w-[18%]  lg:translate-y-[132.3%] md:translate-y-[148.3%] translate-x-[312%]   bg-[url('https://wallpaperaccess.com/full/1112742.jpg')] bg-cover bg-center c5 z-[10]"></div>
                      <div class=" absolute pb-[17.5%] w-[17.5%]  lg:translate-y-[137.3%] md:translate-y-[153.3%] translate-x-[322%] bg-slate-700   animate-pulse z-[5] c5 "></div>
                      <div class=" absolute pb-[17.5%] w-[17.5%]  lg:translate-y-[141.3%] md:translate-y-[157.3%] translate-x-[322.5%]  z-[4] c5 
                      animate-gradient-xy
                      bg-gradient-to-r 
                      from-blue-400 
                      to-orange-500 
                      via-purple-500"></div>
                    
                      <div @click="console.log('ok')" class=" cursor-pointer absolute pb-[18%] w-[18%] lg:translate-y-[132.3%] md:translate-y-[148.3%] translate-x-[428%] bg-[url('https://wallpaperaccess.com/full/1112742.jpg')] bg-cover bg-center c5 z-[10]"></div>
                      <div class=" absolute pb-[17.5%] w-[17.5%]  lg:translate-y-[137.3%] md:translate-y-[153.3%] translate-x-[442%] bg-slate-700   animate-pulse z-[5] c5 "></div>
                      <div class=" absolute pb-[17.5%] w-[17.5%]  lg:translate-y-[141.3%] md:translate-y-[157.3%] translate-x-[441.7%]     z-[4] c5 
                      animate-gradient-xy
                      bg-gradient-to-r 
                      from-blue-400 
                      to-orange-500 
                      via-purple-500"></div>
                    

                    </div>


         </div>
               

   <!-- sm header --> 

   <div class=" md:hidden flex flex-row pb-[80%] sm1:pb-[50%] w-[100%] relative justify-between ">
          <div class=" absolute bg-[url('https://images7.alphacoders.com/679/679600.jpg')] bg-cover bg-center h-full w-full "></div>
          <div class=" absolute bg-neutral-800 bg-opacity-60 bg-cover bg-center h-full w-full "></div>
          <div class=" absolute w-full pt-[20%] pb-[20%] h-full flex justify-evenly">

          </div>
          <div class=" absolute w-full h-full flex flex-col justify-end pb-[2%] pl-[5%] ">
                <label class="w-[70%] mb-[1%] text-[100%] sm2:text-[150%]" for="">it's always sunny in philadelphia </label>
                <label class="text-start flex justify-start items-start text-[80%] sm2:text-[95%] mb-[2%]" for="">
                     <ion-icon name="star-outline"></ion-icon>
                     <ion-icon name="star-outline"></ion-icon>
                     <ion-icon name="star-outline"></ion-icon>
                     <ion-icon name="star-outline"></ion-icon>
                     <ion-icon name="star-outline"></ion-icon>
                  </label>
                <label class="text-[60%] sm2:text-[90%] w-[98%]" for="">Five friends with big egos and small brains are the proprietors of an Irish pub in Philadelphia.
                   The gang, five raging alcoholic narcissists, run a failing dive bar in South Philadelphia</label>
                 <button class="w-[30%] mt-[2%] text-[90%] sm1:py-[2%] sm2:w-[20%] sm1:w-[25%] rounded-md  bg-c2">view series</button>  
          </div>
   </div>
   





      <div class="    md:px-[10%] ">

        
            <div  class="md:hidden">
                <slide_sm2  :type="t1" :films="g1"/>
            </div>

            <div  class="hidden md:block">
                <grid_lg :grid="g1"/>
            </div>





            <label  class="mt-[20%] md:mt-[5%] mx-[2%] md:mx-[0] text-[150%]" for="">Most Watched movie:</label>
            <div v-motion-slide-visible-once-left class=" relative backdrop-blur-md   md:mx-[0] mx-[2%] mt-[2%] text-[100%] ">
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




            <div  class="hidden md:block mt-[10%] ">
                <grid_lg :grid="g1"/>
            </div>

                    
            <div class="md:hidden ">
                <slide_sm2  :type="t1" :films="g1"/>
            </div>

            <div class="  mt-[9%] md:pb-[2%]  md:pt-[1%]">
               <label class=" ml-[1rem] md:ml-[0%] md:mt-[] text-[150%] mb-[5%] md:mb-[2%]" for="">Top New :</label>
               <div class="flex w-full justify-center items-center">
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
            </div>

            
           <div class="flex flex-col mt-[5%] w-full px-[2%] md:px-[0%]">
               <label class="mb-[5%] text-[150%]" for="">New Trailiers</label>
               <div v-motion-slide-visible-once-left class=" group relative md:w-[60%] self-start md:pb-[35%] w-[100%] pb-[50%]  mb-[5%] rounded-md">
                  <div class=" absolute w-full h-full animate-pulse mr-[3%]   bg-slate-700"></div>
                  <iframe v-if="tr1" class="video-y absolute w-full  h-full " :src="`https://www.youtube.com/embed/LdOM0x0XDMo`"></iframe>
                  <img v-if="!tr1" class=" absolute w-full h-full cursor-pointer rounded-md" src="https://image.tmdb.org/t/p/original/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg" alt="">
                  <div v-if="!tr1" @click="tr1=true" class=" absolute cursor-pointer bg-zinc-900 bg-opacity-30 flex justify-center items-center w-full h-full ">
                          <button class=" text-[200%] group-hover:text-[280%] transform-all duration-200 rounded-full relative ">
                               <ion-icon class="" name="play-outline"></ion-icon>
                           </button>      
                        </div>
               </div>

               <div v-motion-slide-visible-once-right class=" group relative md:w-[60%] self-end md:pb-[35%] w-[100%] pb-[50%]  mb-[5%] rounded-md">
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


.c4{
   clip-path:polygon(0% 0%,66% 0% ,100% 50%,66% 100% ,0% 100%);
}

.c5{
   clip-path:polygon(50% 0%,100% 50% ,50% 100%,0% 50%);
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