import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoriesComponent } from './categories/categories.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AuthCanActivateGuard } from './guards/auth-can-activate.guard';
import { AuthCanDeactivateGuard } from './guards/auth-can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canDeactivate: [AuthCanDeactivateGuard]
  },
  // { 
  //   path: 'user/:id/:name', 
  //   component: UserComponent,
  // },
  {
    path: 'users', // router-outlet 
    component: UsersComponent,
    canActivate: [AuthCanActivateGuard],
    canActivateChild: [AuthCanActivateGuard],
    children: [
      {
        path: ':id/:name',
        component: UserComponent,
      },
      {
        path: ':id/:name/edit',
        component: EditUserComponent,
        canDeactivate: [AuthCanDeactivateGuard]
      }
    ]
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
