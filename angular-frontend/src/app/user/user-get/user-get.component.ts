import { UserService } from './../user.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css']
})
export class UserGetComponent implements OnInit {
  users:User[];
  constructor(private us:UserService) { }

  
  ngOnInit(): void {
    this.us.getUsers().subscribe((data: User[])=>{
      this.users = data;
    });
  }

  deleteUser(id, index) {  
    this.us.deleteUser(id).subscribe(res => { 
      this.users.splice(index, 1);  
    });  
  }
}
