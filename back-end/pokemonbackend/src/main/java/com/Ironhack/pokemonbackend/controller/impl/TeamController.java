package com.Ironhack.pokemonbackend.controller.impl;

import com.Ironhack.pokemonbackend.controller.dto.TeamDTO;
import com.Ironhack.pokemonbackend.controller.dto.TeamListDTO;
import com.Ironhack.pokemonbackend.dao.Team;
import com.Ironhack.pokemonbackend.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/teams")
@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
public class TeamController {

    @Autowired
    private TeamService teamService;

    @GetMapping("/{id}")
    public Team getTeam(@PathVariable(name="id") Long id){
        return teamService.getTeamByTrainer(id);
    }

    @GetMapping
    public List<TeamListDTO> getAllTeams() {
        return teamService.getAllTeams();
    }

//    Not needed as creating a trainer creates a team
    //@PostMapping
   // public Team createTeam(@RequestBody TeamDTO teamDTO){
   //     return teamService.newTeam(teamDTO);
    //}


    @PutMapping
    public Team amendTeam(@RequestBody TeamDTO teamDTO){
        return teamService.changeTeam(teamDTO);
    }


}
