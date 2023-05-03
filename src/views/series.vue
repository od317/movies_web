<script setup>

import {ref} from 'vue'
import slide_sm from '../components/movies/movies_slide_sm.vue'
import slide_sm2 from '../components/movies/movies_slide_sm2.vue'
import grid_lg from '../components/movies/grid_lg.vue'
import { useRouter } from 'vue-router';

let router = useRouter()

let started = ref(false)
let sss = setTimeout(()=>{
   started.value=true
},500)

let type = "series"

let t1 = 'Drama series'
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
       img:'https://m.media-amazon.com/images/M/MV5BODgzYmFkZjAtYjhmNC00NDdkLTk4NGYtNDdiODVlNmE3ODkyXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_FMjpg_UX1000_.jpg',
       title:'the night agent',
       rate:'7.6',
       id:'tt13918776'   
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BMTdmZjBjZjQtY2JiNS00Y2ZlLTg2NzgtMjUzMGY2OTVmOWJiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.6757_AL_.jpg',
       title:'Ted Lasso',
       rate:'8.8',
       id:'tt10986410'  
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_Ratio0.6757_AL_.jpg',
       title:'The Last of Us',
       rate:'8.9',
       id:'tt3581920',   
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_Ratio0.7297_AL_.jpg',
       title:'Game of Thrones',
       rate:'9.2',
       id:'tt0944947'   
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BMmRlYmE0Y2UtNDk2Yi00NzczLWEwZTEtZmE2OTcyYzcxYmU5XkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_Ratio0.7297_AL_.jpg',
       title:'True Detective',
       rate:'8.9',
       id:'tt2356777'   
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BZDA4YmE0OTYtMmRmNS00Mzk2LTlhM2MtNjk4NzBjZGE1MmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_Ratio0.6757_AL_.jpg',
       title:'Better Call Saul',
       rate:'8.9',
       id:'ttt3032476'   
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_Ratio0.6757_AL_.jpg',
       title:'Breaking Bad',
       rate:'9.5',
       id:'tt0903747'   
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BOTY5OWFmMzAtZTIxYi00NGM4LTk3YWMtY2MyYzMwOWVhZWM0XkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_Ratio0.8108_AL_.jpg',
       title:'The Rookie',
       rate:'8',
       id:'tt7587890'   
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BZmU5NTcwNjktODIwMi00ZmZkLTk4ZWUtYzVjZWQ5ZTZjN2RlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6757_AL_.jpg',
       title:'The Walking Dead',
       rate:'8.1',
       id:'tt1520211'
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BYWJhYWQ4NzUtMjEyYy00NGYxLTgyNzctMTRhMTQ4YTVlNTBjXkEyXkFqcGdeQXVyMTMwMzY2NDAx._V1_Ratio0.6757_AL_.jpg',
       title:'Rabbit Hole',
       rate:'7.6',
       id:'tt5822112'
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BMTU1OTdjYTUtMzA2MS00Njg4LWI1NTctMWUzYzNkNmQ5YWY3XkEyXkFqcGdeQXVyMTUwMzM5ODkz._V1_Ratio0.6757_AL_.jpg',
       title:'The Blacklist',
       rate:'8',
       id:'tt2741602'
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_Ratio0.8108_AL_.jpg',
       title:'The Boys',
       rate:'8.7',
       id:'tt1190634'
    },
]


