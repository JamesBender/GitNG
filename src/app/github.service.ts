import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GitHubUser } from './GitHubUser';
import { of } from 'rxjs/Observable/of';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/observable';

@Injectable()
export class GithubService {

  private gitApiUrl = 'https://api.github.com';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<GitHubUser[]> {    
    return this.httpClient.get<GitHubUser[]>(this.gitApiUrl + '/users')
      .pipe(catchError(this.handleError<GitHubUser[]>([])));
  }

  getUser(login: string): Observable<GitHubUser> {
    return this.httpClient.get<GitHubUser>(this.gitApiUrl + '/users/' + login)
      .pipe(catchError(this.handleError<GitHubUser>()));
  }

  handleError<T>(returnData?: T) {
    return (error: any) => {
      console.log(error.message);
      return of(returnData as T);
    }
  }
}
