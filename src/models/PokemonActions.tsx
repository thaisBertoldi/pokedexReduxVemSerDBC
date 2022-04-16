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

export interface DetailDTO{
    id: number;
    name: string;
    abilities: [{}];
    height: number;
    stats: [{}];
    weight: number;
    types: [{
        type: {
            name: string
        }
    }];
}