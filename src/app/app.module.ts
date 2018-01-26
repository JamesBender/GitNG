import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GithubUserComponent } from './github-user/github-user.component';
import { GithubService } from './github.service';

@NgModule({
  declarations: [
    AppComponent,
    GithubUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
