import { IPokemon } from './../interfaces/pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterfaceList } from '../interfaces/list';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient){ }

  getAllPokemon():Observable<InterfaceList> {
    return this.http.get<InterfaceList>('https://pokeapi.co/api/v2/pokemon?limit=151');  // The original pokemons are 151

  }

  getPokemonById(id: number):Observable<InterfaceList> {
    return this.http.get<InterfaceList>(`${this.baseUrl}/${id}`);
  }

  getPokemonByName(name: string):Observable<InterfaceList> {
    return this.http.get<InterfaceList>(`${this.baseUrl}/${name}`);
  }
  
  getPokemon(url:string):Observable<IPokemon> {
    return this.http.get<IPokemon>(url);
  }

}
