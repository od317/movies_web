<script setup>

import { ref } from 'vue';

const props = defineProps({
      title : String
});

let title =  props.title


let img =ref('')
async function fetchapi() {

  let resp  = await fetch(`https://imdb-api.com/en/API/Title/k_bb3vvmqp/${title}`)
  
  let data =  await resp.json()
  console.log(data)
   img.value =data.image
   console.log(img)
}

fetchapi()


</script>


<template>

<img :src="img" alt="">


</template>