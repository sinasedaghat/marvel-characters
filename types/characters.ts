
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

export type TCharactersDataContent = TCharactersDataNumbers & {
  results: Array<TCharactersDataResult>
}

export interface CharactersListResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: TCharactersDataContent 
}

export interface PurgeCharacter {
  id: number;
  name: string;
  description: string;
  resourceURI: string;
  image: string
}

export type TPurgeCharactersData = TCharactersDataNumbers & {
  item: Array<PurgeCharacter>
}