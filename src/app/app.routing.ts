import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { ExploreComponent } from "./explore/explore.component";
import { HomeComponent } from "./home/home.component";
import { PostsComponent } from "./home/posts/posts.component";
import { AuthGuard } from "./shared/guards/auth-guard";
import { SignInComponent } from "./users/sign-in/sign-in.component";
import { SignUpComponent } from "./users/sign-up/sign-up.component";


const routes: Route[] = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path:'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'explore', component: ExploreComponent}
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting{}
