import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostViewComponent } from './post-view/post-view.component';
import { PostsComponent } from './posts/posts.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { 
    path: 'dashboard', 
    component: DashboardComponent 
  }, 
  { 
    path: 'posts', 
    component: PostsComponent 
  },
  {
    path: 'post/view',
    component: PostViewComponent
  },
  { 
    path: 'post/:id', 
    component: PostEditComponent 
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }