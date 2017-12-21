import {Component, OnInit, Input} from '@angular/core';
import {UserModel} from '../../models/user.model';
import {AddUserService} from '../../services/add-user.service';

@Component({
  selector: 'app-user-input-table',
  templateUrl: './user-input-table.component.html',
  styleUrls: ['./user-input-table.component.css']
})
export class UserInputTableComponent implements OnInit {
  user: UserModel = {
    firstName: ""
  };


  constructor(private addUserService: AddUserService) {
  }

  ngOnInit() {
  }

  addUser(){
    console.log(this.user);
    // return this.addUserService.addUser(this.createUser());
    this.addUserService.addUser(this.user)
  }


}
