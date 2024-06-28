<script setup lang="ts">
  const route = useRoute()
  const characterRequest = useCharacters()
  const characterStore = useCharacterStore()
  // onMounted(async () => {
  //   const { data: comics } = await characterRequest.comics(route.params?.id as string)
  //   // const { data: series } = await characterRequest.series(route.params?.id as string)
  // })

  const { data: comics } = await characterRequest.comics(route.params?.id as string)
  const { data: series } = await characterRequest.series(route.params?.id as string)
  

</script>

<template>
  <div class="container">
    <h5>DETAILS</h5>
    <NuxtImg
      v-if="!!characterStore.details?.image"
      :src="characterStore.details.image"
      width="250px"
    />
    <h3>{{ characterStore.details?.name }}</h3>
    <p>{{ characterStore.details?.description }}</p>
    <div>
      <a
        v-for="(url, i) in characterStore.details?.urls" 
        :key="i"
        :href="url.url"
        target="_blank"
      >{{ url.type }}</a>
    </div>
  </div>

  <hr>

  <div v-if="!!comics" class="flex-container">
    <h5>COMICS</h5>
    <br>
    <div 
      v-for="comic in comics.slice(0, 8)" 
      :key="comic.id"
      >
      <NuxtImg
        :src="comic.image"
        width="150px"
      />
      <b>{{ comic.title }}</b>
    </div>
  </div>

  <hr>

  <div v-if="!!series" class="flex-container">
    <h5>SERIES</h5>
    <br>
    <div 
      v-for="serie in series.slice(0, 8)" 
      :key="serie.id"
      >
      <NuxtImg
        :src="serie.image"
        width="150px"
      />
      <b>{{ serie.title }}</b>
    </div>
  </div>

</template>

<style>
a, a:active, a:visited, a:hover {
  border: 1px solid darkblue;
  text-decoration: none;
  color: darkblue;
  margin: 0px 10px;
  padding: 5px;
}
.container {
  background-color: DodgerBlue;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  background-color: DodgerBlue;
}

.flex-container > div {
  background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
  font-size: 30px;
}
</style>