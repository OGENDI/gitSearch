import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubserviceService } from '../githubservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  userName = '';

  constructor( public githubService:GithubserviceService, private router:Router) { }

  getUser(){
    this.router.navigate(['/display', this.userName]);
    this.githubService.searchUser(this.userName).then((res)=>{
      console.log(res);
    }).catch(errors =>{
      console.error(errors);
    })

  }



  ngOnInit(): void {
  }

}