let g2 = [
    {
       img:'https://m.media-amazon.com/images/M/MV5BNDFjYTIxMjctYTQ2ZC00OGQ4LWE3OGYtNDdiMzNiNDZlMDAwXkEyXkFqcGdeQXVyNzI3NjY3NjQ@._V1_Ratio0.7568_AL_.jpg',
       title:'Shingeki no Kyojin',
       rate:'9.0',
       id:'tt2560140'   
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BYmRhZjkyMjEtNjRkMS00MDQ0LTg2NGMtMTQ3ZjE0NjJmMjM2L2ltYWdlXkEyXkFqcGdeQXVyNTY0MTkxMTg@._V1_Ratio0.6757_AL_.jpg',
       title:'13 Reasons Why',
       rate:'7.5',
       id:'tt1837492'  
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BNjRiYTIzZmUtMTFkNS00ZTM0LWE4ODAtMDliMGE4NzM5ZjVlXkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_Ratio0.8108_AL_.jpg',
       title:'The 100',
       rate:'7.6',
       id:'tt2661044',   
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.6757_AL_.jpg',
       title:'Vikings',
       rate:'8.5',
       id:'tt2306299'   
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BMWEzNTFlMTQtMzhjOS00MzQ1LWJjNjgtY2RhMjFhYjQwYjIzXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_Ratio0.6757_AL_.jpg',
       title:'Sherlock',
       rate:'9.1',
       id:'tt1475582'   
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BMTg3NTkwNzAxOF5BMl5BanBnXkFtZTcwMjM1NjI5MQ@@._V1_Ratio0.6757_AL_.jpg',
       title:'Prison Break',
       rate:'8.3',
       id:'tt0455275'   
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BYjJhMjcwNjAtODc0ZC00Yjg5LWExYzEtMzc5OWJhNjI1NTQ4XkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_Ratio0.6757_AL_.jpg',
       title:'Daredevil',
       rate:'8.6',
       id:'tt3322312'   
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BM2QyNDIzOGMtNThhNS00NmUwLWI0ZjUtZjdkN2I1OTRjZWQ3XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_Ratio0.7027_AL_.jpg',
       title:'Mr. Robot',
       rate:'8.5',
       id:'tt4158110'   
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_Ratio0.6757_AL_.jpg',
       title:'Rick and Morty',
       rate:'9.1',
       id:'tt2861424'
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_Ratio0.6757_AL_.jpg',
       title:'Dark',
       rate:'8.7',
       id:'tt5753856'
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_Ratio0.8108_AL_.jpg',
       title:'Peaky Blinders',
       rate:'8.8',
       id:'tt2442560'
    },
    {
       img:'https://m.media-amazon.com/images/M/MV5BYTIxNjk3YjItYmYzMC00ZTdmLTk0NGUtZmNlZTA0NWFkZDMwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_Ratio0.6757_AL_.jpg',
       title:'Demon Slayer: Kimetsu no Yaiba',
       rate:'8.7',
       id:'tt9335498'
    },
]


let tr1 = ref(false)
let tr2 = ref(false)


let view = (title)=>{
  router.push(`/movie/${title}`)
}

let stars = document.getElementById('stars')

let c1 = ref(`width:${0.75*100}%`)

window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'instant',
});

</script>

