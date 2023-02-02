import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users: Users[]=[];
  totalUsers: number=0;
  usersWithRole: number=0;
  usersAdmin: number=0;
  lastuser:string="";
  
  constructor(private userservice: UserserviceService) { }

  ngOnInit() {
    this.userservice.getVista().subscribe(users => {
      this.users = users;
      this.totalUsers = this.users.length;
      this.usersWithRole = this.users.filter(user => user.role === 'User').length;
      this.usersAdmin = this.users.filter(user => user.role === 'Admin').length;
      this.lastuser=this.users[this.totalUsers-1].firstname;
    });
  }
}
