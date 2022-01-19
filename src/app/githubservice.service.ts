
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class GithubserviceService {
  // url:any='https://api.github.com/users';
  constructor(private http:HttpClient) { }

  public searchUser(username:any){
    return new Promise((resolve, reject) =>{
      this.http.get(`https://api.github.com/users/${username}`).subscribe(
        (res)=>{
          resolve(res);
        },
        (error)=>{
          reject(error);
        }
      );
    })
  }

  public getRepos(username:any){
    return new Promise((resolve, reject) =>{
      this.http.get(`https://api.github.com/users/${username}/repos`).subscribe(
        (res)=>{
          resolve(res);
        },
        (error)=>{
          reject(error);
        }
      );
    })
  }


}
