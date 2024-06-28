// import { defineStore } from 'pinia'
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
      console.log('call getDetails')
      const { data } = await character.details(route.params?.id as string)
      characterDetails.value = data.value
    }
  }

  const fillDetails = (details: Ref<PurgeCharacter> | PurgeCharacter) => {
    console.log('from fillDetails',toValue(details))
    characterDetails.value = toValue(details)
    
  }


  
  const $reset = () => {  // In the Option Store, it does not need to be defined and it is there by default, but In Setup Stores, you need to create your own $reset() method:
    // count.value = 0
  }



  
  return {
    details,
    fillDetails,
    $reset
  }
})