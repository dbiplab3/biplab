import { Injectable } from '@angular/core';
import { Register } from './register';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  myDetails: Register;

  constructor() { }

  setData(userObject:Register)
  {
      this.myDetails=userObject;
  }
  getData():Register
  {
    return this.myDetails;
  }
}
