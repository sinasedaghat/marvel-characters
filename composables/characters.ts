import type { CharactersListResponse } from '~/types/characters'
import path from '~/constant/path.json'
import charactersModels from '~/models/characters'

export function useCharacters() {
  const appConfig = useAppConfig()
  const { baseURL, apikey } = appConfig

  const params: {[k: string]: number | string} = {
    ts: 1,
    apikey: apikey,
  }
  params.hash = privateHashCreator(params.ts, import.meta.env.VITE_PRIVATE_KEY, apikey)

  const list = async () => {
    const { data, error, status } = await useFetch(`${baseURL}${path.characters}`, {
      params,
      transform: (response) => {
        return charactersModels.charactersList(response as CharactersListResponse )
      }
    })
    return { data, status }
  }




  const details = async (identifier: string) => {
    const { data, error, status } = await useFetch(`${baseURL}${URLModifier(path.character, '{id}', identifier)}`, {
      params,
      transform: (response) => {
        console.log('character details [response] ===>', response)
        return 'ridi'
      }
    })
    return { data, status }
  }





  const logger = () => {
    console.log('baseURL ====>', baseURL)
    console.log('apiKey ====>', apikey)
  }

  return {
    logger,
    list,
    details
  }
}