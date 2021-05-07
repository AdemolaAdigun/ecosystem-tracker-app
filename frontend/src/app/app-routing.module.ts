import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EcosystemsComponent} from '../pages/ecosystem/ecosystem.component';

const routes: Routes = [
  {path: '', component: EcosystemsComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
