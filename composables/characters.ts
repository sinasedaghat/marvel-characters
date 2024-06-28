import type { TCharactersListResponse, TCharactersComicsResponse, TCharactersSeriesResponse } from '~/types/characters'
import charactersModels from '~/models/characters'
import path from '~/constant/path.json'
import pagination from '~/constant/item-per-page-pagination.json'

export function useCharacters() {
  const appConfig = useAppConfig()
  const { isDesktop } = useDevice();

  const { baseURL, apikey } = appConfig
  const itemPerPage = isDesktop ? pagination.desktop.charecters : pagination.mobile.charecters

  const params: {[k: string]: number | string} = {
    ts: 1,
    apikey: apikey,
  }
  params.hash = privateHashCreator(params.ts, import.meta.env.VITE_PRIVATE_KEY, apikey)

  const list = async (page: number) => {
    const { data, error, status } = await useFetch(`${baseURL}${path.characters.list}`, {
      params: { ...params, limit: itemPerPage, offset: ((page - 1) * itemPerPage) },
      transform: (response) => {
        return charactersModels.charactersList(response as TCharactersListResponse )
      }
    })
    const count = charactersModels.charactersCounte
    return { data, status, count }
  }

  const details = async (identifier: string) => {
    const { data, error, status } = await useFetch(`${baseURL}${URLModifier(path.characters.details, '{id}', identifier)}`, {
      params,
      transform: (response) => {
        return charactersModels.characterDetails(response as TCharactersListResponse)
      }
    })
    return { data, status }
  }

  const comics = async (identifier: string) => {
    const { data, error, status } = await useFetch(`${baseURL}${URLModifier(path.characters.comics, '{id}', identifier)}`, {
      params,
      transform: (response) => {
        return charactersModels.characterComics(response as TCharactersComicsResponse)
      }
    })
    return { data, status }
  }

  const series = async (identifier: string) => {
    const { data, error, status } = await useFetch(`${baseURL}${URLModifier(path.characters.series, '{id}', identifier)}`, {
      params,
      transform: (response) => {
        return charactersModels.characterSeries(response as TCharactersSeriesResponse)
      }
    })
    return { data, status }
  }

  return {
    list,
    details,
    comics,
    series
  }
}