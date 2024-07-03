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
    const { data } = await characterRequest.list(page)
    list.value = data.value?.purge || []
    totalCount.value = data.value?.total || 0
  }

  const seeDetails = async (character: PurgeCharacter) => {
    await fillDetails(character)
    await navigateTo({ name: 'character-id', params: { id: character.id } })
  }

  watch(
    page,
    (newValue) => {
      console.log('watch page')
      getCharacter(toValue(newValue))
    }
  )

  getCharacter(toValue(page))
</script>

<template>
  <div>
    <div class="grid gap-4 grid-cols-4 w-[100rem] mx-auto">
      <div
        v-for="character in list" 
        :key="character.id"
        class="border border-grey rounded-2xl p-4 hover:cursor-pointer"
        @click="seeDetails(character)"
      >
        <Card 
          :image="character.image"
          :name="character.name"
        />
      </div>
    </div>

    {{ totalCount }}
    <div v-if="totalCount">
      <button :class="{ 'disabled-pointer': !!!(page - 1) }" :disabled="!!!(page - 1)" @click="page -= 1">pre</button>
      <button :class="{ 'disabled-pointer': ((totalCount / itemPerPage) - page) < 1 }" :disabled="((totalCount / itemPerPage) - page) < 1" @click="page += 1">next</button>
    </div>


  </div>
</template>

<style>
.disabled-pointer {
  cursor: not-allowed;
}

button{
  border: 1px solid darkblue;
  margin: 10px 30px;
}
</style>