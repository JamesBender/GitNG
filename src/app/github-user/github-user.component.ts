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
    /*this.users = [{
      "login": "JamesBender",
      "id": 49018,
      "avatar_url": "https://avatars1.githubusercontent.com/u/49018?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/JamesBender",
      "html_url": "https://github.com/JamesBender",
      "followers_url": "https://api.github.com/users/JamesBender/followers",
      "following_url": "https://api.github.com/users/JamesBender/following{/other_user}",
      "gists_url": "https://api.github.com/users/JamesBender/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/JamesBender/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/JamesBender/subscriptions",
      "organizations_url": "https://api.github.com/users/JamesBender/orgs",
      "repos_url": "https://api.github.com/users/JamesBender/repos",
      "events_url": "https://api.github.com/users/JamesBender/events{/privacy}",
      "received_events_url": "https://api.github.com/users/JamesBender/received_events",
      "type": "User",
      "site_admin": false,
      "name": "James Bender",
      "company": null,
      "blog": "www.jamescbender.com",
      "location": null,
      "email": null,
      "hireable": null,
      "bio": null,
      "public_repos": 95,
      "public_gists": 100,
      "followers": 44,
      "following": 29,
      "created_at": "2009-01-24T19:44:35Z",
      "updated_at": "2017-12-17T23:39:43Z"
    }];*/
  }

}
