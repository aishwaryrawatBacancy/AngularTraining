import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { PostsDataComponent } from './posts-data/posts-data.component';
import { PostDataComponent } from './post-data/post-data.component';
import { AuthActivateGuard } from './guard/auth-activate.guard';
import { DefaultComponent } from './default/default.component';
import { PostsDataGuard } from './guard/posts-data.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component'
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  { path: '', component: DefaultComponent },
  { path: 'home', component: HomeComponent },
  { path: 'explore', component: ExploreComponent },
  {
    path: 'posts',
    component: PostsDataComponent,
    canActivate: [AuthActivateGuard],
    // canDeactivate: [AuthActivateGuard],
    resolve: { PostsData: PostsDataGuard },
  },
  {
    path: 'posts/:id',
    component: PostDataComponent,
    canActivate: [AuthActivateGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    children: [
      // {
      //   path: 'template-driven',
      //   component: DefaultComponent
      // },
      // {
      //   path: 'reactive',
      //   component: ReactiveFormComponent
      // }
    ]
  },
  {
    path: 'template-driven',
    component: TemplateDrivenFormComponent
  },
  {
    path: 'reactive',
    component: ReactiveFormComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  { // wild card route - Always add it in the bottom.
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
