import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddpostComponent } from "../app/addpost/addpost.component";
import { MainComponent } from "../app/main/main.component";
import { PostComponent } from "../app/post/post.component";

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'addpost', component: AddpostComponent},
  {path:'post/:id', component: PostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:"enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
