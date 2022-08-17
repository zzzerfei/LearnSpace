import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroCompleteComponent } from './components/hero-complete/hero-complete.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'heroes', component:HeroesComponent },
  {path:'complete', component:HeroCompleteComponent },
  {path:'detail/:id',component:HeroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
