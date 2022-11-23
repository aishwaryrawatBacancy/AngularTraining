import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HighlightCardDirective } from './shared/directives/highlight-card.directive';
import { UnlessDirective } from './shared/directives/structural-directive/unless.directive';
import { ShowDropdownDirective } from './shared/directives/show-dropdown.directive';

import { HttpClientModule } from '@angular/common/http';
import { ExploreComponent } from './explore/explore.component';
import { PostsComponent } from './home/posts/posts.component';
import { AppRoutingModule } from './app-routing.module';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { PreviewPostComponent } from './user-posts/preview-post/preview-post.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HighlightCardDirective,
    UnlessDirective,
    ShowDropdownDirective,
    ExploreComponent,
    PostsComponent,
    UserPostsComponent,
    PreviewPostComponent,
    UserLoginComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
