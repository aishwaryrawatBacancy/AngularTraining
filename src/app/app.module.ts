import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HighlightCardDirective } from './shared/directives/highlight-card.directive';
import { UnlessDirective } from './shared/directives/structural-directive/unless.directive';
import { DropdownDirective } from './shared/directives/dropdown-directive/dropdown.directive';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExploreComponent } from './explore/explore.component';
import { PostsComponent } from './home/posts/posts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRouting } from './app.routing';
import { SignUpComponent } from './users/sign-up/sign-up.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { AuthInterceptor } from './shared/services/auth.interceptor.service';
import { AuthGuard } from './shared/guards/auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HighlightCardDirective,
    UnlessDirective,
    DropdownDirective,
    ExploreComponent,
    PostsComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRouting
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
