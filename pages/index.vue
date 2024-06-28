<script setup lang="ts">
import type { PurgeCharacter } from '~/types/characters'
  const characterRequest = useCharacters()
  const { fillDetails } = useCharacterStore()

  const { data: list } = await characterRequest.list()


  const seeDetails = async (character: PurgeCharacter) => {
    await fillDetails(character)
    await navigateTo({ name: 'character-id', params: { id: character.id } })
  }
  // import { NuxtImg } from '#build/components';

  // const { privateHashCreator } = use 
  // privateHashCreator('1', '33bd0222620b5d14cb07bdb1ef074178c25db836', '74afbd58d2fe37555ad891f318eff3a2')
  // const { isDesktop } = useDevice();
  // // const { value } = useLocalStorage('test', 1);
  // const value = ref(useLocalStorage('test', 1))
  // console.log('value', value.value)
  // console.log(isDesktop)
  // value.value += 3






</script>

<template>
  <!-- <div class="bg-primary p-custom-padding">
    <h1 class="text-secondary">Hello, Nuxt 3 with Tailwind CSS!</h1>
    {{ privateHashCreator('1', '33bd0222620b5d14cb07bdb1ef074178c25db836', '74afbd58d2fe37555ad891f318eff3a2') }}
    <br />
    descktop ====> {{ isDesktop }}
    <Icon name="gala:airplay" color="black" /> https://icones.js.org/
  </div> -->







  <div>
    <!-- {{ data }} -->
    <div class="flex-container">
      <div 
        v-for="character in list" 
        :key="character.id"
        @click="seeDetails(character)"
        >
        <!-- @click="navigateTo({ name: 'character-id', params: { id: character.id } })" -->
        <NuxtImg
          :src="character.image"
          width="100px"
        />
        <b>{{ character.name }}</b>
        {{ character.id }}
        <!-- <p>{{ character.description }}</p> -->
      </div>
    </div>
  </div>
</template>

<style>
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