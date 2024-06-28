<script setup lang="ts">
import type { PurgeCharacter } from '~/types/characters'
import pagination from '~/constant/item-per-page-pagination.json'

  const characterRequest = useCharacters()
  const { fillDetails } = useCharacterStore()
  const { isDesktop } = useDevice();
  
  const page: Ref<number> = ref(1)
  const itemPerPage = isDesktop ? pagination.desktop.charecters : pagination.mobile.charecters
  const totalCount: Ref<number> = ref(0)

  const list: Ref<PurgeCharacter[] | null> = ref(null)

  const getCharacter = async (page: number) => {
    list.value = null
    const { data, count } = await characterRequest.list(page)
    list.value = data.value
    totalCount.value = count
  }

  const seeDetails = async (character: PurgeCharacter) => {
    await fillDetails(character)
    await navigateTo({ name: 'character-id', params: { id: character.id } })
  }

  watch(
    page,
    (newValue) => {
      getCharacter(toValue(newValue))
    }
  )

  getCharacter(toValue(page))

</script>

<template>
  <div>
    <div class="flex-container">
      <div 
        v-for="character in list" 
        :key="character.id"
        @click="seeDetails(character)"
        >
        <NuxtImg
          :src="character.image"
          width="100px"
        />
        <b>{{ character.name }}</b>
      </div>
    </div>

    <div v-if="totalCount">
      <button :class="{ 'disabled-pointer': !!!(page - 1) }" :disabled="!!!(page - 1)" @click="page -= 1">pre</button>
      <button :class="{ 'disabled-pointer': ((totalCount / itemPerPage) - page) < 1 }" :disabled="((totalCount / itemPerPage) - page) < 1" @click="page += 1">next</button>
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

.disabled-pointer {
  cursor: not-allowed;
}

button{
  border: 1px solid darkblue;
  margin: 10px 30px;
}
</style>