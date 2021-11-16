package com.Ironhack.pokemonbackend.controller.impl;

import com.Ironhack.pokemonbackend.controller.dto.TeamDTO;
import com.Ironhack.pokemonbackend.dao.Team;
import com.Ironhack.pokemonbackend.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
