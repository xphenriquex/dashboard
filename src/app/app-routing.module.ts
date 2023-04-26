import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashComponent } from './dash/dash.component';
import { TreeComponent } from './tree/tree.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

const routes: Routes = [
  { path: 'dashboard', component: DashComponent },
  { path: 'dashboard', component: DashComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
