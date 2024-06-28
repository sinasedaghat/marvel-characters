<script setup lang="ts">
  const route = useRoute()
  const characterRequest = useCharacters()
  const CharacterStore = useCharacterStore()
  // const xx: Ref<any> = ref(null)
  

  // onMounted(async () => {

  //   const { data: comics } = await characterRequest.comics(route.params?.id as string)
  //   // const { data: series } = await characterRequest.series(route.params?.id as string)
  // })



  // const { data: details } = await characterRequest.details(route.params?.id as string)
  // CharacterStore.fillDetails(details)
  const { data: comics } = await characterRequest.comics(route.params?.id as string)
  const { data: series } = await characterRequest.series(route.params?.id as string)
  
  
  
  console.log('route ===> ', route.params?.id)
</script>

<template>
  <!-- yo yo -->
  {{ route.params }}
  <hr />
  <!-- <button @click="xx = CharacterStore.details">get details</button> -->
  <h5>DETAILS</h5>
  {{ CharacterStore.details }}
  <hr />
  <h5>COMICS</h5>
  {{ comics }}
  <hr />
  <h5>SERIES</h5>
  {{ series }}
</template>