import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';  
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  angForm: FormGroup;  
  constructor(private route: ActivatedRoute, private router: Router,private fb: FormBuilder, private us: UserService) {  
    this.createForm();  
  }  
  createForm() {  
    this.angForm = this.fb.group({  
      UserName: ['', Validators.required ],  
      UserLastName: ['', Validators.required ]
    });  
  }  
  addUser(UserName, UserLastName) {  
    this.us.addUser(UserName, UserLastName);  
    this.router.navigate(['users']);
  } 
  ngOnInit() {  

  }  

}
