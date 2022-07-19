import { Component } from '@angular/core';

const todos = [
  {
    title: "Задача 1",
    completed: false
  },
  {
    title: "Задача 2",
    completed: false
  },
  {
    title: "Задача 3",
    completed: false
  },
]

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],

})
export class AppComponent  { name = 'Angular 2'; 
todos = todos;

toggle(todo: any) {

  todo.completed = !todo.completed;
  // console.log("Переключение:",todo);
}

delete(todo: any) {
  let index = this.todos.indexOf(todo);

  if (index > -1) this.todos.splice(index,1);

}


}
