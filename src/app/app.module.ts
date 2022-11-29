import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HighlightCardDirective } from './shared/directives/highlight-card.directive';
import { UnlessDirective } from './shared/directives/structural-directive/unless.directive';
import { ShowDropdownDirective } from './shared/directives/show-dropdown.directive';
import { DropdownDirective } from './shared/directives/dropdown-directive/dropdown.directive';

import { HttpClientModule } from '@angular/common/http';
import { ExploreComponent } from './explore/explore.component';
import { PostsComponent } from './posts/posts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostViewComponent } from './post-view/post-view.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HighlightCardDirective,
    UnlessDirective,
    ShowDropdownDirective,
    DropdownDirective,
    ExploreComponent,
    PostsComponent,
    DashboardComponent,
    PostEditComponent,
    PostViewComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
