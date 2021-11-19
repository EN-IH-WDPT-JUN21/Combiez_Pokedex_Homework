import { IPokemon } from './../interfaces/pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { InterfaceList } from '../interfaces/list';
import { Pokemon } from '../models/pokemon.model';


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

  searchPokemons(term: string): Observable<Pokemon> {
    if (!term.trim()) {
      return of();
    }
    return this.http.get<Pokemon>(`${this.baseUrl}/${term}`)
    .pipe(
      tap(x => x ? 
        console.log(`found pokemons matching "${term}"`)
        :
        console.log(`no pokemons matching "${term}"`)),
        catchError(this.handleError<Pokemon>('searchPokemons, []'))
      );
  }

  private handleError<T>(operation = 'operation', result?:T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
