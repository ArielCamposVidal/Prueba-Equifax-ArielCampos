import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './pages/tables/tables.component';
import { TodoComponent } from './todo/todo.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'

const routes: Routes = [
  { path: 'todos', component: TodoComponent },
  { path: 'table-user', component: TablesComponent },
  { path: 'form-user', component: ReactiveFormComponent },
  { path: '', pathMatch: 'full', redirectTo: 'todos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
