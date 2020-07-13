import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Test1Component} from './test1/test1.component';
import {Test2Component} from './test2/test2.component';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
  { path: 'test1', component: Test1Component },
  { path: 'test2', component: Test2Component },
  { path: '',   redirectTo: '/test1', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
