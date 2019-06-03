import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //ngtitle = 'first-project';
  user: User;
  constructor(){
    this.user = new User();
    this.user.name = "Shashi";
    this.user.title = "SW Engg";
    this.user.address = "Nandidurga Road";
    this.user.phone = [
      '45325235',
      '3254234'
    ];

  }


}
