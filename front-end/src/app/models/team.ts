export interface Team {
    id: number;
    owner: string;
    pokemons: string[];
}

export const teams = [
    {
      id: 1, 
      owner: 'Ash',
      pokemons: ['Pikachu', 'Bulbasaur', 'Charmander']
    },
    {
      id: 2,
      owner: 'Misty',
      pokemons: ['Squirtle', 'Charmander', 'Pikachu']
    },
    {
      id: 3,
      owner: 'Brock',
      pokemons: ['Pikachu', 'Bulbasaur', 'Charmander']
    }
];