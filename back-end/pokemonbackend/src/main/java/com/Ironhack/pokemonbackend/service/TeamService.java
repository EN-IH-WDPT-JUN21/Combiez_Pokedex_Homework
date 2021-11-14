package com.Ironhack.pokemonbackend.service;

import com.Ironhack.pokemonbackend.controller.dto.TeamDTO;
import com.Ironhack.pokemonbackend.dao.Team;
import com.Ironhack.pokemonbackend.dao.Trainer;
import com.Ironhack.pokemonbackend.repository.TeamRepository;
import com.Ironhack.pokemonbackend.repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class TeamService {

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private TrainerRepository trainerRepository;


    public Team getTeamByTrainer(Long id) {
        Optional<Trainer> trainer = trainerRepository.findById(id);

        if(trainer.isPresent()){
            Optional<Team> team = teamRepository.findByTrainer(id);
            if(team.isPresent()){
                return team.get();
            }else{
                return null;
            }
        }else{
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No trainer matching that Id");
        }
    }

    public Team newTeam(TeamDTO teamDTO) {
        Optional<Trainer> trainer = trainerRepository.findById(teamDTO.getTrainer());
        if(trainer.isPresent()) {
            Team team = new Team(teamDTO.getTrainer(), teamDTO.getPokemon());
            return teamRepository.save(team);
        }else{
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No trainer matching that Id");
        }
    }

    public Team changeTeam(TeamDTO teamDTO) {
        Optional<Team> team = teamRepository.findByTrainer(teamDTO.getTrainer());

        if(team.isPresent()){
            team.get().setPokemon(teamDTO.getPokemon());
            return teamRepository.save(team.get());
        }else{
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No team matching that Id");
        }
    }
}
