import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { TaskRoutingComponent } from './task-routing/task-routing.component';
import { Routes, RouterModule } from '@angular/router';
import { PostIndividualComponent } from './task-routing/post-individual/post-individual.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ResolveGuard } from './guards/resolve.guard';
import { AuthDeactiveGuard } from './guards/auth-deactive.guard';

const routes : Routes= [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'explore',
    component: ExploreComponent,
    
  },
  {
    path: 'post',
    component: TaskRoutingComponent,
    canActivate: [AuthGuard],
    resolve: {
      data: ResolveGuard
    }
  },
  {
    path: 'postShow',
    component: PostIndividualComponent,
    canDeactivate: [AuthDeactiveGuard],
  },
  { path: '**', component: HomeComponent },
]



@NgModule({
  declarations: [],
  imports: [
    
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
