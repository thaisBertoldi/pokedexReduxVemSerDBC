export interface InitialDTO{
    activePokemon:{},
    pokemonsToList: [{
        name: string,
        url: string
    }],
    pokemonsDetails:[
       
    ]
}

export interface PokemonsDetailsDTO{
    id: number;
    name: string;
    types: [{
        type: {name: string}
    }]
}