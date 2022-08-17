import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/hero/components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero/components/hero-detail/hero-detail.component';
import { ListComponent } from './components/hero/components/list/list.component';
import { HeroComponent } from './components/hero/hero.component';
import { TodoListComponent } from './components/todo/component/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  {
    path: 'hero',
    component: HeroComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'list', component: ListComponent },
      {
        path: 'detail/:id', component: HeroDetailComponent
      },
    ]
  },
  {
    path: 'todo', 
    component: TodoComponent,
    children: [
      {path:'', component:TodoListComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const todoRoutedComponents = [ TodoListComponent ];