export interface InitialDTO {
  activePokemon: {};
  pokemonsToList: [
    {
      name: string;
      url: string;
    }
  ];
  pokemonsDetails: [];
  loading: boolean;
  error: boolean;
}

export interface PokemonsDetailsDTO {
  id: number;
  name: string;
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
  height: number;
  stats: [
    {
      base_stat: number;
    }
  ];
  weight: number;
  types: [
    {
      type: {
        name: number;
      };
    }
  ];
}

export interface sortDTO {
  id: number;
}

export interface pokeDTO {
  label: string;
  value: string;
}

export interface pokeSelecionadoDTO {
  name: string;
}

export interface ColorDTO {
  name: string;
}
export interface PokemonsFilterDetail {
  id: string | number;
}

export interface PokemonToListDTO {
  pokemonsToList: [{
    url: string,
  }]
}
