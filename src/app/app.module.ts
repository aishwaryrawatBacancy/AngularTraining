import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PostsComponent } from './home/posts/posts.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DropdownDirective } from './shared/attribute-directive/dropdown.directive';
import { HighlightCardDirective } from './shared/directives/highlight-card.directive';
import { UnlessDirective } from './shared/directives/structural-directive/unless.directive';
import { PostsDataComponent } from './posts-data/posts-data.component';
import { PostDataComponent } from './post-data/post-data.component';
import { DefaultComponent } from './default/default.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DropdownDirective,
    HighlightCardDirective,
    UnlessDirective,
    PostsComponent,
    PostsDataComponent,
    PostDataComponent,
    DefaultComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
