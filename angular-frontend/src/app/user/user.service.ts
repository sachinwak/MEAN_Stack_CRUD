import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:3000/users';  

  constructor(private http: HttpClient) { }  

  addUser(UserName, UserLastName) {  
    const obj = {  
      UserName,  
      UserLastName
    };  
    this.http.post(`${this.uri}/add`, obj).subscribe(
        res => console.log('Done')
    );  
  }  

  getUsers() {  
    return this.http.get(`${this.uri}`);  
  }  

  editUser(id) {  
    return this.http.get(`${this.uri}/edit/${id}`);  
  } 
    
  updateUser(UserName, UserLastName, id) { 
    const obj = {  
      UserName,  
      UserLastName
    };  
    this.http.post(`${this.uri}/update/${id}`, obj).subscribe(
      res => console.log('Done')
    );  
  }  

  deleteUser(id) {  
    return this.http.get(`${this.uri}/delete/${id}`);  
  }  
}


