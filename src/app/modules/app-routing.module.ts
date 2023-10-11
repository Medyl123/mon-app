import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HommeComponent } from '../homme/homme.component';

const appRoutes : Routes =[
  {path: 'home',component: HommeComponent},
  {path:'',redirectTo: 'home',pathMatch:'full'},
  {path:'**',redirectTo: 'home',pathMatch:'full'}

]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes,{
      anchorScrolling:'enabled'}),
   // CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
