import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';  
import { FormGroup, FormBuilder, Validators } from '@angular/forms';  
import { ActivatedRoute, Router } from '@angular/router';  

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  angForm: FormGroup;  
 User: any = {};  
  constructor(private route: ActivatedRoute, private router: Router, private us: UserService, private fb: FormBuilder) {  
      this.createForm();  
 }  
  createForm() {  
    this.angForm = this.fb.group({  
      UserName: ['', Validators.required ],  
      UserLastName: ['', Validators.required ]
    });  
  }  
  ngOnInit() {  
    this.route.params.subscribe(params => {  
        this.us.editUser(params['id']).subscribe(res => {  
          this.User = res;
      });  
    });  
  }  

  updateUser(UserName, UserLastName) {  
    this.route.params.subscribe(params => { 
      this.us.updateUser(UserName, UserLastName, params['id']);  
      this.router.navigate(['users']);
    });
  }
}
