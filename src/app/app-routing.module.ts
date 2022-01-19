import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaypgComponent } from './displaypg/displaypg.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: '', redirectTo:'index', pathMatch:'full'},
  {path:'index', component:HomepageComponent},
  {path: 'display/:query', component:DisplaypgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
