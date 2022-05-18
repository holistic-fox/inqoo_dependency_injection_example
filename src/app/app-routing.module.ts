import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstPageComponent} from "./modules/first/pages/first-page/first-page.component";
import {SecoundPageComponent} from "./modules/secound/pages/secound-page/secound-page.component";

const routes: Routes = [
  {path: 'first-page', component: FirstPageComponent},
  {path: 'second-page', component: SecoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
