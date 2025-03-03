import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ViewAllComponent } from './pages/view-all/view-all.component';
import { HomeBlogComponent } from './pages/home-blog/home-blog.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home-blog', component: HomeBlogComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'view-all', component: ViewAllComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
