import type { TCharactersListResponse, TCharactersComicsResponse, TCharactersSeriesResponse } from '~/types/characters'
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
    const { data, error, status } = await useFetch(`${baseURL}${path.characters.list}`, {
      params,
      transform: (response) => {
        return charactersModels.charactersList(response as TCharactersListResponse )
      }
    })
    return { data, status }
  }

  const details = async (identifier: string) => {
    const { data, error, status } = await useFetch(`${baseURL}${URLModifier(path.characters.details, '{id}', identifier)}`, {
      params,
      transform: (response) => {
        // console.log('character details [response] ===>', response)
        return charactersModels.characterDetails(response as TCharactersListResponse)
      }
    })
    return { data, status }
  }

  const comics = async (identifier: string) => {
    const { data, error, status } = await useFetch(`${baseURL}${URLModifier(path.characters.comics, '{id}', identifier)}`, {
      params,
      transform: (response) => {
        // console.log('character comics [response] ===>', response)
        return charactersModels.characterComics(response as TCharactersComicsResponse)
      }
    })
    return { data, status }
  }

  const series = async (identifier: string) => {
    const { data, error, status } = await useFetch(`${baseURL}${URLModifier(path.characters.series, '{id}', identifier)}`, {
      params,
      transform: (response) => {
        // console.log('character series [response] ===>', response)
        return charactersModels.characterSeries(response as TCharactersSeriesResponse)
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
    details,
    comics,
    series
  }
}