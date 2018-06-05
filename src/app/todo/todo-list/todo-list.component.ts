import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo-model';
import { TodoService } from '../todo.service';
import { MatDialog, MatDialogConfig, MatTableDataSource } from '@angular/material';
import { TodoNewComponent } from '../todo-new/todo-new.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  displayedColumns = ['title'];
  dataSource = new MatTableDataSource(this.todos);

  constructor(private todoService: TodoService, private dialog: MatDialog) { }


  ngOnInit() {
    this.todoService.test();
    this.todoService.getAllTodos().subscribe((data: any) => {
      console.log('data', data);
      this.todos = data;
    });
  }

  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

        dialogConfig.data = { };

        const dialogRef = this.dialog.open(TodoNewComponent,
            dialogConfig);


        dialogRef.afterClosed().subscribe(
            val => console.log('Dialog output:', val)
        );
  }

}
