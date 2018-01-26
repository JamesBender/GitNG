import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { GitHubUser } from '../GitHubUser';


@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {

  public users: GitHubUser[];

  constructor(private githubService: GithubService) { }

  ngOnInit() { 
    this.githubService.getUsers().subscribe(users => this.users = users);    
  }

}
