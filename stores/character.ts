import type { PurgeCharacter } from '~/types/characters'

export const useCharacterStore = defineStore('character',  () => {
  const route = useRoute()
  const character = useCharacters()

  const characterDetails: Ref<PurgeCharacter | null> = ref(null)

  getDetails()
  
  const details = computed(() => {
    return characterDetails.value
  })

  async function getDetails(){ 
    if( !!route.params?.id && !!!characterDetails.value) {
      const { data } = await character.details(route.params?.id as string)
      characterDetails.value = data.value
    }
  }

  const fillDetails = (details: Ref<PurgeCharacter> | PurgeCharacter) => {
    characterDetails.value = toValue(details)
  }
  
  const $reset = () => {
    characterDetails.value = null
  }

  return {
    details,
    fillDetails,
    $reset
  }
})