import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControlName} from '@angular/forms';
import { Todo } from '../todo-model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css']
})

export class TodoNewComponent implements OnInit {
  todo = new Todo();
  todoForm: FormGroup;
  mode = 'new';

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private dialogRef: MatDialogRef<TodoNewComponent>,
    @Inject(MAT_DIALOG_DATA)
    { id, title, started, completed, comment, archived }: Todo
  ) {
    this.todoForm = this.fb.group({
      id: id,
      title: title,
      started: started,
      completed: completed,
      comment: comment,
      archived: archived
    });
  }

  ngOnInit() {}


  onSave() {
    console.log('onSave');
    this.dialogRef.close(this.todoForm.value);
    this.todoService.addTodo(this.todoForm.value);
  }

  onClose() {
    console.log('onClose');
    this.dialogRef.close();
  }
}
