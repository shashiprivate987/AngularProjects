import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  //user: any;
  @Input('user') user: User;
  constructor() {
    

   }

  ngOnInit() {
    /*this.user = {
      name: this.userObj.name,
      title: this.userObj.title,
      address: this.user.address,
      phone: this.user.phone
    };*/
  }

  isavailable = false;
  months = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September",
  "October", "November", "December"];

}
