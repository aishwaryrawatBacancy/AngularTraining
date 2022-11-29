import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ExploreComponent} from "./explore/explore.component";
import {ExternalPostsComponent} from "./app/external-posts/external-posts.component";
import {EditPostComponent} from "./app/edit-post/edit-post.component";
import {PostCommentsComponent} from "./app/post-comments/post-comments.component";
import {AuthGuard} from "./shared/guard/Auth-guard";
import {RegisterComponent} from "./app/register/register.component";
import {TempRegisterComponent} from "./app/temp-register/temp-register.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'explore',
    component: ExploreComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'td-register',
    component: TempRegisterComponent
  },
  {
    path: 'posts',
    component: ExternalPostsComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path: ':id/edit',
        component: EditPostComponent
      },
      {
        path: 'comments',
        component: PostCommentsComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
