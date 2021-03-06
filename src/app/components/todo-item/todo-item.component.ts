import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

   // set Dynamic Classes binding
   setClasses() {
     let classes = {
       todo: true,
       'is-complete': this.todo.completed,
     }
     return classes;
   }

   // onToggle
   onToggle(todo){
    // Toggle in UI
    todo.completed = !todo.completed;
    //Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
   }
  

   //onDelete
   onDelete(todo){
     console.log('delete');
   }
}
