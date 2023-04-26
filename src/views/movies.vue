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

let t1 = 'Action Movies'
let t2 = 'Drama Movies'
let type = 'movie'
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
       img:'https://m.media-amazon.com/images/I/A1PaCX4oXjL.jpg',
       title:'Black Panther',
       rate:'7.3',
       id:'tt1825683'   
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BMjgzNjQxMzQtMTYxMy00YWQ2LThlMjAtZTgwMDIxZWE5ZjIzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
       title:'Thirteen Lives ',
       rate:'7.8',
       id:'tt12262116'  
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_FMjpg_UX1000_.jpg',
       title:'Everything Everywhere All at Once',
       rate:'7.9',
       id:'tt6710474',   
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg',
       title:'The Northman',
       rate:'7.1',
       id:'tt11138512'   
    },
    {
       img:'https://image.tmdb.org/t/p/original/j8szC8OgrejDQjjMKSVXyaAjw3V.jpg',
       title:'Bullet Train',
       rate:'7.3',
       id:'tt12593682'   
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg',
       title:'Top Gun: Maverick',
       rate:'8.3',
       id:'tt1745960'   
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UX1000_.jpg',
       title:'The Batman',
       rate:'7.8',
       id:'tt1877830'   
    },
    {
       img:'https://m.media-amazon.com/images/I/A1yv2jqZPZL._AC_SL1500_.jpg',
       title:'Blade Runner 2049',
       rate:'8',
       id:'tt1856101'   
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_FMjpg_UX1000_.jpg',
       title:'The Gentlemen',
       rate:'7.8',
       id:'tt8367814'
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BYmEyNWZhM2YtZDAyNi00ZjYzLWI2ZWMtOWM4ZmI1MDE0OWNmXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_.jpg',
       title:'Creed (II)',
       rate:'7.6',
       id:'tt6343314'
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BMzU3YWYwNTQtZTdiMC00NjY5LTlmMTMtZDFlYTEyODBjMTk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
       title:'Tenet',
       rate:'7.3',
       id:'tt6723592'
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
       title:'Free Guy',
       rate:'7.1',
       id:'tt6264654'
    },
]


let g2 = [
    {
       img:'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
       title:'The Dark Knight',
       rate:'9',
       id:'tt0468569'   
    },
    {
       img:'https://m.media-amazon.com/images/I/61PXdxTJGPL.jpg',
       title:'Inglourious Basterds',
       rate:'8.3',
       id:'tt0361748' 
    },
    {
       img:'https://m.media-amazon.com/images/I/71LNVGVpWYL.jpghttps://m.media-amazon.com/images/I/71LNVGVpWYL.jpg',
       title:'Interstellar',
       rate:'8.6',
       id:'tt0816692'   
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg',
       title:'Django Unchained',
       rate:'8.4',
       id:'tt1853728'   
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
       title:'Joker',
       rate:'8.4',
       id:'tt7286456'   
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BMTk4ODk5MTMyNV5BMl5BanBnXkFtZTcwMDMyNTg0Ng@@._V1_.jpg',
       title:'Warrior',
       rate:'8.2',
       id:'tt1291584'   
    },
    {
       img:'https://i.etsystatic.com/27475238/r/il/615ff4/2985728508/il_fullxfull.2985728508_1dbo.jpg',
       title:'Green Book',
       rate:'8.2',
       id:'tt6966692'   
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_.jpg',
       title:'Gone Girl',
       rate:'8.1',
       id:'tt2267998'   
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_.jpg',
       title:'Prisoners',
       rate:'8.1',
       id:'tt1392214'
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BMjE4NzgzNzEwMl5BMl5BanBnXkFtZTgwMTMzMDE0NjE@._V1_.jpg',
       title:'Room',
       rate:'8.1',
       id:'tt3170832'
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
       title:'Rush',
       rate:'8.1',
       id:'tt1979320'
    },
    {
       img:'https://m.media-amazon.com/images/I/81FQRdN+D5L._AC_UF894,1000_QL80_.jpg',
       title:'Spotlight',
       rate:'8.1',
       id:'tt1895587'
    },
]


let tr1 = ref(false)
let tr2 = ref(false)

let on_s = ref(false)
let s = ref([false,false,false,false,false,false])

let s2 =  ref([false,false,false,false,false,false])





