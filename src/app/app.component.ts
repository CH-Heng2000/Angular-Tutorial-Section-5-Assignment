import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'section5_assignment';

  evenGenerated = [];
  oddGenerated = [];

  onGameStarted(numData: {num : number}){

    if(numData.num % 2 == 0){
      console.log( numData.num + " is an even number.")
      this.evenGenerated.push(numData.num)
    }else{
      console.log( numData.num + " is an odd number.")
      this.oddGenerated.push(numData.num)
    }
  }

}
