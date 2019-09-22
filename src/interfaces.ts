export interface CharacterData {
    characters: Characters;
}

export interface Characters {
    results: Character[]
}

export interface Character {
    id: number;
    name: string;
    image: string;
    species: string;
    // location:{
    //     name:string,
    //     dimension:string,
    //     created: string
    // }
}

export interface CharactersVariables {
    page: number
}

export interface MatchParams {
    id: string;
    name: string;
    image: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    // location: {
    //     name:string,
    //     dimension: string,
    //     created:string
    // }
}
export interface Char {
    character: MatchParams;
}
export interface MatchParamsId {
    id: number;
}

export interface EpisodeData {
    episodes: Episodes;
}

export interface Episodes {
    results: Episode[]
}

export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    // characters: string[];
    created: string;
}

export interface EpisodesVariables {
    page: number
}

export interface LocationData {
    locations: Locations;
}

export interface Locations {
    results: Location[]
}

export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    // residents: string[];
    created: string;

}

export interface LocationsVariables {
    page: number;
}

export interface OriginParams {
    name: string;
    dimension: string;
    created: string;
}

