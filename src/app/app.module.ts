import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { HighlightCardDirective } from './shared/directives/highlight-card.directive';
import { UnlessDirective } from './shared/directives/structural-directive/unless.directive';

import { HttpClientModule } from '@angular/common/http';
import { ExploreComponent } from './explore/explore.component';
import { PostsComponent } from './home/posts/posts.component';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule } from '@angular/router';
import { TaskRoutingComponent } from './task-routing/task-routing.component';
import { PostIndividualComponent } from './task-routing/post-individual/post-individual.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ResolveGuard } from './guards/resolve.guard';
import { FooterComponent } from './footer/footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TdformComponent } from './tdform/tdform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { PasswordvalidatorDirective } from './shared/directives/validation/passwordvalidator.directive';
import { EmailvalidatorDirective } from './shared/directives/validation/emailvalidator.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DropdownDirective,
    HighlightCardDirective,
    UnlessDirective,
    DropdownDirective,
    ExploreComponent,
    PostsComponent,
    TaskRoutingComponent,
    PostIndividualComponent,
    LoginComponent,
    FooterComponent,
    TdformComponent,
    ReactiveformComponent,
    PasswordvalidatorDirective,
    EmailvalidatorDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, ResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
