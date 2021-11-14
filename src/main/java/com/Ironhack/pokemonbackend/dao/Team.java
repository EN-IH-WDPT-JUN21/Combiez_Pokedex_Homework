package com.Ironhack.pokemonbackend.dao;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long trainer;

    private Integer[] pokemon;


    public Team(Long trainer, Integer[] pokemon) {
        this.trainer = trainer;
        this.pokemon = pokemon;
    }
}
