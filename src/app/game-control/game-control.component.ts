import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() gameStarted = new EventEmitter<{num : number}>();
  incremental : number = 0;
  runner : any;
  startGame(){
    console.log('Start game clicked')
    this.runner = setInterval(()=>{
      this.gameStarted.emit({
        num: this.incremental
      })
      this.incremental+=1;
      console.log("Incremental now is : " + this.incremental)
    },1000)
  }

  pauseGame(){
    console.log('Pause game clicked.')
    clearInterval(this.runner)
  }
}
