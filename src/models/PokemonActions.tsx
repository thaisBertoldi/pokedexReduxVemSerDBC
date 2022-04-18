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
  abilities: [{}];
  height: number;
  stats: [{}];
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
  url: string;
}
