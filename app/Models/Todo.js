

export class Todo {
  constructor(data) {
    this.description = data.description
    this.completed = data.completed
    this.id = data.id
  }

  get ListItemTemplate() {
    return `
    <div class="row">
      <h4 onclick="app.todoController.complete('${this.id}')" class="col-10 ${this.completed ? 'done' : ''} selectable py-2 d-flex align-items-center my-0">${this.description}</h4>
      <p class="col-2 d-flex align-items-center mb-0"><i onclick="app.todoController.deleteItem('${this.id}')" class="btn mdi mdi-delete"></i></p>
    </div>
    `
  }
}