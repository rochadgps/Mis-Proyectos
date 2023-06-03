import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Punto1Component } from './components/punto1/punto1.component';
import { AmazonComponent } from './components/amazon/amazon.component';

const routes: Routes = [
    {path: 'punto1', component: Punto1Component},
    {path: 'amazon', component: AmazonComponent},
    {path: '', redirectTo:"/punto1",pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
