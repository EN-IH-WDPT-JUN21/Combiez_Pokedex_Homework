import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../service/trainer.service';
import { Trainer } from '../models/trainer';

@Component({
  selector: 'app-trainer-create',
  templateUrl: './trainer-create.component.html',
  styleUrls: ['./trainer-create.component.css']
})
export class TrainerCreateComponent implements OnInit {

  trainer : Trainer = this.newTrainer();

  constructor(private trainerService: TrainerService) {}

  ngOnInit(): void {
  }

  private newTrainer() : Trainer {
    return  {
      id: 0, 
      name: "",
      hobby: "",
      age: 0,
      photo: ""
    }
  }

  onSubmit(): void {
    this.trainerService
    .createTrainer(this.trainer)
    .subscribe(
      data => {
        console.log(data)
        this.trainer = this.newTrainer();
      }, 
      error => console.log(error),
      () => console.log('Trainer stored')
    );
  }
}
