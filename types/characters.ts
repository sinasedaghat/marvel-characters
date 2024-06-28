
type TPermanentResponseData = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
}

type TCharactersDataNumbers = Record<"offset" | "limit" | "total" | "count", number>

type TCharactersDataResultMarvelUniverse = {
  available: number;
  returned: number;
  collectionURI: string
  items: Array<Record<"resourceURI" | "name", string>>
}

export type TCharactersDataResult = {
  id: number;
  name: string;
  description: string;
  modified: string;
  resourceURI: string;
  thumbnail: Record<"path" | "extension", string>;
  urls: Array<Record<"type" | "url", string>>;
  comics: TCharactersDataResultMarvelUniverse;
  stories: TCharactersDataResultMarvelUniverse & { items: Array<Record<"resourceURI" | "name" | "type", string>> };
  events: TCharactersDataResultMarvelUniverse;
  series: TCharactersDataResultMarvelUniverse
} 

export type TCharactersComicsDataResult = {
  id: number;
  digitalId: number;
  title: string;
  description: string;
  thumbnail: Record<"path" | "extension", string>;
  [k: string]: any
}

export type TCharactersSeriesDataResult = {
  id: number;
  title: string;
  description: string | null;
  thumbnail: Record<"path" | "extension", string>;
  [k: string]: any
}

export type TCharactersDataContent = TCharactersDataNumbers & {
  results: Array<TCharactersDataResult>
}

export type TCharactersListResponse = TPermanentResponseData & {
  data: TCharactersDataContent 
}

export interface PurgeCharacter {
  id: number;
  name: string;
  description: string;
  resourceURI: string;
  image: string;
  urls: Array<Record<"type" | "url", string>>
}

export type TPurgeCharactersData = TCharactersDataNumbers & {
  item: Array<PurgeCharacter>
}

export type TCharactersComicsDataContent = TCharactersDataNumbers & {
  results: Array<TCharactersComicsDataResult>
}

export type TCharactersComicsResponse = TPermanentResponseData & {
  data: TCharactersComicsDataContent
}

export interface PurgeComics {
  id: number;
  digitalId: number;
  title: string;
  description: string;
  image: string;
}

export type TCharactersSeriesDataContent = TCharactersDataNumbers & {
  results: Array<TCharactersSeriesDataResult>
}

export type TCharactersSeriesResponse = TPermanentResponseData & {
  data: TCharactersSeriesDataContent
}

export interface PurgeSeries {
  id: number;
  title: string;
  description: string;
  image: string;
}