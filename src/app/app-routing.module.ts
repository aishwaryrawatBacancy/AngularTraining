import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { AuthCanActiveGuard } from './guards/auth-can-active.guard';
import { NoAuthCanActiveGuard } from './guards/no-auth-can-active.guard';
import { HomeComponent } from './home/home.component';
import { DataResolver } from './resolve/data.resolver';
import { UserLoginComponent } from './user-login/user-login.component';
import { PreviewPostComponent } from './user-posts/preview-post/preview-post.component';
import { UserPostsComponent } from './user-posts/user-posts.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'posts', component: UserPostsComponent, canActivate: [AuthCanActiveGuard], resolve: { postList: DataResolver } },
  { path: 'previewPost', component: PreviewPostComponent, canActivate: [AuthCanActiveGuard] },
  { path: 'login', component: UserLoginComponent, canActivate: [NoAuthCanActiveGuard] },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }