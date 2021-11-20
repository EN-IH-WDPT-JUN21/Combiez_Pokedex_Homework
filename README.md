# Combiez_Pokedex_Homework
Angular and Spring Boot App


Trainer endpoints:-

GET - http://localhost:8080/trainers returns all trainers

GET - http://localhost:8080/trainers/{id} returns a specific trainer by trainer id, returns error text if not present.

POST - http://localhost:8080/trainers creates a new trainer and returns the trainer. Creates an empty Team, Takes a request body of:-

{

"name": "MikeTrainer" (text),

"age": 22 (number),

"hobby": "Coding and Pokemon" (text),

"photo": "PhotoURL" (text)

}

DELETE - http://localhost:8080/trainers/{id} deletes the trainer, and also deletes the team associated with that trainer if one exists, returns a confirmation String.

Team Endpoints:-

GET - http://localhost:8080/teams/{id} returns the team associated with the trainer id, it is not possible to get a team directly by team id, only by trainer id. Returns error text if trainer does not exist, returns null if the trainer exists but no team exists yet.

PUT - http://localhost:8080/teams amends the team and returns the amended team, if the team does not exist then returns an error. Takes same request body as POST method:-

{

"trainer": 3 (number, representing trainer id),

"pokemon": [ (integer array)

    189,
    
    28,
    
    377,
    
    479,
    
    5
    
]
}
