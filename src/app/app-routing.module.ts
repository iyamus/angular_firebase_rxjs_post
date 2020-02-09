import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddpostComponent } from "../app/addpost/addpost.component";
import { MainComponent } from "../app/main/main.component";
import { PostComponent } from "../app/post/post.component";

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'add', component: AddpostComponent},
  {path:'main', component: MainComponent},
  {path:'post', component: PostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
