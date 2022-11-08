import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoriesComponent } from './categories/categories.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditUserComponent } from './edit-user/edit-user.component';

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
    component: CategoriesComponent 
  },
  {
    path: 'users', // router-outlet 
    component: UsersComponent,
    children: [
      { 
        path: ':id/:name', 
        component: UserComponent,
      },
      {
        path: ':id/:name/edit',
        component: EditUserComponent
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
