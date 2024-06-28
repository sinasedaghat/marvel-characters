import type { 
  TCharactersListResponse, TCharactersDataResult, PurgeCharacter,
  TCharactersComicsResponse, TCharactersComicsDataResult, PurgeComics,
  TCharactersSeriesResponse, TCharactersSeriesDataResult, PurgeSeries
} from '~/types/characters'

class charactersModels {
  private _charactersCounte = 0

  get charactersCounte() {
    return this._charactersCounte;
  }

  set charactersCounte(count: number) {
    this._charactersCounte = count;
  }

  private _imageURL(thumbnail: Record<"path" | "extension", string>): string {
    return `${thumbnail.path}.${thumbnail.extension}`
  }

  charactersList(resp: TCharactersListResponse): Array<PurgeCharacter> {
    this.charactersCounte = resp.data.total
    const purge: Array<PurgeCharacter> = 
      resp.data.results.reduce((character: Array<PurgeCharacter>, item: TCharactersDataResult) => {
        return [
          ...character,
          {
            id: item.id,
            name: item.name,
            description: item.description,
            resourceURI: item.resourceURI,
            image: this._imageURL(item.thumbnail),
            urls: [ ...item.urls ]
          }
        ]
      }, [])
    return purge
  }

  characterDetails(resp: TCharactersListResponse): PurgeCharacter {
    return {
      id: resp.data.results[0].id,
      name: resp.data.results[0].name,
      description: resp.data.results[0].description,
      resourceURI: resp.data.results[0].resourceURI,
      image: `${resp.data.results[0].thumbnail.path}.${resp.data.results[0].thumbnail.extension}`,
      urls: [ ...resp.data.results[0].urls ]
    }
  }

  characterComics(resp: TCharactersComicsResponse): Array<PurgeComics> {
    return resp.data.results.reduce((comics: Array<PurgeComics>, item: TCharactersComicsDataResult ) => {
      return [
        ...comics,
        {
          id: item.id,
          digitalId: item.digitalId,
          title: item.title,
          description: item.description,
          image: this._imageURL(item.thumbnail),
        }
      ]
    }, [])
  }

  characterSeries(resp: TCharactersSeriesResponse): Array<PurgeSeries> {
    return resp.data.results.reduce((series: Array<PurgeSeries>, item: TCharactersSeriesDataResult) => {
      return [
        ...series,
        {
          id: item.id ,
          title: item.title ,
          description: item.description || '',
          image: this._imageURL(item.thumbnail)
        }
      ]
    }, [])
  }
}

export default new charactersModels()