let s_a = (i)=>{


   for(let i of s.value)
       if(i)
          return
   
   if(on_s.value)
      return

   

   s.value[i] = false

    let ons = setTimeout(()=>{
       on_s.value=true
    },500)

    for(let j =0;j<s.value.length;j++){
         if(i===j)
           continue
         s.value[j]=true  
    }
}

let s_a2 = ()=>{

   on_s.value=false

   let ons = setTimeout(()=>{

      for(let j =0;j<s.value.length;j++){
         s.value[j]=false
       }

    },500)

}

window.scrollTo({top:0})

</script>

<template>

    
       <p_slide/>
       <div  class="   md:bg-neutral-900 md:hidden md:pt-[7%] lg:pt-[6%] grid grid-cols-3 md:grid-cols-5 h-auto pb-[15%] lg:pb-[17%] md:pb-[20%]  lg:grid-cols-6 gap-[1%] px-[1%] md:px-[5%]">
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
                <slide_sm2  :title="t1" :filt="`gen=Action`" :films="g1" :type="type"/>
            </div>

            <div  class="hidden md:block">
                <grid_lg :grid="g1" :title="t1" :filt="`gen=Action`" :type="type" />
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

      <div class="hidden md:block text-[150%] mb-[2%] capitalize">recommended:</div>

       <div  :class="` md:bg-neutral-900  overflow-hidden relative  hidden md:pt-[7%] lg:pt-[6%] md:grid grid-cols-3 md:grid-cols-6 h-auto pb-[15%] lg:pb-[17%] md:pb-[20%]  lg:grid-cols-6   transition-all duration-[100ms] px-[1%] md:px-[5%]`">

                         <div :class="`  absolute w-full h-full  ${s[0]?'hidden':''}  bg-cover bg-center ${(!s[0])&&on_s? ' opacity-[100%] ' : ' opacity-[0%] '} transition-all duration-[1000ms] bg-[url('https://deadline.com/wp-content/uploads/2017/01/MCDSPMA_SP018.jpg')]`">
                        

                           
                        <div class="lg:pt-[6%] w-full h-full  bg-neutral-800 bg-opacity-[50%]  flex flex-row md:pt-[7%]">

                                 <div class="w-[20%]  h-full  "></div>

                                 <div class="w-[80%] h-full pl-[5%]">
                                          <label class="lg:text-[180%] text-[120%] sm3:text-[140%] capitalize" for="">spider man no way home</label>
                                     
                                          <div class="flex flex-row sm3:text-[150%] text-[110%] mt-[1%]">
                                            <ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon>
                                          </div>

                                          <p class="lg:w-[90%] lg:mt-[2%] hidden sm3:inline-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius exercitationem laboriosam at provident quidem aliquid? Nihil labore impedit quis ea, aliquam voluptate beatae velit, amet esse consequuntur optio repellat iure!</p>

                                          <div class="flex flex-row w-[90%] h-[45%] justify-between mt-[2%] ">
                                                  <div class="w-[30%] h-full bg-[url('https://i.guim.co.uk/img/media/7eb5189fd08acf4c6a97af28a5ffb826b6573839/34_0_4015_2412/master/4015.jpg?width=465&quality=85&dpr=1&s=none')] bg-cover bg-center"></div>
                                                  <div class="w-[30%] h-full bg-[url('https://ichef.bbci.co.uk/images/ic/400xn/p0bvhx7q.jpg')] bg-cover bg-center"></div>
                                                  <div class="w-[30%] h-full bg-[url('https://showland.tv/wp-content/uploads/2022/05/Spiderman-No-way-Home-25-1024x576.webp')] bg-cover bg-center"></div>

                                          </div>

                                          <button class="bg-c2 rounded-sm py-[.5%] w-[10%] mt-[2%] mr-[2%]">view</button>
                                          <button @click="s_a2()" class="bg-white cursor-pointer z-[10] text-black rounded-sm py-[.5%] w-[10%] mt-[2%]">return</button>

                                 </div>

                        </div>

                         </div>



                        <div :class="`  absolute w-full h-full  ${s[1]?'hidden':''}  bg-cover bg-center ${(!s[1])&&on_s? ' opacity-[100%] ' : ' opacity-[0%] '} transition-all duration-[1000ms] bg-[url('https://www.pluggedin.com/wp-content/uploads/2021/03/nobody-1.jpg')]`">
                        

                           
                        <div class="lg:pt-[6%] w-full h-full  bg-neutral-800 bg-opacity-[50%]  flex flex-row md:pt-[7%]">

                                 <div class="w-[20%]  h-full  "></div>

                                 <div class="w-[80%] h-full pl-[5%]">
                                          <label class="lg:text-[180%] text-[120%] sm3:text-[140%] capitalize" for="">No Body</label>
                                     
                                          <div class="flex flex-row sm3:text-[150%] text-[110%] mt-[1%]">
                                            <ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon>
                                          </div>

                                          <p class="lg:w-[90%] lg:mt-[2%] hidden sm3:inline-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius exercitationem laboriosam at provident quidem aliquid? Nihil labore impedit quis ea, aliquam voluptate beatae velit, amet esse consequuntur optio repellat iure!</p>

                                          <div class="flex flex-row w-[90%] h-[45%] justify-between mt-[2%] ">
                                                  <div class="w-[30%] h-full bg-[url('https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F8c242322-3753-4ee8-a548-82f190b07283.jpg?fit=scale-down&source=next&width=700')] bg-cover bg-center"></div>
                                                  <div class="w-[30%] h-full bg-[url('https://pyxis.nymag.com/v1/imgs/b04/2c5/4c10d9832af293279ed1b5e1d16aeb0efe-nobody.2x.rsocial.w600.jpg')] bg-cover bg-center"></div>
                                                  <div class="w-[30%] h-full bg-[url('https://variety.com/wp-content/uploads/2021/03/Bob-Odenkirk-Nobody-Film-Review.jpg')] bg-cover bg-center"></div>

                                          </div>

                                          <button class="bg-c2 rounded-sm py-[.5%] w-[10%] mt-[2%] mr-[2%]">view</button>
                                          <button @click="s_a2()" class="bg-white cursor-pointer z-[10] text-black rounded-sm py-[.5%] w-[10%] mt-[2%]">return</button>

                                 </div>

                        </div>

                        </div>
        
                        <div :class="`  absolute w-full h-full  ${s[2]?'hidden':''}  bg-cover bg-center ${(!s[2])&&on_s? ' opacity-[100%] ' : ' opacity-[0%] '} transition-all duration-[1000ms] bg-[url('https://images3.alphacoders.com/124/1241167.png')]`">
                        

                           
                        <div class="lg:pt-[6%] w-full h-full  bg-neutral-800 bg-opacity-[50%]  flex flex-row md:pt-[7%]">

                                 <div class="w-[20%]  h-full  "></div>

                                 <div class="w-[80%] h-full pl-[5%]">
                                          <label class="lg:text-[180%] text-[120%] sm3:text-[140%] capitalize" for="">Thor love and thunder</label>
                                     
                                          <div class="flex flex-row sm3:text-[150%] text-[110%] mt-[1%]">
                                            <ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon>
                                          </div>

                                          <p class="lg:w-[90%] lg:mt-[2%] hidden sm3:inline-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius exercitationem laboriosam at provident quidem aliquid? Nihil labore impedit quis ea, aliquam voluptate beatae velit, amet esse consequuntur optio repellat iure!</p>

                                          <div class="flex flex-row w-[90%] h-[45%] justify-between mt-[2%] ">
                                                  <div class="w-[30%] h-full bg-[url('https://m.media-amazon.com/images/M/MV5BM2QyZmNkNDktMzNlNi00NDQ4LThmNDQtYzk2OGIxMDc4MWVjXkEyXkFqcGdeQWRvb2xpbmhk._V1_QL75_UY281_CR0,0,500,281_.jpg')] bg-cover bg-center"></div>
                                                  <div class="w-[30%] h-full bg-[url('https://www.superherohype.com/wp-content/uploads/sites/4/2022/07/Thor-Love-and-Thunder-What.jpg?w=640')] bg-cover bg-center"></div>
                                                  <div class="w-[30%] h-full bg-[url('https://cdn.fandomwire.com/wp-content/uploads/2022/09/03125050/So-did-the-fight-not-happen-originally.jpg')] bg-cover bg-center"></div>

                                          </div>

                                          <button class="bg-c2 rounded-sm py-[.5%] w-[10%] mt-[2%] mr-[2%]">view</button>
                                          <button @click="s_a2()" class="bg-white cursor-pointer z-[10] text-black rounded-sm py-[.5%] w-[10%] mt-[2%]">return</button>

                                 </div>

                        </div>

                        </div>                        
    
                        <div :class="`  absolute w-full h-full  ${s[3]?'hidden':''}  bg-cover bg-center ${(!s[3])&&on_s? ' opacity-[100%] ' : ' opacity-[0%] '} transition-all duration-[1000ms] bg-[url('https://wallpapercave.com/wp/wp5916326.jpg')]`">
                        

                           
                        <div class="lg:pt-[6%] w-full h-full  bg-neutral-800 bg-opacity-[50%]  flex flex-row md:pt-[7%]">

                                 <div class="w-[20%]  h-full  "></div>

                                 <div class="w-[80%] h-full pl-[5%]">
                                          <label class="lg:text-[180%] text-[120%] sm3:text-[140%] capitalize" for="">Logan</label>
                                     
                                          <div class="flex flex-row sm3:text-[150%] text-[110%] mt-[1%]">
                                            <ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon>
                                          </div>

                                          <p class="lg:w-[90%] lg:mt-[2%] hidden sm3:inline-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius exercitationem laboriosam at provident quidem aliquid? Nihil labore impedit quis ea, aliquam voluptate beatae velit, amet esse consequuntur optio repellat iure!</p>

                                          <div class="flex flex-row w-[90%] h-[45%] justify-between mt-[2%] ">
                                                  <div class="w-[30%] h-full bg-[url('https://media.vanityfair.com/photos/58b9b612c486164de2e453fb/master/w_2560%2Cc_limit/logan-film-dafne-keen.jpg')] bg-cover bg-center"></div>
                                                  <div class="w-[30%] h-full bg-[url('https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2018%2F03%2F000250800hr-2000.jpg&w=426&h=285&q=60&c=tc')] bg-cover bg-center"></div>
                                                  <div class="w-[30%] h-full bg-[url('https://img.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2017/03/01/Weekend/Images/wk-logan0303-6.jpg?uuid=zV1Wbv7EEeaZtJ5hOv6wnw')] bg-cover bg-center"></div>

                                          </div>

                                          <button class="bg-c2 rounded-sm py-[.5%] w-[10%] mt-[2%] mr-[2%]">view</button>
                                          <button @click="s_a2()" class="bg-white cursor-pointer z-[10] text-black rounded-sm py-[.5%] w-[10%] mt-[2%]">return</button>

                                 </div>

                        </div>

                        </div>                          

                        <div :class="`  absolute w-full h-full  ${s[4]?'hidden':''}  bg-cover bg-center ${(!s[4])&&on_s? ' opacity-[100%] ' : ' opacity-[0%] '} transition-all duration-[1000ms] bg-[url('https://images.hdqwalls.com/wallpapers/john-wick-chapter-4-cast-poster-5k-dc.jpg')]`">
                        

                           
                        <div class="lg:pt-[6%] w-full h-full  bg-neutral-800 bg-opacity-[50%]  flex flex-row md:pt-[7%]">

                                 <div class="w-[20%]  h-full  "></div>

                                 <div class="w-[80%] h-full pl-[5%]">
                                          <label class="lg:text-[180%] text-[120%] sm3:text-[140%] capitalize" for="">John Wick Chapter 4</label>
                                     
                                          <div class="flex flex-row sm3:text-[150%] text-[110%] mt-[1%]">
                                            <ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon>
                                          </div>

                                          <p class="lg:w-[90%] lg:mt-[2%] hidden sm3:inline-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius exercitationem laboriosam at provident quidem aliquid? Nihil labore impedit quis ea, aliquam voluptate beatae velit, amet esse consequuntur optio repellat iure!</p>

                                          <div class="flex flex-row w-[90%] h-[45%] justify-between mt-[2%] ">
                                                  <div class="w-[30%] h-full bg-[url('https://image.tmdb.org/t/p/original/zKOLGC6s6Ieyy7oMl0GT6PTR9VM.jpg')] bg-cover bg-center"></div>
                                                  <div class="w-[30%] h-full bg-[url('https://i.gadgets360cdn.com/large/john_wick_4_box_office_1679895868048.jpg')] bg-cover bg-center"></div>
                                                  <div class="w-[30%] h-full bg-[url('https://www.koimoi.com/wp-content/new-galleries/2023/03/box-office-john-wick-chapter-4-shows-huge-growth-on-saturday-01.jpg')] bg-cover bg-center"></div>

                                          </div>

                                          <button class="bg-c2 rounded-sm py-[.5%] w-[10%] mt-[2%] mr-[2%]">view</button>
                                          <button @click="s_a2()" class="bg-white cursor-pointer z-[10] text-black rounded-sm py-[.5%] w-[10%] mt-[2%]">return</button>

                                 </div>

                        </div>

                        </div>                         
                        
                        <div :class="`  absolute w-full h-full  ${s[5]?'hidden':''}  bg-cover bg-center ${(!s[5])&&on_s? ' opacity-[100%] ' : ' opacity-[0%] '} transition-all duration-[1000ms] bg-[url('https://lascronicasdeaxa.files.wordpress.com/2021/04/suicide-squad-2_2021_tf-port_00.jpg')]`">
                        

                           
                        <div class="lg:pt-[6%] w-full h-full  bg-neutral-800 bg-opacity-[50%]  flex flex-row md:pt-[7%]">

                                 <div class="w-[20%]  h-full  "></div>

                                 <div class="w-[80%] h-full pl-[5%]">
                                          <label class="lg:text-[180%] text-[120%] sm3:text-[140%] capitalize" for="">the sucide squad</label>
                                     
                                          <div class="flex flex-row sm3:text-[150%] text-[110%] mt-[1%]">
                                            <ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon>
                                          </div>

                                          <p class="lg:w-[90%] lg:mt-[2%] hidden sm3:inline-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius exercitationem laboriosam at provident quidem aliquid? Nihil labore impedit quis ea, aliquam voluptate beatae velit, amet esse consequuntur optio repellat iure!</p>

                                          <div class="flex flex-row w-[90%] h-[45%] justify-between mt-[2%] ">
                                                  <div class="w-[30%] h-full bg-[url('https://m.media-amazon.com/images/M/MV5BYTRlZjIyMGYtOTEwMi00NmFjLWI5YWYtMzU0ZThjMTQ2Mjg1XkEyXkFqcGdeQWpnYW1i._V1_QL75_UY281_CR0,0,500,281_.jpg')] bg-cover bg-center"></div>
                                                  <div class="w-[30%] h-full bg-[url('https://www.gannett-cdn.com/presto/2021/08/04/USAT/034984ac-ba17-4617-8024-26900801fc70-SS2-36958-JMr.jpg?width=660&height=440&fit=crop&format=pjpg&auto=webp')] bg-cover bg-center"></div>
                                                  <div class="w-[30%] h-full bg-[url('https://www.dailydemocrat.com/wp-content/uploads/2021/08/OCR-L-SUICIDESQUAD-0806-03.jpeg?w=525')] bg-cover bg-center"></div>

                                          </div>

                                          <button class="bg-c2 rounded-sm py-[.5%] w-[10%] mt-[2%] mr-[2%]">view</button>
                                          <button @click="s_a2()" class="bg-white cursor-pointer z-[10] text-black rounded-sm py-[.5%] w-[10%] mt-[2%]">return</button>

                                 </div>

                        </div>

                        </div>  

                        <div  @click="s_a(0)" :class="`  ${s[0]? 'animate-s1 translate-x-[-100%] opacity-[0%]  ':'cursor-pointer'} ${(!s[0])&&on_s? '' : ''} transition-all duration-1000      relative  px-[5%]   rounded-sm    h-[150%]  group`">
                           <div :class="`hidden  absolute md:flex items-center justify-center w-[90%] h-[100%] transition-all duration-200 ${!(!on_s&&!s[0]) ? 'opacity-[0%]':' opacity-[100%]'} `">
                            <div class="  w-[100%] h-[100%] bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 bg-neutral-900  absolute"></div>
                            <div class=" w-[100%] h-[0%] hidden group-hover:flex items-center justify-center font-bold absolute">movie</div>
                            </div>
                            <div class=" pb-[180%] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg')] rounded-sm bg-center  bg-cover  "></div>
                            <img class="opacity-0 hidden" src="https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg" alt="">

                        </div>
                       
                        <div @click="s_a(1)" :class="`      ${s[1]? 'animate-s2 translate-y-[100%] opacity-[0%]  ':' cursor-pointer'} ${(!s[1])&&on_s? ' translate-x-[-100%]' : ''} transition-all duration-1000 px-[5%]     relative group  rounded-sm  h-[150%]    `">  
                           <div :class="`hidden absolute md:flex items-center justify-center w-[90%] h-[100%] transition-all duration-200 ${!(!on_s&&!s[1]) ? 'opacity-[0%]':' opacity-[100%]'} `">
                           <div class="  w-[100%] h-[100%] bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 bg-neutral-900  absolute"></div>
                            <div class=" w-[100%] h-[0%] hidden group-hover:flex items-center justify-center font-bold absolute">movie</div>
                           </div>
                           <div class=" pb-[160%] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] w-full h-full bg-[url('https://m.media-amazon.com/images/M/MV5BZWY3ODE1NDctMGE3OS00ODQxLWFjNDktMGViMTA3YTExYmI3XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg')] rounded-sm bg-center  bg-cover  "></div>

                         </div>
                     
                         <div @click="s_a(2)" :class=" ` ${s[2]? 'animate-s3 translate-y-[-100%] opacity-[0%]  ':'cursor-pointer'} ${(!s[2])&&on_s? ' translate-x-[-200%]' : ''} transition-all duration-1000   relative group bg-[url('')] rounded-sm bg-center h-[150%] bg-cover   px-[5%] `">  
                           <div :class="`hidden absolute md:flex items-center justify-center w-[90%] h-[100%] transition-all duration-200 ${!(!on_s&&!s[2]) ? 'opacity-[0%]':' opacity-[100%]'} `">
                           <div class="  w-[100%] h-[100%] bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 bg-neutral-900  absolute"></div>
                            <div class=" w-[100%] h-[0%] hidden group-hover:flex items-center justify-center font-bold absolute">movie</div>
                           </div>
                           <div class=" pb-[160%] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] w-full h-full bg-[url('https://filmfare.wwmindia.com/content/2022/jul/thorloveandthunder51657084424.jpg')] rounded-sm bg-center  bg-cover  "></div>

                         </div>
                    
                         <div @click="s_a(3)" :class="` ${s[3]? 'animate-s2 translate-y-[100%] opacity-[0%]  ':'cursor-pointer'} ${(!s[3])&&on_s? ' translate-x-[-300%]' : ''} transition-all duration-1000 relative group hidden md:inline-block  rounded-sm  h-[150%]    px-[5%] `">
                            <div :class="`hidden absolute md:flex items-center justify-center w-[90%] h-[100%] transition-all duration-200 ${!(!on_s&&!s[3]) ? 'opacity-[0%]':' opacity-[100%]'} `">
                              <div class="  w-[100%] h-[100%] bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 bg-neutral-900  absolute"></div>
                            <div class=" w-[100%] h-[0%] hidden group-hover:flex items-center justify-center font-bold absolute">movie</div>
                            </div>
                            <div class=" pb-[160%] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] w-full h-full bg-[url('https://c4.wallpaperflare.com/wallpaper/166/39/582/logan-2017-hugh-jackman-marvel-comics-wolverine-wallpaper-preview.jpg')] rounded-sm bg-center  bg-cover  "></div>
                            <img class="opacity-0 hidden" src="https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg" alt="">
                           </div>
                   
                         <div @click="s_a(4)" :class="` ${s[4]? 'animate-s3 translate-y-[-100%] opacity-[0%]  ':'cursor-pointer'} ${(!s[4])&&on_s? ' translate-x-[-400%]' : ''} transition-all duration-1000 hidden group relative md:inline-block  rounded-sm px-[5%] h-[150%]   `">
                            <div :class="`hidden absolute md:flex items-center justify-center w-[90%] h-[100%] transition-all duration-200 ${!(!on_s&&!s[4]) ? 'opacity-[0%]':' opacity-[100%]'} `">
                              <div class="  w-[100%] h-[100%] bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 bg-neutral-900  absolute"></div>
                            <div class=" w-[100%] h-[0%] hidden group-hover:flex items-center justify-center font-bold absolute">movie</div>
                          </div>
                          <div class=" pb-[160%] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] w-full h-full bg-[url('https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_FMjpg_UX1000_.jpg')] rounded-sm bg-center  bg-cover  "></div>

                         </div>

                         <div @click="s_a(5)" :class="` ${s[5]? 'animate-s4 translate-x-[100%] opacity-[0%]  ':'cursor-pointer'} ${(!s[5])&&on_s? ' translate-x-[-500%]' : ''} transition-all duration-1000 hidden group relative md:inline-block px-[5%]  rounded-sm  h-[150%]   `">
                            <div :class="`hidden absolute md:flex items-center justify-center w-[90%] h-[100%] transition-all duration-200 ${!(!on_s&&!s[1]) ? 'opacity-[0%]':' opacity-[100%]'} `">
                              <div class="  w-[100%] h-[100%] bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 bg-neutral-900  absolute"></div>
                            <div class=" w-[100%] h-[0%] hidden group-hover:flex items-center justify-center font-bold absolute">movie</div>
                        </div>
                        <div class=" pb-[160%] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] w-full h-full bg-[url('https://wallpaperaccess.com/full/6381170.jpg')] rounded-sm bg-center  bg-cover  "></div>
                         </div>
                
       </div>


            <div  class="hidden md:block mt-[10%] ">
                <grid_lg :grid="g2" :title="t2" :filt="`gen=Drama`" :type="type"/>
            </div>

                    
            <div class="md:hidden ">
                <slide_sm2  :title="t2" :films="g2" :filt="`gen=Drama`" :type="type"/>
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
               <label class="mb-[5%] text-[150%]" for="">New Trailers</label>
             
               <div  class=" overflow-hidden shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] group relative  md:w-[100%] self-center pb-[50%] w-[100%]   mb-[5%] rounded-md">
                  <div v-if="tr1" class=" absolute w-full flex justify-center items-center h-full  mr-[3%]   bg-black">
                                <div class=" absolute w-16 h-16 border-t-4 border-r-4 animate-spin  rounded-full border-t-white"></div>
                  </div>
                  <iframe v-if="tr1" class="video-y absolute w-full  h-full " :src="`https://www.youtube.com/embed/32RAq6JzY-w`"></iframe>
                  <img  :class="` absolute ${!tr1?'':' translate-x-[100%] opacity-[0%]'} duration-[500ms] transition-all  w-full h-full cursor-pointer rounded-md`" src="https://i0.wp.com/www.irishfilmcritic.com/wp-content/uploads/2023/03/Fast-X.jpg?fit=1392%2C696&ssl=1" alt="">
                  <div  @click="tr1=true" :class="` absolute ${!tr1?'':' translate-x-[50%] opacity-[0%]'} duration[500ms] transition-all   cursor-pointer bg-zinc-900 bg-opacity-30 flex justify-center items-center w-full h-full `">
                          <button class=" text-[200%]  group-hover:text-[280%] transform-all duration-200 rounded-full relative ">
                              <ion-icon class="" name="play-outline"></ion-icon>
                           </button>      
                        </div>
               </div>

         

               <div  class=" overflow-hidden shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] group relative  md:w-[100%] self-center pb-[50%] w-[100%]   mb-[5%] rounded-md">
                  <div v-if="tr2" class=" absolute w-full flex justify-center items-center h-full  mr-[3%]   bg-black">
                                <div class=" absolute w-16 h-16 border-t-4 border-r-4 animate-spin  rounded-full border-t-white"></div>
                  </div>
                  <iframe v-if="tr2" class="video-y absolute w-full  h-full " :src="`https://www.youtube.com/embed/JqcncLPi9zw`"></iframe>
                  <img  :class="` absolute ${!tr2?'':' translate-x-[100%] opacity-[0%]'} duration-[500ms] transition-all  w-full h-full cursor-pointer rounded-md`" src="https://thedisinsider.com/wp-content/uploads/2021/10/image0-2021-10-19T101922.749.jpeg" alt="">
                  <div  @click="tr2=true" :class="` absolute ${!tr2?'':' translate-x-[50%] opacity-[0%]'} duration[500ms] transition-all   cursor-pointer bg-zinc-900 bg-opacity-30 flex justify-center items-center w-full h-full `">
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