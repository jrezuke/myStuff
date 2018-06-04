import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoNewComponent } from './todo/todo-new/todo-new.component';


const routes: Routes = [
  { path: '', redirectTo: '/home',    pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'todo', component: TodoComponent,
    children:[
      {path: 'list', component: TodoListComponent,
      children: [
        {path: 'new', component: TodoNewComponent}
      ]},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
