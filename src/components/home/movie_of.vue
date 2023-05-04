<script>

import {ref} from 'vue'

let x2 = ref(false)
let x3 = ref(false)

let s1 = setTimeout(()=>{
    x2.value=true
},2000)

let s2 = setTimeout(()=>{
    x3.value=true
},4000)

</script>

<template>

<div class=" hidden md:block w-full h-full px-[10%] mb-[9%]  ">
             <label class="text-[180%] mb-[2%]" for="">Movie of the week:</label>
            <div class="w-full h-full  pb-[45%] relative   bg-[url('https://images3.alphacoders.com/551/551456.jpg')] bg-cover bg-center bg-no-repeat">
                <div class=" absolute w-full h-full bg-neutral-800 bg-opacity-40"></div>      
                <div class=" absolute w-full h-full bg-gradient-to-t from-c1  "></div>      
                <div class=" absolute transition-all duration-150 h-[80%] w-[25%] rounded-sm translate-y-[15%] translate-x-[10%] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://m.media-amazon.com/images/I/71LNVGVpWYL.jpg')] bg-cover bg-center "></div>
                <RouterLink to="/movie/tt0816692" class="hover:text-white">
                  <div class=" cursor-pointer absolute w-[25%] h-[10%] translate-y-[950%] translate-x-[10%] bg-c2 hover:bg-c3  transition-all duration-200 text-white text-center flex items-center justify-center rounded-md">view movie</div>
                </RouterLink>
                <div class=" absolute w-[65%] translate-y-[15%]   translate-x-[50%] h-[80%] ">
                     <div class=" relative    overflow-hidden w-full whitespace-nowrap row flex flex-col     h-full">
                                <label class=" md:text-[120%] lg:text-[150%] p-0" for="">Interstellar 2011</label>
                                <label class=" md:text-[100%] lg:text-[110%] p-0" for="">cast:</label>
                        </div>  
                </div>

                
                <div class=" absolute w-[65%] translate-y-[15%] overflow-hidden   translate-x-[50%] h-[80%] ">
                     <div class=" relative pt-[13%]    w-full whitespace-nowrap row     h-full">
                            <div class="  absolute inline-block w-[30%] animate-trans-x1 h-[78%]    translate-x-[330%] ml-[5%]  bg-[url('https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_FMjpg_UX1000_.jpg')] bg-cover bg-center"></div>
                            <div  :class="`absolute inline-block w-[30%] trans-x2 h-[78%] trans-x2  translate-x-[330%] ml-[5%]  bg-[url('https://m.media-amazon.com/images/M/MV5BMTU1MDM5NjczOF5BMl5BanBnXkFtZTcwOTY2MDE4OA@@._V1_.jpg')] bg-cover bg-center   `"></div>
                            <div  :class="`absolute inline-block w-[30%] trans-x2 h-[78%] trans-x3  translate-x-[330%] ml-[5%]  bg-[url('https://m.media-amazon.com/images/M/MV5BMTRhNzQ3NGMtZmQ1Mi00ZTViLTk3OTgtOTk0YzE2YTgwMmFjXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg')] bg-cover bg-center`"></div>
                            <div  :class="`absolute inline-block w-[30%] trans-x2 h-[78%] trans-x4  translate-x-[330%] ml-[5%]  bg-[url('https://m.media-amazon.com/images/M/MV5BMTM0NzYzNDgxMl5BMl5BanBnXkFtZTcwMDg2MTMyMw@@._V1_FMjpg_UX1000_.jpg')] bg-cover bg-center`"></div>
                    
                        </div>  
                </div>
                
            </div>

</div>


<div class="md:hidden mb-[5%] px-[5%] border-none outline-none ">

  <label class="text-[180%] mb-[2%] " for="">Movie of the week:</label>
  <div class="flex flex-col justify-center   relative items-start border-none outline-none bg-no-repeat  bg-[url('https://images3.alphacoders.com/551/551456.jpg')] bg-cover bg-center">
    
    <div class=" absolute w-full h-full bg-neutral-800 bg-opacity-40"></div>
    
    <div class=" absolute w-full h-full translate-y-[1%] bg-gradient-to-t from-c1 "></div>
     
    <div class="h-full flex justify-center items-center flex-col  mt-[5%] mb-[5%]  w-[100%] ">
          
            <div class=" relative  pb-[140%]  border-none outline-none w-[90%] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-[url('https://m.media-amazon.com/images/I/71LNVGVpWYL.jpg')] bg-cover bg-center"></div>
             <RouterLink to="/movie/tt0816692" class="w-[100%] flex justify-center items-center hover:text-white">
               <button class=" relative   w-[90%] cursor-pointer  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  bg-c2 mt-[2%] rounded-sm py-[1%] bg-cover bg-center">view movie</button>
            </RouterLink>
    </div>






  </div>

</div>


</template>

<style scoped>

.trans-x2 {
  animation-name: rotate;
  animation-duration:12s;
  animation-delay: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

}

.trans-x3 {
  animation-name: rotate;
  animation-duration:12s;
  animation-delay: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

}
.trans-x4 {
  animation-name: rotate;
  animation-duration:12s;
  animation-delay: 9s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

}





@keyframes rotate {
          0%{
                transform:translateX(330%);
            }
            100%{
              transform:translateX(-130%);
          }

}

</style>