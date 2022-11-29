import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HighlightCardDirective } from './shared/directives/highlight-card.directive';
import { UnlessDirective } from './shared/directives/structural-directive/unless.directive';
import { AddClassCardDirective } from './shared/directives/add-class-card.directive';
import { DropdownDirective } from './shared/directives/dropdown-directive/dropdown.directive';

import { HttpClientModule } from '@angular/common/http';
import { ExploreComponent } from './explore/explore.component';
import { PostsComponent } from './home/posts/posts.component';
import {AppRoutingModule} from "./app-routing.module";
import { ExternalPostsComponent } from './app/external-posts/external-posts.component';
import { EditPostComponent } from './app/edit-post/edit-post.component';
import { PostCommentsComponent } from './app/post-comments/post-comments.component';
import {AuthGuard} from "./shared/guard/Auth-guard";
import {AuthService} from "./shared/services/auth-service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './app/register/register.component';
import { TempRegisterComponent } from './app/temp-register/temp-register.component';
import { MatchPwdDirective } from './shared/directives/match-pwd.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HighlightCardDirective,
    UnlessDirective,
    AddClassCardDirective,
    DropdownDirective,
    ExploreComponent,
    PostsComponent,
    ExternalPostsComponent,
    EditPostComponent,
    PostCommentsComponent,
    RegisterComponent,
    TempRegisterComponent,
    MatchPwdDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
