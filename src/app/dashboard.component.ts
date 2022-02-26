import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service:UserService) { }
  user = { "firstName": "test", "lastName": "test", "email": "test@gmail.com", "password": "653523" }
  ngOnInit(): void {
    this.user=this.service.getData();
      console.log(this.user.firstName);
  }

}
