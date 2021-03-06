import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public getCurrentUser(){
    return  this.http.get(`${baseUrl}/current-user`);
  }

//generate token
public generateToken(loginData:any){
  
  return this.http.post(`${baseUrl}/generate-token`,loginData)
}

  //Login user: set token to localstorage
  public loginUser(token:any){
    localStorage.setItem('token', token);
    return true;
}

//isLogin: user is login or not
public isLoggedIn(){
  let tokenStr = localStorage.getItem('token');
  if(tokenStr==undefined || tokenStr=='' || tokenStr==null){
    return false;
  }else{
    return true;
  }
}

//logout: remove token from local storage
public logout(){
  localStorage.clear();
  return true;
}

//getToken from localstorage
public getToken(){
  return localStorage.getItem('token');
}

//set UserDetails
public setUser(user:any){
  localStorage.setItem('user',JSON.stringify(user));
}

//getUser
public getUser(){
  let userStr=localStorage.getItem("user");
  if(userStr != null){
    return JSON.parse(userStr);
  }else
  {
    this.logout();
    return null;
  }
}

//get userrole

public getUserRole(){
  let user = this.getUser();
  return user.authorities[0].authority;
}

}
