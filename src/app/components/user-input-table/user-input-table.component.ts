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
    id: "",
    firstName: "User Name"
  };


  constructor(private addUserService: AddUserService) {
  }

  ngOnInit() {
  }

  createUser(): UserModel {
    return new UserModel(this.user.firstName, this.user.id);
  }

  addUser(): any {
    return this.addUserService.addUser(this.createUser());
  }


}
