<template>
    <Carousel class=""  :items-to-show="1.5" :wrap-around="true" ref="myCarousel">
      <Slide  :class="` `" v-for="slide in 5" :key="slide">
        <div  class="carousel__item w-full rounded-md">
            <div class="w-full pb-[120%] relative flex  justify-center ">
              <img class=" absolute h-full rounded-md transition-all   " :src="films[slide-1].img" alt="" @load="loads(films[slide-1])">
            </div>
        </div>
      </Slide>
  

    </Carousel>
  </template>
  
  <script setup>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'

  import { ref } from 'vue';
  let films = ref([{
    img:'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    load:false
  },{
    img:'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    load:false
  },{
    img:'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    load:false
  },{
    img:'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    load:false
  },{
    img:'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    load:false
  }])

  let loads = (img)=>{
    img.load=true
  }

  </script>
  
  <style scoped>
  .carousel__slide {
  }
  .carousel__slide div div img {
  }
  .carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide--prev {
  opacity: 1;

}
.carousel__slide--prev div div img{
  rotate: -10deg;
  transform: translateY(5%);

}
.carousel__slide--next {
  opacity: 1;

}

.carousel__slide--active {
  opacity: 1;
  padding: 0;
}

</style>