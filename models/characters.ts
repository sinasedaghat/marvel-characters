import type { CharactersListResponse, TCharactersDataResult, PurgeCharacter } from '~/types/characters'

class charactersModels {
  charactersList(resp: CharactersListResponse): Array<PurgeCharacter> {
    const purge: Array<PurgeCharacter> = 
      resp.data.results.reduce((character: Array<PurgeCharacter>, item: TCharactersDataResult) => {
        return [
          ...character,
          {
            id: item.id,
            name: item.name,
            description: item.description,
            resourceURI: item.resourceURI,
            image: `${item.thumbnail.path}.${item.thumbnail.extension}`
          }
        ]
      }, [])
    return purge
  }




  // characterDetails(resp: CharactersListResponse):  {}

}

export default new charactersModels()