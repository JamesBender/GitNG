import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GitHubUser } from './GitHubUser';
import { of } from 'rxjs/Observable/of';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubService {

  private gitApiUrl = 'https://api.github.com/users';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<GitHubUser[]> {    
    return this.httpClient.get<GitHubUser[]>(this.gitApiUrl)
      .pipe(catchError(this.handleError<GitHubUser[]>([])));
  }

  handleError<T>(returnData?: T) {
    return (error: any) => {
      console.log(error.message);
      return of(returnData as T);
    }
  }
}
