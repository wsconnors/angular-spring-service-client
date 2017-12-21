import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { UserModel } from '../models/user.model';

@Injectable()
export class AddUserService {
  private uri: string = 'http://localhost:8080/users';
  constructor(private http: Http) { }

  addUser(userModel: UserModel){
    // var options = '';
    this.http.post(this.uri, userModel).subscribe();

    // return this.http.post(this.url, userModel, options) as any;
  }
}
