import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './pages/color/color.component';

const routes: Routes = [
  {path:'dashboard/colores',component:ColorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