<template>

   <!-- large header --> 
         
   <div class=" hidden md:flex flex-row mb-[5%] shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]  w-full">
 
               <div class="w-[100%] relative  lg:pb-[44%] md:pb-[50%]  bg-neutral-900 ">
                      <div class="w-[62%] h-full shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]   z-[10] bg-cover absolute c4 
                      animate-gradient-x
                      bg-gradient-to-r 
                      from-blue-400 
                      to-orange-500 
                      via-purple-500"></div>
                      
                      <div class="w-[61%] h-full bg-[url('https://variety.com/wp-content/uploads/2016/12/always-sunny.jpg?w=1000')] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] z-[10] bg-cover absolute c4 "></div>
                      
                      <div class="w-[61%] h-full bg-slate-700   animate-pulse absolute c4 z-[5]"></div>
                      <div class="w-[61%] h-full bg-zinc-900 bg-opacity-50 bg-cover absolute flex items-center justify-start z-[10] c4">
                           <label class="ml-[10%] lg:text-[300%] md:text-[190%] font-bold" for=""> Collection Of Best Series</label>
                      </div>
                
                      <RouterLink to="/movie/tt4574334">
                           <div  class=" cursor-pointer absolute pb-[18%] w-[18%]  lg:translate-y-[72.3%] md:translate-y-[88.3%] translate-x-[370%]  bg-[url('https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_2222,w_1500/https%3A%2F%2Fnetflixlife.com%2Ffiles%2F2022%2F02%2FEN_ST4_Teaser_Russia_Vertical_27x40_RGB.jpg')] bg-cover bg-center c5 z-[10]"></div>
                           <div class=" absolute pb-[17.5%] w-[17.5%]  lg:translate-y-[74.6%] md:translate-y-[91.8%] translate-x-[382%] bg-slate-700   animate-pulse z-[5] c5 "></div>
                           <div class=" absolute pb-[17.5%] w-[17.5%]  lg:translate-y-[79.6%] md:translate-y-[96.8%] translate-x-[382%]   z-[4] c5
                           animate-gradient-x
                           bg-gradient-to-r 
                           from-blue-400 
                           to-orange-500 
                           via-purple-500
                           "></div>
                     </RouterLink>


                      <RouterLink to="/movie/tt0386676">                   
                        <div  class=" cursor-pointer absolute pb-[18%] w-[18%]  lg:translate-y-[16.3%] md:translate-y-[32.3%] translate-x-[312%] bg-[url('https://tv-fanatic-res.cloudinary.com/iu/s--ZCvgnNPQ--/f_auto,q_auto/v1371070346/the-office-poster')] bg-cover bg-center c5 z-[10]"></div>
                        <div class=" absolute pb-[17.5%] w-[17.5%]  lg:translate-y-[18%] md:translate-y-[34%] translate-x-[322%] bg-slate-700   animate-pulse z-[5] c5 "></div>
                        <div class=" absolute pb-[17.5%] w-[17.5%]  lg:translate-y-[22%] md:translate-y-[38%] translate-x-[322.5%]   z-[4] c5 
                        animate-gradient-x
                        bg-gradient-to-r 
                        from-blue-400 
                        to-orange-500 
                        via-purple-500"></div>
                     </RouterLink>
                    
                     <RouterLink to="/movie/tt1751634">
                      <div  class=" cursor-pointer absolute pb-[18%] w-[18%]  lg:translate-y-[16.3%] md:translate-y-[32.3%] translate-x-[428%] bg-[url('https://sportshub.cbsistatic.com/i/2022/07/25/b87bfa41-24d7-4041-8bbe-e219c41aba52/the-sandman-netflix-poster.jpg?auto=webp&width=1500&height=2222&crop=0.675:1,smart')] bg-cover bg-center c5 z-[10]"></div>
                      <div class=" absolute pb-[17.5%] w-[17.5%]  lg:translate-y-[18%] md:translate-y-[34%] translate-x-[442%] bg-slate-700   animate-pulse z-[5] c5 "></div>
                      <div class=" absolute pb-[17.5%] w-[17.5%]  lg:translate-y-[22%] md:translate-y-[38%] translate-x-[441.7%]    animate-pulse z-[4] c5 
                      animate-gradient-x
                      bg-gradient-to-r 
                      from-blue-400 
                      to-orange-500 
                      via-purple-500"></div>
                     </RouterLink>

                     <RouterLink to="/movie/tt10234724">                  
                      <div  class=" cursor-pointer absolute pb-[18%] w-[18%]  lg:translate-y-[132.3%] md:translate-y-[148.3%] translate-x-[312%]   bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bb48ffc1-bf25-486b-a056-63c3bfce1223/dezxpmc-3c5f9b10-d54c-4810-9e20-dac8b46a7769.jpg/v1/fill/w_1280,h_1921,q_75,strp/moon_knight__2022__poster_by_bakikayaa_dezxpmc-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMSIsInBhdGgiOiJcL2ZcL2JiNDhmZmMxLWJmMjUtNDg2Yi1hMDU2LTYzYzNiZmNlMTIyM1wvZGV6eHBtYy0zYzVmOWIxMC1kNTRjLTQ4MTAtOWUyMC1kYWM4YjQ2YTc3NjkuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.W1JcQogodBJQJrBONWqTD_4M7cy6-p6yszxi5xKD4PE')] bg-cover bg-center c5 z-[10]"></div>
                      <div class=" absolute pb-[17.5%] w-[17.5%]  lg:translate-y-[137.3%] md:translate-y-[153.3%] translate-x-[322%] bg-slate-700   animate-pulse z-[5] c5 "></div>
                      <div class=" absolute pb-[17.5%] w-[17.5%]  lg:translate-y-[141.3%] md:translate-y-[157.3%] translate-x-[322.5%]  z-[4] c5 
                      animate-gradient-x
                      bg-gradient-to-r 
                      from-blue-400 
                      to-orange-500 
                      via-purple-500"></div>
                     </RouterLink>

                     <RouterLink to="/movie/tt3032476">                  
                      <div  class=" cursor-pointer absolute pb-[18%] w-[18%] lg:translate-y-[132.3%] md:translate-y-[148.3%] translate-x-[428%] bg-[url('https://m.media-amazon.com/images/I/71xd2Jh8U1L._AC_UF894,1000_QL80_.jpg')] bg-cover bg-center c5 z-[10]"></div>
                      <div class=" absolute pb-[17.5%] w-[17.5%]  lg:translate-y-[137.3%] md:translate-y-[153.3%] translate-x-[442%] bg-slate-700   animate-pulse z-[5] c5 "></div>
                      <div class=" absolute pb-[17.5%] w-[17.5%]  lg:translate-y-[141.3%] md:translate-y-[157.3%] translate-x-[441.7%]     z-[4] c5 
                      animate-gradient-x
                      bg-gradient-to-r 
                      from-blue-400 
                      to-orange-500 
                      via-purple-500"></div>
                     </RouterLink>
                    

                    </div>


         </div>
               

   <!-- sm header --> 

   <div class=" md:hidden flex flex-row pb-[70%] sm1:pb-[50%] w-[100%] relative justify-between ">
          <div class=" absolute bg-[url('https://images7.alphacoders.com/679/679600.jpg')] bg-cover bg-center h-full w-full "></div>
          <div class=" absolute bg-neutral-800 bg-opacity-60 bg-cover bg-center h-full w-full "></div>
          <div class=" absolute w-full pt-[20%] pb-[20%] h-full flex justify-evenly">

          </div>
          <div class=" absolute w-full h-full flex flex-col justify-end pb-[2%] pl-[5%] ">
                <label class="w-[60%] mb-[1%] text-[100%] sm2:text-[150%]" for="">it's always sunny in philadelphia </label>
                <label class=" flex justify-start text-center items-center text-[90%] sm2:text-[95%] mb-[2%]" for="">
                     <ion-icon class=" text-[#FF9529] " name="star"></ion-icon>
                     <label>7.9</label>
                  </label>
                <label class="text-[60%] sm2:text-[90%] w-[98%]" for="">Five friends with big egos and small brains are the proprietors of an Irish pub in Philadelphia.
                   The gang, five raging alcoholic narcissists, run a failing dive bar in South Philadelphia</label>
                   <RouterLink class=" hover:text-white" to="/movie/tt0472954">
                    <button class="w-[30%] mt-[2%] text-[90%] py-[2%] sm1:py-[2%] sm2:w-[20%] sm1:w-[25%] rounded-md  bg-c2">view series</button>  
                   </RouterLink>
                  </div>
   </div>
   





      <div class="    md:px-[10%] ">

        
            <div  class="md:hidden">
                <slide_sm2 :type="type" :filt="`gen=Drama`"  :title="t1" :films="g1"/>
            </div>

            <div  class="hidden md:block">
                <grid_lg :type="type" :filt="`gen=Drama`" :title="t1" :grid="g1"/>
            </div>





            <label  class="mt-[20%] md:mt-[5%] mx-[2%] md:mx-[0] text-[150%] md:hidden " for="">Most Watched series:</label>
            <div  class=" relative backdrop-blur-md  md:hidden md:mx-[0] mx-[2%] mt-[2%] text-[100%] ">
            <div class=" relative pb-[70%] z-[5] md:pb-[45%] ">
            <div  class="rounded-sm absolute bg-[url('https://images7.alphacoders.com/119/1199831.jpg')] bg-cover bg-center bg-no-repeat  p-0
              w-full h-full z-[5]"></div>
             <div class="md:hidden z-[6] absolute bg-zinc-800 bg-opacity-40 h-full w-full "></div>             
            </div>

            <div class=" z-[10] font-bold absolute w-full md:hidden translate-y-[-100%] h-full flex flex-col justify-end pb-[2%] px-[3%]">
               <label class="text-[180%] w-[80%] mb-[1%] capitalize" for="">Peace Maker</label>
               <div class="flex flex-row justify-start items-center sm3:text-[130%] text-[130%] mt-[0%]">
                                                   <ion-icon class=" text-[#FF9529] " name="star"></ion-icon>
                                                   <label for="">8.3</label>
               </div>
               <div class=" line-clamp-3 text-[120%] w-[90%] ">
                                              Premise. After recovering from the injuries he suffered during the events of The Suicide Squad (2021),
                                              Christopher Smith / Peacemaker is forced to join the mysterious A.R.G.U.S. black ops squad "Project Butterfly".
                                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quisquam? Cum voluptas architecto autem doloribus rem dicta ullam illo adipisci sunt, voluptates reiciendis tenetur, maiores totam officiis quam aliquam aliquid?
               </div>
            <RouterLink :to="`/movie/tt13146488`" class="hover:text-white mt-[5%]  w-[30%]">
                                             <button class=" w-full text-[110%] text-center bg-c2 p-[5%]  text-white  inline-block">view movie</button>
               </RouterLink>  
            </div>


            </div>


            <label  class=" hidden md:block mt-[20%] md:mt-[5%] mx-[2%] md:mx-[0] text-[150%]" for="">Most Watched series:</label>
            <div  class=" hidden md:block relative backdrop-blur-md   md:mx-[0] mx-[2%] mt-[2%] text-[100%] ">
                     <div class=" relative pb-[70%] z-[5] md:pb-[45%] ">
                     <div  class="rounded-sm absolute bg-[url('https://images7.alphacoders.com/119/1199831.jpg')] bg-cover bg-center bg-no-repeat  p-0
                     w-full h-full z-[5]"></div>
                     </div>


                     <div class=" absolute hidden z-[10] md:flex flex-col items-end justify-center  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] backdrop-blur-md    from-neutral-800/30  translate-y-[-100%] h-[100%] w-[100%]  text-[100%] ">
                     </div>

                     <div class=" absolute  hidden z-[10]  md:flex flex-row items-end justify-center   to-transparent translate-y-[-100%] h-[100%] w-[100%]  text-[100%] ">
                     
                        <div class="w-[30%] h-full pr-[1%] flex flex-row justify-end items-center ">
                                 <div class=" rounded-sm w-[80%] h-[80%] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://m.media-amazon.com/images/M/MV5BODk2NjAyOWMtM2FjZC00MjZhLTkxMjQtZTM3NjJlYTE5MDdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg')] bg-cover bg-center bg-no-repeat"></div>
                        </div>
                        
                        <div class="w-[70%] pl-[5%]  flex flex-col justify-center items-center h-full ">
                                    <div class="w-full h-[80%] ">
                                             <label class="sm3:text-[150%] text-[110%] sm3:w-[30%] w-[50%] capitalize" for="">Peacemaker</label>   
                                             
                                             <div class="">
                                                <div class="flex flex-row justify-start items-center sm3:text-[130%] text-[110%] mt-[1%]">
                                                   <ion-icon class=" text-[#FF9529] " name="star"></ion-icon>
                                                   <label for="">8.3</label>
                                                </div>
                                             </div>

                                             <div class="mt-[3%] flex-grow w-[90%] hidden sm3:inline-block">
                                              Premise. After recovering from the injuries he suffered during the events of The Suicide Squad (2021),
                                              Christopher Smith / Peacemaker is forced to join the mysterious A.R.G.U.S. black ops squad "Project Butterfly".
                                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quisquam? Cum voluptas architecto autem doloribus rem dicta ullam illo adipisci sunt, voluptates reiciendis tenetur, maiores totam officiis quam aliquam aliquid?
                                             </div>

                                             <div class="mt-[5%] w-[90%]  line-clamp-3   sm3:hidden ">
                                                Premise. After recovering from the injuries he suffered during the events of The Suicide Squad (2021),
                                                 Christopher Smith / Peacemaker is forced to join the mysterious A.R.G.U.S. black ops squad "Project Butterfly".                                            
                                                 </div>
                                             
                                             <RouterLink :to="`/movie/tt13146488`" class="hover:text-white">
                                             <button class=" bg-c2 text-[110%] rounded-md py-[1%] px-[1%] mt-[5%]">view movie</button>
                                             </RouterLink>
                                    </div>
                        </div>

                     </div>
            </div>


            <div  class="hidden md:block mt-[10%] ">
                <grid_lg :type="type" title="recommended series" filt="" :grid="g2"/>
            </div>

                    
            <div class="md:hidden ">
                <slide_sm2 :type="type" title="recommended series " filt=""  :title="t1" :films="g2"/>
            </div>

           
            <div class="  mt-[9%] md:pb-[2%]  md:pt-[1%]">
            
            <label class="  ml-[1rem] md:ml-[0%] md:mt-[] text-[150%] mb-[5%] md:mb-[2%]" for="">Top New :</label>
               <div class=" hidden md:flex w-full justify-center items-center">
               <div  class="  relative  px-[0%] flex flex-row justify-between pb-[5%]   md:w-[95%]">
                  
                  <div class=" cursor-pointer rounded-sm group overflow-hidden  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  relative w-[30%] pb-[45%]  bg-cover bg-center">
                     <RouterLink :to="`/movie/tt5753856`">

                       <div class=" absolute h-[97%] w-[95%]  translate-y-[1.5%] translate-x-[2.5%]  bg-cover bg-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-neutral-800 animate-pulse "></div>
                        <div class=" absolute h-[97%] w-[95%]  translate-y-[1.5%] translate-x-[2.5%]  bg-cover bg-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_FMjpg_UX1000_.jpg')]"></div>
                        <div class="  absolute bg-neutral-900 flex items-center justify-center   bg-opacity-[0%] group-hover:bg-opacity-[40%]  transition-all duration-200 z-[1] h-[97%] w-[95%]  translate-y-[1.5%] translate-x-[2.5%]"></div>
                        <div class="  absolute  flex items-center justify-center   opacity-[0%] group-hover:opacity-[100%]  transition-all duration-200 h-[97%] text-white z-[2] w-[95%]  translate-y-[1.5%] translate-x-[2.5%]">Dark</div>
                  
                     </RouterLink>
                  
                        <div class=" absolute bg-gray-50 translate-y-[99.4%] group-hover:translate-x-[198%] group-hover:bg-c3 transition-all duration-[700ms] w-full h-full "></div>
                        <div class=" absolute bg-gray-50 translate-y-[99.4%] translate-x-[-198%] group-hover:translate-x-[0%] group-hover:bg-c3 transition-all duration-[700ms] w-full h-full "></div>

                        <div class=" absolute bg-gray-50 translate-y-[-99.4%] group-hover:translate-x-[-198%] group-hover:bg-c3 transition-all duration-[700ms] w-full h-full "></div>
                        <div class=" absolute bg-gray-50 translate-y-[-99.4%] translate-x-[198%] group-hover:translate-x-[0%] group-hover:bg-c3 transition-all duration-[700ms] w-full h-full "></div>

                        <div class=" absolute bg-gray-50 translate-x-[98.7%] group-hover:translate-y-[-198.4%] group-hover:bg-c3 transition-all duration-[800ms] w-full h-full "></div>
                        <div class=" absolute bg-gray-50 translate-x-[98.7%] translate-y-[198.4%] group-hover:translate-y-[0%] group-hover:bg-c3 transition-all duration-[800ms] w-full h-full "></div>

                        <div class=" absolute bg-gray-50 translate-x-[-98.7%] group-hover:translate-y-[198.4%] group-hover:bg-c3 transition-all duration-[800ms] w-full h-full "></div>
                        <div class=" absolute bg-gray-50 translate-x-[-98.7%] translate-y-[-198.4%] group-hover:translate-y-[0%] group-hover:bg-c3 transition-all duration-[800ms] w-full h-full "></div>

                     </div>

                  <div class=" cursor-pointer rounded-sm group shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] overflow-hidden relative w-[30%] pb-[45%]  bg-cover bg-center">
                     <RouterLink :to="`/movie/tt3581920`">
                           <div class=" absolute h-[97%] w-[95%]  translate-y-[1.5%] translate-x-[2.5%]  bg-cover bg-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-neutral-800 animate-pulse "></div>
                           <div class=" absolute h-[97%] w-[95%]  translate-y-[1.5%] translate-x-[2.5%]  bg-cover bg-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_FMjpg_UX1000_.jpg')]"></div>
                           <div class="  absolute bg-neutral-900 flex items-center justify-center   bg-opacity-[0%] group-hover:bg-opacity-[40%]  transition-all duration-200 z-[1] h-[97%] w-[95%]  translate-y-[1.5%] translate-x-[2.5%]"></div>
                           <div class="  absolute  flex items-center justify-center   opacity-[0%] group-hover:opacity-[100%]  transition-all duration-200 h-[97%] text-white z-[2] w-[95%]  translate-y-[1.5%] translate-x-[2.5%] capitalize">The last of us</div>
                     </RouterLink>                 
                        <div class=" absolute bg-gray-50 translate-y-[99.4%] group-hover:translate-x-[198%] group-hover:bg-c3 transition-all duration-[700ms] w-full h-full "></div>
                        <div class=" absolute bg-gray-50 translate-y-[99.4%] translate-x-[-198%] group-hover:translate-x-[0%] group-hover:bg-c3 transition-all duration-[700ms] w-full h-full "></div>

                        <div class=" absolute bg-gray-50 translate-y-[-99.4%] group-hover:translate-x-[-198%] group-hover:bg-c3 transition-all duration-[700ms] w-full h-full "></div>
                        <div class=" absolute bg-gray-50 translate-y-[-99.4%] translate-x-[198%] group-hover:translate-x-[0%] group-hover:bg-c3 transition-all duration-[700ms] w-full h-full "></div>

                        <div class=" absolute bg-gray-50 translate-x-[98.7%] group-hover:translate-y-[-198.4%] group-hover:bg-c3 transition-all duration-[800ms] w-full h-full "></div>
                        <div class=" absolute bg-gray-50 translate-x-[98.7%] translate-y-[198.4%] group-hover:translate-y-[0%] group-hover:bg-c3 transition-all duration-[800ms] w-full h-full "></div>

                        <div class=" absolute bg-gray-50 translate-x-[-98.7%] group-hover:translate-y-[198.4%] group-hover:bg-c3 transition-all duration-[800ms] w-full h-full "></div>
                        <div class=" absolute bg-gray-50 translate-x-[-98.7%] translate-y-[-198.4%] group-hover:translate-y-[0%] group-hover:bg-c3 transition-all duration-[800ms] w-full h-full "></div>
                  </div>
            
                  <div class=" cursor-pointer rounded-sm group shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] overflow-hidden relative w-[30%] pb-[45%]   bg-cover bg-center">
                     <RouterLink :to="`/movie/tt2861424`">

                        <div class=" absolute h-[97%] w-[95%]  translate-y-[1.5%] translate-x-[2.5%]  bg-cover bg-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-neutral-800 animate-pulse "></div>
                        <div class=" absolute h-[97%] w-[95%]  translate-y-[1.5%] translate-x-[2.5%]  bg-cover bg-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_FMjpg_UX1000_.jpg')]"></div>
                        <div class="  absolute bg-neutral-900 flex items-center justify-center   bg-opacity-[0%] group-hover:bg-opacity-[40%]  transition-all duration-200 z-[1] h-[97%] w-[95%]  translate-y-[1.5%] translate-x-[2.5%]"></div>
                        <div class="  absolute  flex items-center justify-center   opacity-[0%] group-hover:opacity-[100%]  transition-all duration-200 h-[97%] text-white z-[2] w-[95%]  translate-y-[1.5%] translate-x-[2.5%] capitalize">rick and morty</div>
                     
                     </RouterLink>                  
                        <div class=" absolute bg-gray-50 translate-y-[99.4%] group-hover:translate-x-[198%] group-hover:bg-c3 transition-all duration-[700ms] w-full h-full "></div>
                        <div class=" absolute bg-gray-50 translate-y-[99.4%] translate-x-[-198%] group-hover:translate-x-[0%] group-hover:bg-c3 transition-all duration-[700ms] w-full h-full "></div>

                        <div class=" absolute bg-gray-50 translate-y-[-99.4%] group-hover:translate-x-[-198%] group-hover:bg-c3 transition-all duration-[700ms] w-full h-full "></div>
                        <div class=" absolute bg-gray-50 translate-y-[-99.4%] translate-x-[198%] group-hover:translate-x-[0%] group-hover:bg-c3 transition-all duration-[700ms] w-full h-full "></div>

                        <div class=" absolute bg-gray-50 translate-x-[98.7%] group-hover:translate-y-[-198.4%] group-hover:bg-c3 transition-all duration-[800ms] w-full h-full "></div>
                        <div class=" absolute bg-gray-50 translate-x-[98.7%] translate-y-[198.4%] group-hover:translate-y-[0%] group-hover:bg-c3 transition-all duration-[800ms] w-full h-full "></div>

                        <div class=" absolute bg-gray-50 translate-x-[-98.7%] group-hover:translate-y-[198.4%] group-hover:bg-c3 transition-all duration-[800ms] w-full h-full "></div>
                        <div class=" absolute bg-gray-50 translate-x-[-98.7%] translate-y-[-198.4%] group-hover:translate-y-[0%] group-hover:bg-c3 transition-all duration-[800ms] w-full h-full "></div>
                  </div>

               </div>

               </div>
       
               <div class=" md:hidden px-[5%] w-full justify-center items-center">
                  <div  class="  relative  px-[0%] flex flex-col justify-between pb-[5%]   ">
                     
                           <RouterLink to="/movie/tt5753856" class=" hover:text-white relative w-[100%] mb-[5%]  pb-[50%]">

                                <div class=" absolute w-full h-full bg-neutral-900 animate-pulse"></div>
                                <div class=" absolute w-full h-full shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_FMjpg_UX1000_.jpg')] bg-cover bg-center">  </div>
                                <div class="  absolute bg-neutral-900 flex items-center justify-center   bg-opacity-[40%]  transition-all duration-200 z-[1] h-full w-full capitalize">Dark</div>

                           </RouterLink>

                           <RouterLink to="/movie/tt3581920" class=" hover:text-white relative w-[100%]  pb-[50%]">
                               <div class=" absolute w-full h-full bg-neutral-900 animate-pulse"></div>
                                <div class=" absolute w-full h-full shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_FMjpg_UX1000_.jpg')] bg-cover bg-center">  </div>
                                <div class="  absolute bg-neutral-900 flex items-center justify-center   bg-opacity-[40%]  transition-all duration-200 z-[1] h-full w-full capitalize">the last of us</div>
                           </RouterLink>

                  </div>

                  </div>

            </div>

            




            <label class="mb-[2%] px-[5%] md:px-[0%] md:mb-[0%] mt-[2%] md:mt-[0%] text-[150%]" for="">New Trailers</label>
            <div class="mt-[5%] overflow-x-hidden group flex justify-center  md:px-[0%] md:pb-[50%] pb-[60%] relative">
               <div v-if="tr1" class=" absolute w-[90%] md:w-full flex justify-center z-[1] items-center h-full     bg-black">
                                <div class=" absolute w-16 h-16 border-t-4 border-r-4 animate-spin  rounded-full border-t-white"></div>
                  </div>
               <iframe v-if="tr1"  class="video-y absolute z-[50] w-[90%] md:w-full h-full " :src="`https://www.youtube.com/embed/Znsa4Deavgg`"></iframe>
               <div  :class="` absolute ${!tr1?'':'hidden'} duration-[500ms] transition-all bg-cover bg-center  w-[90%] md:w-full h-full cursor-pointer rounded-md bg-[url('https://images6.alphacoders.com/103/1038319.jpg')]`" alt=""></div>
                  <div  @click="tr1=true" :class="` absolute ${!tr1?'':' hidden'} duration[500ms] transition-all   cursor-pointer bg-zinc-900 bg-opacity-30 flex justify-center items-center w-[90%] h-full md:w-full `">
                          <button class=" text-[200%]  group-hover:text-[280%] transform-all duration-200 rounded-full relative ">
                              <ion-icon class="" name="play-outline"></ion-icon>
                           </button>      
                        </div>

            </div>

            <div class="mt-[5%] group overflow-x-hidden flex justify-center  md:px-[0%] md:pb-[50%] pb-[60%] relative">
               <div v-if="tr2" class=" absolute w-[90%] md:w-full flex justify-center z-[1] items-center h-full     bg-black">
                                <div class=" absolute w-16 h-16 border-t-4 border-r-4 animate-spin  rounded-full border-t-white"></div>
                  </div>
               <iframe v-if="tr2"  class="video-y absolute z-[50] w-[90%] md:w-full  h-full " :src="`https://www.youtube.com/embed/3bhBYJYuabg`"></iframe>
               <div  :class="` absolute ${!tr2?'':' hidden'} duration-[500ms] transition-all  w-[90%] md:w-full h-full cursor-pointer rounded-md bg-cover bg-center bg-[url('https://sportshub.cbsistatic.com/i/2021/11/03/d67f829d-f830-46e1-98ea-2ae62a7d24df/dc-titans-season-5-4-confirmed-brenton-thwaites-interview.jpg')]`" alt=""></div>
                  <div  @click="tr2=true" :class="` absolute ${!tr2?'':' hidden'} duration[500ms] transition-all   cursor-pointer bg-zinc-900 bg-opacity-30 flex justify-center items-center w-[90%] h-full md:w-full `">
                          <button class=" text-[200%]  group-hover:text-[280%] transform-all duration-200 rounded-full relative ">
                              <ion-icon class="" name="play-outline"></ion-icon>
                           </button>      
                        </div>

            </div>


     </div>
     

</template>

<style scoped>

.star{
   clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}
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