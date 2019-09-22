import { gql } from "apollo-boost";

export const FETCH_CHARACTER = gql`
  query($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
        dimension
        created
      }
      location {
        name
        dimension
        created
      }
      image
      episode {
        name
      }
      created
    }
  }
`;

export const FETCH_CHARACTERS = gql`
query fetchCharacters($page: Int!){      
  characters (page: $page) {
    results {
      id
      name
      image
      species
    }
  }
}
`;


export const FETCH_EPISODES = gql`
query fetchEpisodes($page: Int!){
  episodes(page: $page){
    results {
        id
        name
        air_date
        episode
        created
    }
  }
}
`

export const FETCH_LOCATIONS = gql`
query fetchLocations($page: Int!){
  locations(page: $page){
    results {
        id
        name
        type
        dimension
        created
    }
  }
}
`