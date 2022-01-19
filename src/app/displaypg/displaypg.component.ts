import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GithubserviceService } from '../githubservice.service';

@Component({
  selector: 'app-displaypg',
  templateUrl: './displaypg.component.html',
  styleUrls: ['./displaypg.component.css']
})
export class DisplaypgComponent implements OnInit {
  userText: any;
  apiResults: any;
  repositories: any;

  constructor( public githubService:GithubserviceService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    if( this.userText = this.route.snapshot.paramMap.get('query') !== null ){
      this.userText = this.route.snapshot.paramMap.get('query');
      this.githubService.searchUser(this.userText).then(( res:any)=>{        
          this.apiResults = res;
          // console.log(this.apiResults)        
      }).catch(console.error)
    }

    if( this.userText = this.route.snapshot.paramMap.get('query') !== null ){
      this.userText = this.route.snapshot.paramMap.get('query');
      this.githubService.getRepos(this.userText).then(( res:any)=>{        
          this.repositories = res;
          console.log(this.repositories)        
      }).catch(console.error)
    }

  }

}
