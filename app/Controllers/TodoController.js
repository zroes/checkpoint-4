import { appState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";
import { Pop } from "../Utils/Pop.js";



function _drawTodoList() {
  let template = `<h4>todo: ${appState.todoList.filter(i => i.completed == false).length}</h4>`
  appState.todoList.forEach(item => {
    template += item.ListItemTemplate
  })
  template += `
  <form onsubmit="app.todoController.addTodoListItem()">
    <input type="text" name="list-item" id="list-item" class="form-control"
    placeholder="What do you need to do?">
  </form>`
  document.getElementById('todo-list').innerHTML = template

}

export class TodoController {
  constructor() {
    console.log("todo controller");
    appState.on('todoList', _drawTodoList)
    this.getTodoList()
  }

  async deleteItem(id) {
    if (await Pop.confirm('Are you sure you want to delete?')) {
      console.log("deletin item", id);
      try {
        todoService.deleteItem(id)
      } catch (error) {
        console.error(error)
        Pop.error('unable to delete item')
      }
    }
  }

  async complete(id) {
    try {
      await todoService.complete(id)
    } catch (error) {
      console.error(error)
      Pop.error("unable to contact api")
    }
  }

  async getTodoList() {
    await todoService.getTodoList()
  }

  async addTodoListItem() {
    event.preventDefault()
    const form = event.target
    try {
      await todoService.addTodoListItem(form['list-item'].value)
    } catch (error) {
      console.log(error)
      Pop.error("unable to add item, try again later")
    }
    // @ts-ignore
    form.reset()
  }
}